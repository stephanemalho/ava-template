const DEFAULT_ACOMPTE_PER_PERSON_EUR = 500

function parseAcompteValue(rawValue: string | undefined) {
  if (!rawValue) return DEFAULT_ACOMPTE_PER_PERSON_EUR

  const parsed = Number(rawValue)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return DEFAULT_ACOMPTE_PER_PERSON_EUR
  }

  return Math.round(parsed)
}

export const STRIPE_ACOMPTE_PER_PERSON_EUR = parseAcompteValue(process.env.STRIPE_ACOMPTE_PER_PERSON_EUR)
