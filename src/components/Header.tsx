import { useState } from 'react'
import { HamburgerIcon } from './icons'
import logo2 from '../assets/logo2.svg'

type HeaderProps = {
  variant?: 'light' | 'dark'
}

export function Header({ variant = 'light' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isLight = variant === 'light'
  const textColor = isLight ? 'text-white' : 'text-black'
  const menuBorder = isLight ? 'border-white' : 'border-black'
  const menuText = isLight ? 'text-white' : 'text-black'

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="relative mx-auto flex w-full max-w-full lg:max-w-[1345px] items-center justify-between px-6 pt-[37px] lg:px-12">

    {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src={logo2}
    alt="WorkHub Logo"
    className="h-10 w-auto lg:h-12"
  />

  <div className={`leading-tight ${textColor}`}>
    <div className="text-xl font-bold lg:text-2xl">
      WorkHub
    </div>

    <div className="text-xs lg:text-sm font-medium">
      by incial
    </div>
  </div>
</div>
      {/* Menu */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`inline-flex items-center gap-2.5 rounded-[22.5px] border px-[21px] py-[11px] text-base font-normal transition-all duration-300 ${menuBorder} ${menuText}`}
        >
          Menu
          <HamburgerIcon className={menuText} />
        </button>

        {isMenuOpen && (
          <>
            {/* Mobile full-screen menu (only below lg) */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 lg:hidden"
              role="dialog"
              aria-modal="true"
              onClick={closeMenu}
            >
              <div className="mx-6 w-full max-w-md rounded-2xl bg-black p-8" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="absolute top-6 right-6 text-white"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <nav className="flex flex-col gap-4">
                  <a href="#home" onClick={closeMenu} className="block px-4 py-3 text-2xl font-medium text-white">Home</a>
                  <a href="#features" onClick={closeMenu} className="block px-4 py-3 text-2xl font-medium text-white">Features</a>
                  <a href="#why-workhub" onClick={closeMenu} className="block px-4 py-3 text-2xl font-medium text-white">Why WorkHub</a>
                  <a href="#pricing" onClick={closeMenu} className="block px-4 py-3 text-2xl font-medium text-white">Pricing</a>
                  <a href="#contact" onClick={closeMenu} className="block px-4 py-3 text-2xl font-medium text-white">Contact Us</a>
                </nav>
              </div>
            </div>

            {/* Desktop dropdown (only lg and above) */}
            <div className="hidden lg:block absolute z-50 mt-4 right-0 w-64 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <a href="#home" onClick={closeMenu} className="block px-6 py-5 text-lg font-medium text-white transition-all duration-300 hover:bg-zinc-900">Home</a>
              <a href="#features" onClick={closeMenu} className="block px-6 py-5 text-lg font-medium text-white transition-all duration-300 hover:bg-zinc-900">Features</a>
              <a href="#why-workhub" onClick={closeMenu} className="block px-6 py-5 text-lg font-medium text-white transition-all duration-300 hover:bg-zinc-900">Why WorkHub</a>
              <a href="#pricing" onClick={closeMenu} className="block px-6 py-5 text-lg font-medium text-white transition-all duration-300 hover:bg-zinc-900">Pricing</a>
              <a href="#contact" onClick={closeMenu} className="block px-6 py-5 text-lg font-medium text-white transition-all duration-300 hover:bg-zinc-900">Contact Us</a>
            </div>
          </>
        )}
      </div>

    </header>
  )
}