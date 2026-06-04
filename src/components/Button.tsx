import { ArrowUp } from './icons'

type ButtonVariant = 'primary' | 'outline' | 'primary-dark'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const sizeClasses = {
  sm: 'gap-2 px-3 py-3 text-xs italic',
  md: 'gap-2 px-5 py-4 text-[15px]',
  lg: 'gap-2 px-7 py-6 text-xl italic',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black border border-white',
  'primary-dark': 'bg-black text-white border-[1.5px] border-black',
  outline: 'bg-transparent text-white border-[1.5px] border-white',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  size = 'sm',
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[25px] font-normal italic transition-opacity hover:opacity-90 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowUp stroke={variant === 'primary' ? '#000000' : '#FFFFFF'} />
    </button>
  )
}
