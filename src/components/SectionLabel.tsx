type SectionLabelProps = {
  children: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionLabel({ children, align = 'center', className = '' }: SectionLabelProps) {
  return (
    <p
      className={`m-0 text-base font-semibold uppercase tracking-[0.05em] text-workhub-blue ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {children}
    </p>
  )
}
