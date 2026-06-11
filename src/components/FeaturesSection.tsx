import { AnimateIn } from './AnimateIn'
import { FeatureCard } from './FeatureCard'
import { SectionLabel } from './SectionLabel'

import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'

const FEATURES = [
  {
    title: 'Unified Dashboard',
    description:
      'Manage all business activities from a single centralized dashboard.',
    image: img1,
  },
  {
    title: 'Task Scheduling',
    description:
      'Create, assign, and monitor tasks efficiently across teams.',
    image: img2,
  },
  {
    title: 'Team Management',
    description:
      'Track team performance and improve collaboration effortlessly.',
    image: img3,
  },
  {
    title: 'Integrated Communication',
    description:
      'Communicate instantly with your team from one platform.',
    image: img4,
  },
  {
    title: 'Analytics & Insights',
    description:
      'Get powerful business insights through real-time analytics.',
    image: img5,
  },
  {
    title: 'Document Management',
    description:
      'Store, organize, and access company documents securely.',
    image: img6,
  },
  {
    title: 'Custom Workflows',
    description:
      'Build workflows tailored specifically for your organization.',
    image: img7,
  },
  {
    title: 'CRM Management',
    description:
      'Manage customers, leads, and sales pipelines efficiently.',
    image: img8,
  },
]

function FeatureMarquee({ items }: { items: typeof FEATURES }) {
  const loop = [...items, ...items]

  return (
    <div className="feature-marquee-single overflow-hidden">
      <div className="feature-marquee-inner flex gap-[50px]">
        {loop.map((feature, i) => (
          <FeatureCard
            key={`${feature.title}-${i}`}
            {...feature}
          />
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
            Everything Your Team Needs
          </h2>

          <p className="m-0 max-w-full lg:max-w-[672px] text-xl italic leading-[30px] text-workhub-muted">
            Powerful tools designed to simplify operations, improve
            productivity, and help your business grow.
          </p>
        </AnimateIn>
      </div>

      <div className="mt-4">
        <FeatureMarquee items={FEATURES} />
      </div>
    </section>
  )
}