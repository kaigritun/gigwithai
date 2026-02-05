'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  showHome?: boolean
  separator?: 'chevron' | 'slash' | 'arrow'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'text-xs gap-1',
  md: 'text-sm gap-1.5',
  lg: 'text-base gap-2',
}

const iconSizes = {
  sm: 12,
  md: 14,
  lg: 16,
}

const separatorMap = {
  chevron: ChevronRight,
  slash: () => <span className="text-white/30">/</span>,
  arrow: () => <span className="text-white/30">→</span>,
}

export default function Breadcrumbs({
  items,
  showHome = true,
  separator = 'chevron',
  size = 'sm',
  className,
}: BreadcrumbsProps) {
  const Separator = separatorMap[separator]
  const iconSize = iconSizes[size]

  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center flex-wrap', sizeClasses[size], className)}
    >
      <ol className="flex items-center flex-wrap gap-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          const isHome = showHome && index === 0

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="text-white/30 mx-1">
                  {separator === 'chevron' ? (
                    <ChevronRight size={iconSize} />
                  ) : (
                    <Separator />
                  )}
                </span>
              )}

              {isLast ? (
                <span className="text-white/50 truncate max-w-[200px]" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    'text-white/60 hover:text-violet-400 transition-colors',
                    'flex items-center gap-1'
                  )}
                >
                  {isHome && <Home size={iconSize} className="shrink-0" />}
                  <span className="truncate max-w-[150px]">{isHome ? '' : item.label}</span>
                </Link>
              ) : (
                <span className="text-white/60 truncate max-w-[150px]">
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Structured data for SEO
export function BreadcrumbJsonLd({ items, showHome = true }: Pick<BreadcrumbsProps, 'items' | 'showHome'>) {
  const baseUrl = 'https://gigwithai.com'
  
  const allItems = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
