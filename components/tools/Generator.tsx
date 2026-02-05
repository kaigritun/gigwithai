'use client'

import { useState } from 'react'
import type { GeneratorTool } from '@/lib/tools'

interface Props {
  tool: GeneratorTool
}

export default function Generator({ tool }: Props) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (id: string, value: string) => {
    setValues(prev => ({ ...prev, [id]: value }))
  }

  const handleGenerate = () => {
    // Check required fields
    const missingRequired = tool.fields
      .filter(f => f.required && !values[f.id]?.trim())
      .map(f => f.label)
    
    if (missingRequired.length > 0) {
      alert(`Please fill in: ${missingRequired.join(', ')}`)
      return
    }

    // Generate output from template
    let result = tool.template
    tool.fields.forEach(field => {
      const value = values[field.id] || ''
      // Map select values to readable labels
      if (field.type === 'select' && field.options) {
        const option = field.options.find(o => o.value === value)
        const displayValue = option?.label.toLowerCase() || value
        result = result.replace(new RegExp(`{{${field.id}}}`, 'g'), displayValue)
      } else {
        result = result.replace(new RegExp(`{{${field.id}}}`, 'g'), value)
      }
    })
    setOutput(result)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setValues({})
    setOutput('')
  }

  return (
    <div className="space-y-8">
      {/* Input Fields */}
      <div className="grid gap-4">
        {tool.fields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-white/80 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            
            {field.type === 'text' && (
              <input
                type="text"
                value={values[field.id] || ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50"
              />
            )}

            {field.type === 'textarea' && (
              <textarea
                value={values[field.id] || ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 resize-none"
              />
            )}

            {field.type === 'select' && field.options && (
              <select
                value={values[field.id] || ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500/50"
              >
                <option value="" className="bg-[#0c0c0c]">Select...</option>
                {field.options.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-[#0c0c0c]">
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      {/* Generate Button */}
      <div className="flex gap-3">
        <button
          onClick={handleGenerate}
          className="flex-1 bg-orange-500 hover:bg-orange-400 text-black font-medium py-3 rounded-lg transition-colors"
        >
          Generate
        </button>
        {output && (
          <button
            onClick={handleReset}
            className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white/70 rounded-lg transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* Output */}
      {output && (
        <div className="animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-white/80">
              {tool.outputLabel}
            </label>
            <button
              onClick={handleCopy}
              className="text-sm text-orange-400 hover:text-orange-300"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-white/90 font-sans">{output}</pre>
          </div>
        </div>
      )}
    </div>
  )
}
