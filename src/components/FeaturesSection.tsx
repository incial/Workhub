import { AnimateIn } from './AnimateIn'
import { FeatureCard } from './FeatureCard'
import { SectionLabel } from './SectionLabel'

const FEATURES = [
  {
    title: 'Unified Dashboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Task Scheduling',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Team Management',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Integrated Communication',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    title: 'Analytics & Insights',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Document Management',
    description:
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
  },
]

function FeatureMarquee({ items }: { items: typeof FEATURES }) {
  const loop = [...items, ...items]

  return (
    <div className="feature-marquee-single overflow-hidden" aria-hidden={false}>
      <div className="feature-marquee-inner flex gap-[50px]">
        {loop.map((feature, i) => (
          <FeatureCard key={`${feature.title}-${i}`} {...feature} />
        ))}
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="overflow-hidden bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-full lg:max-w-[1152px] px-6 lg:px-[82px]">
        <AnimateIn className="mb-[50px] flex flex-col items-center gap-[15px] text-center">
          <SectionLabel>Features</SectionLabel>

          <h2 className="m-0 text-[48px] font-bold leading-[72px] text-black">
            Everything You Need
          </h2>

          <p className="m-0 max-w-full lg:max-w-[672px] text-xl italic leading-[30px] text-workhub-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </AnimateIn>
      </div>

      <div className="mt-4">
        <FeatureMarquee items={FEATURES} />
      </div>
    </section>
  )
}