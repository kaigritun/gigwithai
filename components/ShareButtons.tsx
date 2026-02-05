'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Twitter, Linkedin, Facebook, Link2, Check, Mail } from 'lucide-react'

export interface ShareButtonsProps {
  /** URL to share (defaults to current page) */
  url?: string
  /** Title/text to share */
  title: string
  /** Description for platforms that support it */
  description?: string
  /** Layout direction */
  direction?: 'horizontal' | 'vertical'
  /** Show labels */
  showLabels?: boolean
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Platforms to show */
  platforms?: ('twitter' | 'linkedin' | 'facebook' | 'email' | 'copy')[]
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 22,
}

export default function ShareButtons({
  url,
  title,
  description,
  direction = 'horizontal',
  showLabels = false,
  size = 'md',
  platforms = ['twitter', 'linkedin', 'facebook', 'email', 'copy'],
  className,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  
  // Get current URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || '')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareLinks = {
    twitter: {
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      label: 'Twitter',
      icon: Twitter,
      hoverClass: 'hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]',
    },
    linkedin: {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: 'LinkedIn',
      icon: Linkedin,
      hoverClass: 'hover:bg-[#0A66C2]/20 hover:text-[#0A66C2]',
    },
    facebook: {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: 'Facebook',
      icon: Facebook,
      hoverClass: 'hover:bg-[#1877F2]/20 hover:text-[#1877F2]',
    },
    email: {
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      label: 'Email',
      icon: Mail,
      hoverClass: 'hover:bg-violet-500/20 hover:text-violet-400',
    },
    copy: {
      onClick: handleCopy,
      label: copied ? 'Copied!' : 'Copy link',
      icon: copied ? Check : Link2,
      hoverClass: 'hover:bg-white/10 hover:text-white',
    },
  }

  const iconSize = iconSizes[size]

  return (
    <div
      className={cn(
        'flex items-center gap-2',
        direction === 'vertical' && 'flex-col',
        className
      )}
    >
      {platforms.map((platform) => {
        const config = shareLinks[platform]
        const Icon = config.icon

        const buttonClasses = cn(
          'flex items-center justify-center rounded-lg',
          'bg-white/5 text-white/60 transition-all duration-200',
          'border border-white/10',
          config.hoverClass,
          sizeClasses[size],
          showLabels && 'w-auto px-3 gap-2'
        )

        if ('onClick' in config) {
          return (
            <button
              key={platform}
              onClick={config.onClick}
              className={buttonClasses}
              aria-label={config.label}
            >
              <Icon size={iconSize} />
              {showLabels && <span className="text-sm">{config.label}</span>}
            </button>
          )
        }

        return (
          <a
            key={platform}
            href={config.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
            aria-label={`Share on ${config.label}`}
          >
            <Icon size={iconSize} />
            {showLabels && <span className="text-sm">{config.label}</span>}
          </a>
        )
      })}
    </div>
  )
}

// Floating variant - fixed position
export function ShareButtonsFloating(props: ShareButtonsProps) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ShareButtons {...props} direction="vertical" />
    </div>
  )
}

// Inline variant - with title
export function ShareButtonsInline({
  title: shareTitle,
  label = 'Share this guide',
  ...props
}: ShareButtonsProps & { label?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-4 border-t border-white/10">
      <span className="text-sm text-white/60">{label}</span>
      <ShareButtons title={shareTitle} {...props} />
    </div>
  )
}
