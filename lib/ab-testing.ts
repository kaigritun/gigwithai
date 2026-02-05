/**
 * A/B Testing Utility
 * 
 * Cookie-based experiment assignment with consistent user bucketing.
 * Works client-side and server-side (with cookie access).
 */

export interface Experiment {
  name: string
  variants: string[]
  weights?: number[] // Optional weights, defaults to equal distribution
}

export interface ExperimentResult {
  variant: string
  isControl: boolean
}

// Active experiments - add new experiments here
export const experiments: Record<string, Experiment> = {
  'cta-copy': {
    name: 'cta-copy',
    variants: ['Get Free Tips', 'Subscribe Free', 'Join Free'],
  },
  'email-position': {
    name: 'email-position',
    variants: ['hero', 'below-fold'],
  },
  'cta-button-color': {
    name: 'cta-button-color',
    variants: ['emerald', 'white', 'black'],
  },
}

const COOKIE_NAME = 'ab_experiments'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

/**
 * Generate a consistent hash for bucketing
 */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

/**
 * Get or create a user ID for consistent bucketing
 */
function getUserId(): string {
  if (typeof window === 'undefined') return ''
  
  let userId = localStorage.getItem('ab_user_id')
  if (!userId) {
    userId = Math.random().toString(36).substring(2) + Date.now().toString(36)
    localStorage.setItem('ab_user_id', userId)
  }
  return userId
}

/**
 * Get assigned variant for an experiment
 */
export function getVariant(experimentName: string): ExperimentResult {
  const experiment = experiments[experimentName]
  if (!experiment) {
    console.warn(`Unknown experiment: ${experimentName}`)
    return { variant: '', isControl: true }
  }

  // Check for existing assignment in cookie
  const assignments = getAssignments()
  if (assignments[experimentName]) {
    const variant = assignments[experimentName]
    return {
      variant,
      isControl: variant === experiment.variants[0],
    }
  }

  // Generate new assignment
  const userId = getUserId()
  const hash = hashString(userId + experimentName)
  const weights = experiment.weights || experiment.variants.map(() => 1 / experiment.variants.length)
  
  let cumulative = 0
  const bucket = (hash % 1000) / 1000
  let selectedVariant = experiment.variants[0]
  
  for (let i = 0; i < experiment.variants.length; i++) {
    cumulative += weights[i]
    if (bucket < cumulative) {
      selectedVariant = experiment.variants[i]
      break
    }
  }

  // Save assignment
  saveAssignment(experimentName, selectedVariant)

  return {
    variant: selectedVariant,
    isControl: selectedVariant === experiment.variants[0],
  }
}

/**
 * Get all current assignments from cookie
 */
function getAssignments(): Record<string, string> {
  if (typeof document === 'undefined') return {}
  
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith(COOKIE_NAME + '='))
  
  if (!cookie) return {}
  
  try {
    return JSON.parse(decodeURIComponent(cookie.split('=')[1]))
  } catch {
    return {}
  }
}

/**
 * Save an assignment to cookie
 */
function saveAssignment(experimentName: string, variant: string): void {
  if (typeof document === 'undefined') return
  
  const assignments = getAssignments()
  assignments[experimentName] = variant
  
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(assignments))}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`
}

/**
 * Force a specific variant (for testing/debugging)
 */
export function forceVariant(experimentName: string, variant: string): void {
  saveAssignment(experimentName, variant)
}

/**
 * Clear all experiment assignments (for testing)
 */
export function clearAssignments(): void {
  if (typeof document === 'undefined') return
  document.cookie = `${COOKIE_NAME}=; max-age=0; path=/`
  localStorage.removeItem('ab_user_id')
}

/**
 * Track conversion event (placeholder - integrate with analytics)
 */
export function trackConversion(experimentName: string, eventName: string): void {
  const result = getVariant(experimentName)
  
  // Log for now - integrate with Vercel Analytics or other provider
  console.log('[A/B]', {
    experiment: experimentName,
    variant: result.variant,
    event: eventName,
    timestamp: new Date().toISOString(),
  })
  
  // TODO: Send to analytics
  // - Vercel Analytics custom events
  // - Or custom endpoint for aggregation
}
