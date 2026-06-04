type IconProps = { className?: string }

export function ArrowUp({ className, stroke = 'currentColor' }: IconProps & { stroke?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M1.5 6H10.5M6.25 1.75L10.5 6L6.25 10.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HamburgerIcon({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#2A6EC4" strokeWidth="1.5" />
      <path d="M8 12L11 15L16 9" stroke="#2A6EC4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SocialIcon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-4 w-4 items-center justify-center text-white transition-opacity hover:opacity-80"
    >
      {children}
    </a>
  )
}

export function SocialLinks({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const fill = variant === 'light' ? '#FFFFFF' : '#000000'
  return (
    <div className="flex items-center gap-[25px]">
      <SocialIcon label="LinkedIn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill={fill}>
          <path d="M3.5 2C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9zm1.25 2h1.5v7h-1.5V4zm.75 0c.83 0 1.5.67 1.5 1.5S6.33 7 5.5 7 4 6.33 4 5.5 4.67 4 5.5 4zm2.75 0h1.44c.28 0 .5.22.5.5v.19c.42-.32.96-.5 1.56-.5 1.66 0 3 1.34 3 3v3.81h-1.5V10c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v2.5h-1.5V4z" />
        </svg>
      </SocialIcon>
      <SocialIcon label="X">
        <svg width="16" height="16" viewBox="0 0 16 16" fill={fill}>
          <path d="M9.52 6.77L15.05 0h-1.31L8.9 5.88 4.79 0H0l5.8 8.45L0 16h1.31l5.96-6.92L11.21 16H16L9.52 6.77zm-1.8 2.08L7.52 8.2 2.29 1.04h2.49l4.22 6.15.75 1.08 4.98 7.2h-2.49l-4.06-5.82z" />
        </svg>
      </SocialIcon>
      <SocialIcon label="Instagram">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke={fill} strokeWidth="1.2" />
          <circle cx="8" cy="8" r="3" stroke={fill} strokeWidth="1.2" />
          <circle cx="12" cy="4" r="0.75" fill={fill} />
        </svg>
      </SocialIcon>
      <SocialIcon label="Facebook">
        <svg width="16" height="16" viewBox="0 0 16 16" fill={fill}>
          <path d="M9 5.5h2V3h-2.5C6.9 3 6 4.4 6 6v1.5H4v2.25h2V16h3V9.75h2.25L12 7.5H9V5.5z" />
        </svg>
      </SocialIcon>
      <SocialIcon label="WhatsApp">
        <svg width="16" height="16" viewBox="0 0 16 16" fill={fill}>
          <path d="M8 1.5a6.5 6.5 0 00-5.57 9.86L1.5 14.5l3.28-1.02A6.5 6.5 0 108 1.5zm0 1.2a5.3 5.3 0 01-2.68 9.92l-.19-.1-1.94.6.63-1.89-.12-.2A5.3 5.3 0 118 2.7zm2.9 6.35c-.15-.08-.88-.43-1.02-.48-.14-.05-.24-.08-.34.08-.1.15-.39.48-.48.58-.09.1-.18.11-.33.04-.15-.08-.63-.23-1.2-.74-.44-.39-.74-.87-.83-1.02-.09-.15 0-.23.07-.3.07-.07.15-.18.23-.27.08-.09.1-.15.15-.25.05-.1.03-.19-.02-.27-.05-.08-.34-.82-.47-1.12-.12-.28-.25-.24-.34-.24h-.29c-.1 0-.25.04-.38.19-.13.15-.5.49-.5 1.2s.51 1.39.58 1.49c.07.1 1 1.53 2.43 2.14.34.15.6.24.8.31.34.11.64.09.88.06.27-.04.88-.36 1-.71.12-.35.12-.65.08-.71-.04-.06-.15-.1-.3-.18z" />
        </svg>
      </SocialIcon>
    </div>
  )
}

export function StatBoltIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M18 4L8 18h8l-2 10 12-16h-8l2-8z" stroke="#2A6EC4" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

export function StatShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 4l10 4v7c0 6.5-4.3 12.6-10 14-5.7-1.4-10-7.5-10-14V8l10-4z"
        stroke="#2A6EC4"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StatUsersIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="12" cy="11" r="4" stroke="#2A6EC4" strokeWidth="2" />
      <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#2A6EC4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="12" r="3" stroke="#2A6EC4" strokeWidth="1.5" />
      <path d="M18 26c.5-2.8 2.4-5 5-5" stroke="#2A6EC4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function StatInfinityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M10 16c0-3.3 2.7-6 6-6 2.2 0 4.1 1.2 5.2 3 1.1-1.8 3-3 5.2-3 3.3 0 6 2.7 6 6s-2.7 6-6 6c-2.2 0-4.1-1.2-5.2-3-1.1 1.8-3 3-5.2 3-3.3 0-6-2.7-6-6z"
        stroke="#2A6EC4"
        strokeWidth="2"
      />
    </svg>
  )
}
