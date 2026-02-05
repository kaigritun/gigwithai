'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ReadingProgressProps {
  /** Show percentage text */
  showPercentage?: boolean
  /** Fixed position at top of viewport */
  fixed?: boolean
  /** Height of the progress bar */
  height?: 'sm' | 'md' | 'lg'
  /** Custom class name */
  className?: string
}

const heightClasses = {
  sm: 'h-0.5',
  md: 'h-1',
  lg: 'h-1.5',
}

export function ReadingProgress({
  showPercentage = false,
  fixed = true,
  height = 'sm',
  className,
}: ReadingProgressProps) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, scrollProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      className={cn(
        'left-0 right-0 z-50 bg-neutral-200 dark:bg-neutral-800',
        fixed ? 'fixed top-0' : 'relative',
        heightClasses[height],
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-violet-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      {showPercentage && (
        <span className="sr-only">{Math.round(progress)}% read</span>
      )}
    </div>
  )
}

interface ReadingProgressWithTextProps extends ReadingProgressProps {
  /** Position of the percentage text */
  textPosition?: 'left' | 'right' | 'center'
}

export function ReadingProgressWithText({
  textPosition = 'right',
  height = 'md',
  className,
  ...props
}: ReadingProgressWithTextProps) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, scrollProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const textPositionClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  return (
    <div className={cn('fixed top-0 left-0 right-0 z-50', className)}>
      <div
        className={cn('bg-neutral-200 dark:bg-neutral-800', heightClasses[height])}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-violet-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className={cn(
          'flex px-4 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800',
          textPositionClasses[textPosition]
        )}
      >
        {Math.round(progress)}% read
      </div>
    </div>
  )
}

export function ReadingProgressCircle({
  className,
}: {
  className?: string
}) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, scrollProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const circumference = 2 * Math.PI * 18 // radius = 18
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center',
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <svg
        className="w-12 h-12 -rotate-90"
        viewBox="0 0 44 44"
      >
        <circle
          className="text-neutral-200 dark:text-neutral-800"
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
        />
        <circle
          className="text-violet-500 transition-[stroke-dashoffset] duration-150 ease-out"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
      </svg>
      <span className="absolute text-xs font-semibold text-neutral-700 dark:text-neutral-300">
        {Math.round(progress)}%
      </span>
    </div>
  )
}
