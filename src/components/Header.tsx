import { HamburgerIcon, SocialLinks } from './icons'

type HeaderProps = {
  variant?: 'light' | 'dark'
}

export function Header({ variant = 'light' }: HeaderProps) {
  const isLight = variant === 'light'
  const textColor = isLight ? 'text-white' : 'text-black'
  const menuBorder = isLight ? 'border-white' : 'border-black'
  const menuText = isLight ? 'text-white' : 'text-black'

  return (
    <header className="relative mx-auto flex w-full max-w-[1345px] items-center px-6 pt-[37px] lg:px-12">
      
      {/* Left Logo */}
      <p className={`m-0 text-2xl font-bold leading-none ${textColor}`}>
        <span className="font-semibold">WorkHub</span>{' '}
        <span className="text-base font-medium">by incial</span>
      </p>

      {/* Center Menu Button */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <button
          type="button"
          className={`inline-flex items-center gap-2.5 rounded-[22.5px] border px-[21px] py-[11px] text-base font-normal ${menuBorder} ${menuText}`}
        >
          Menu
          <HamburgerIcon className={menuText} />
        </button>
      </div>

      {/* Right Social Icons */}
      <div className="ml-auto hidden sm:block">
        <SocialLinks variant={isLight ? 'light' : 'dark'} />
      </div>
    </header>
  )
}