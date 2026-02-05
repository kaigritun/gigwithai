'use client'

import { useState, useEffect } from 'react'
import { getVariant, ExperimentResult } from './ab-testing'

/**
 * React hook for A/B testing
 * Returns variant assignment after hydration to avoid SSR mismatch
 */
export function useExperiment(experimentName: string): ExperimentResult & { isLoading: boolean } {
  const [result, setResult] = useState<ExperimentResult & { isLoading: boolean }>({
    variant: '',
    isControl: true,
    isLoading: true,
  })

  useEffect(() => {
    const assignment = getVariant(experimentName)
    setResult({
      ...assignment,
      isLoading: false,
    })
  }, [experimentName])

  return result
}

/**
 * Hook that returns a specific variant value or fallback while loading
 */
export function useVariant<T>(
  experimentName: string,
  variantMap: Record<string, T>,
  fallback: T
): { value: T; isLoading: boolean } {
  const { variant, isLoading } = useExperiment(experimentName)
  
  if (isLoading || !variant) {
    return { value: fallback, isLoading }
  }
  
  return {
    value: variantMap[variant] ?? fallback,
    isLoading: false,
  }
}
