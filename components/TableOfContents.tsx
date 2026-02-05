'use client'

import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { List, ChevronDown, ChevronUp } from 'lucide-react'

export interface TocItem {
  id: string
  text: string
  level: number
}

export interface TableOfContentsProps {
  /** Array of heading items - auto-extracted or manually provided */
  items?: TocItem[]
  /** CSS selector for container to scan for headings */
  containerSelector?: string
  /** Which heading levels to include (default: h2, h3) */
  headingLevels?: ('h1' | 'h2' | 'h3' | 'h4')[]
  /** Title for the TOC section */
  title?: string
  /** Whether TOC is collapsible on mobile */
  collapsible?: boolean
  /** Start collapsed on mobile */
  defaultCollapsed?: boolean
  /** Show active indicator for current section */
  highlightActive?: boolean
  /** Offset for scroll spy (accounts for sticky header) */
  scrollOffset?: number
  className?: string
}

export default function TableOfContents({
  items: providedItems,
  containerSelector = 'article',
  headingLevels = ['h2', 'h3'],
  title = 'On this page',
  collapsible = true,
  defaultCollapsed = true,
  highlightActive = true,
  scrollOffset = 100,
  className,
}: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>(providedItems || [])
  const [activeId, setActiveId] = useState<string>('')
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  // Extract headings from container
  useEffect(() => {
    if (providedItems) return

    const container = document.querySelector(containerSelector)
    if (!container) return

    const selector = headingLevels.join(', ')
    const headings = container.querySelectorAll(selector)
    
    const extractedItems: TocItem[] = []
    headings.forEach((heading) => {
      const el = heading as HTMLElement
      // Create ID if not present
      if (!el.id) {
        el.id = el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || `heading-${extractedItems.length}`
      }
      
      extractedItems.push({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      })
    })

    setItems(extractedItems)
  }, [providedItems, containerSelector, headingLevels])

  // Scroll spy - track active section
  useEffect(() => {
    if (!highlightActive || items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${scrollOffset}px 0px -80% 0px`,
        threshold: 0,
      }
    )

    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items, highlightActive, scrollOffset])

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - scrollOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }, [scrollOffset])

  if (items.length === 0) return null

  const minLevel = Math.min(...items.map((item) => item.level))

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        'bg-white/5 rounded-lg border border-white/10',
        className
      )}
    >
      {/* Header */}
      <button
        onClick={() => collapsible && setIsCollapsed(!isCollapsed)}
        className={cn(
          'flex items-center justify-between w-full px-4 py-3',
          'text-sm font-medium text-white/80',
          collapsible && 'cursor-pointer hover:text-white transition-colors',
          !collapsible && 'cursor-default'
        )}
        disabled={!collapsible}
        aria-expanded={collapsible ? !isCollapsed : undefined}
      >
        <span className="flex items-center gap-2">
          <List size={16} className="text-violet-400" />
          {title}
        </span>
        {collapsible && (
          <span className="text-white/40 md:hidden">
            {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </span>
        )}
      </button>

      {/* Items */}
      <ul
        className={cn(
          'px-4 pb-4 space-y-1',
          collapsible && isCollapsed && 'hidden md:block'
        )}
      >
        {items.map((item) => {
          const indent = (item.level - minLevel) * 12
          const isActive = activeId === item.id

          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToHeading(item.id)}
                className={cn(
                  'text-left w-full text-sm py-1.5 transition-colors rounded-md',
                  'hover:text-violet-400',
                  isActive ? 'text-violet-400 font-medium' : 'text-white/60'
                )}
                style={{ paddingLeft: `${indent}px` }}
              >
                {item.text}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// Sidebar variant - sticky on desktop
export function TableOfContentsSidebar(props: TableOfContentsProps) {
  return (
    <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <TableOfContents 
        {...props} 
        collapsible={false}
        className="bg-transparent border-0 border-l border-white/10 rounded-none pl-4"
      />
    </div>
  )
}
