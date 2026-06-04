import { useEffect, useState } from 'react'

function parseStatValue(value: string): { end: number; suffix: string; prefix: string; isInfinity: boolean } {
  if (value === '∞') return { end: 0, suffix: '', prefix: '', isInfinity: true }
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/)
  if (!match) return { end: 0, suffix: value, prefix: '', isInfinity: false }
  return {
    prefix: match[1],
    end: parseFloat(match[2]),
    suffix: match[3],
    isInfinity: false,
  }
}

export function useCountUp(value: string, active: boolean, duration = 1400) {
  const parsed = parseStatValue(value)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!active || parsed.isInfinity) {
      setDisplay(value)
      return
    }

    let start: number | null = null
    let frame = 0

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const current = parsed.end * eased
      const formatted =
        parsed.end % 1 !== 0
          ? current.toFixed(1)
          : Math.round(current).toLocaleString()
      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`)
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, value, duration, parsed.end, parsed.isInfinity, parsed.prefix, parsed.suffix])

  return display
}
