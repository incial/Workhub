<section id="why-workhub"></section>
import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  StatBoltIcon,
  StatInfinityIcon,
  StatShieldIcon,
  StatUsersIcon,
} from './icons'
import { SectionLabel } from './SectionLabel'
import { useCountUp } from '../hooks/useCountUp'

const BENEFITS = [
  'No unnecessary features or enterprise clutter',
  'Clean and intuitive interface',
  'Seamless team collaboration',
  'Real-time updates and notifications',
  'Comprehensive reporting and analytics',
  'Scalable for teams of all sizes',
]

const STATS = [
  { value: '10x', label: 'Faster Workflows', icon: StatBoltIcon },
  { value: '99.9%', label: 'Uptime SLA', icon: StatShieldIcon },
  { value: '5000+', label: 'Active Teams', icon: StatUsersIcon },
  { value: '∞', label: 'Customization', icon: StatInfinityIcon },
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const mainRevealVariants = {
  hidden: { opacity: 0, x: 250 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6, ease: [0.2, 0.8, 0.2, 1] },
  },
}

function StatBlock({
  value,
  label,
  icon: Icon,
  active,
}: {
  value: string
  label: string
  icon: typeof StatBoltIcon
  active: boolean
}) {
  const display = useCountUp(value, active)

  return (
    <div className="flex flex-col items-center text-center">
      <div className="stat-icon-pop mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-workhub-stat-bg px-4">
        <Icon />
      </div>
      <p className="m-0 text-[32px] font-bold leading-[48px] text-black">{display}</p>
      <p className="m-0 mt-4 text-sm leading-[21px] text-workhub-muted">{label}</p>
    </div>
  )
}

export function WhyWorkHubSection() {
  return (
    <motion.section
      id="why-workhub"
      className="overflow-hidden bg-white px-6 py-20 lg:px-[100px] lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-full lg:max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[534px_1fr] lg:gap-[140px]">
          <motion.div variants={mainRevealVariants} initial="hidden" animate="visible">
            <SectionLabel align="left">Why WorkHub</SectionLabel>
            <h2 className="mt-5 mb-5 text-[48px] font-bold leading-[60px] text-black">
              Designed for Real Businesses
            </h2>
            <p className="m-0 text-lg italic leading-[29.25px] text-workhub-secondary">
              WorkHub is not a regular enterprise management software or CRM. It is designed to
              remove complexity and keep only what truly matters for a company to operate smoothly.
            </p>
          </motion.div>

          <motion.ul
            className="m-0 flex list-none flex-col gap-10 p-0 lg:pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
            {BENEFITS.map((benefit, i) => (
              <motion.li key={benefit} className="flex items-center gap-4" variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-4 floating"
                  whileInView={{ y: [0, -6, 0] }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', delay: 1.2 + i * 0.25 }}
                >
                  <CheckCircleIcon />
                  <span className="text-base leading-6 text-workhub-benefit">{benefit}</span>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

          <motion.div
            className="mt-20 grid grid-cols-2 gap-10 sm:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <StatBlock {...stat} active={true} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
