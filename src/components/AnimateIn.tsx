import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export type RevealDirection = 'up' | 'left' | 'right'

type AnimateInProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  style?: CSSProperties
  direction?: RevealDirection
}

const directionClass: Record<RevealDirection, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  style,
  direction = 'up',
}: AnimateInProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>(0.12)

  return (
    <Tag
      ref={ref}
      className={`reveal ${directionClass[direction]} ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
