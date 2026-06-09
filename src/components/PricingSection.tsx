import { useState } from 'react'
import { AnimateIn } from './AnimateIn'
import { ArrowUp } from './icons'

type Plan = {
  name: string
  price: string
  features: string[]
}

const MONTHLY_PLANS: Plan[] = [
  {
    name: 'Basic',
    price: '₹ 1000/month',
    features: ['10 Max Tasks', '1 Super Admin', '5 Users'],
  },
  {
    name: 'Pro',
    price: '₹ 1800/month',
    features: [
      '30 Max Tasks',
      '3 Super Admin',
      '20 Users',
      'Automation',
      'Advanced Analytics',
      'API Access',
      'Audit Log',
      '20-day-retention',
    ],
  },
  {
    name: 'Enterprise',
    price: '₹ 2600/month',
    features: [
      'Unlimited Max Tasks',
      'Unlimited Super Admin',
      'Unlimited Users',
      'Custom Workflows',
      'Full API',
      'Integrations',
      'Audit Log',
      '2-month-retention',
    ],
  },
]

const ANNUAL_PLANS: Plan[] = [
  {
    name: 'Basic',
    price: '₹ 800/month',
    features: ['10 Max Tasks', '1 Super Admin', '5 Users'],
  },
  {
    name: 'Pro',
    price: '₹ 1500/month',
    features: [
      '30 Max Tasks',
      '3 Super Admin',
      '20 Users',
      'Automation',
      'Advanced Analytics',
      'API Access',
      'Audit Log',
      '20-day-retention',
    ],
  },
  {
    name: 'Enterprise',
    price: '₹ 2200/month',
    features: [
      'Unlimited Max Tasks',
      'Unlimited Super Admin',
      'Unlimited Users',
      'Custom Workflows',
      'Full API',
      'Integrations',
      'Audit Log',
      '2-month-retention',
    ],
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  const plans = annual ? ANNUAL_PLANS : MONTHLY_PLANS

  return (
    <section
      id="pricing"
      className="bg-white px-6 py-24 lg:px-[230px]"
    >
      <div className="mx-auto max-w-full lg:max-w-[980px]">
        <AnimateIn>
          <h2 className="mb-12 text-center text-[40px] font-bold leading-[60px] text-black">
            Pricing
          </h2>
        </AnimateIn>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`rounded-[25px] border-[1.5px] border-black px-5 py-4 text-[13px] leading-[26px] ${
              !annual
                ? 'bg-black text-white'
                : 'bg-transparent text-black'
            }`}
          >
            Billed Monthly
          </button>

          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`rounded-[25px] border-[1.5px] border-black px-5 py-4 text-[13px] leading-[26px] ${
              annual
                ? 'bg-black text-white'
                : 'bg-transparent text-black'
            }`}
          >
            Billed Annually (20% off)
          </button>
        </div>

        <p className="mb-10 text-center text-sm leading-[26px] text-black">
          14 Day free trial Included
        </p>

        <div
          className="grid gap-10 lg:grid-cols-3"
          style={{
            filter: 'drop-shadow(var(--shadow-pricing))',
          }}
        >
          {plans.map((plan, index) => (
            <AnimateIn
              key={plan.name}
              as="article"
              delay={index * 120}
              className={`flex flex-col justify-between rounded-[20px] border-[1.5px] border-workhub-border bg-white p-8 transition-transform duration-300 hover:-translate-y-1 ${
                index === 1 ? 'shadow-pricing' : ''
              }`}
              style={
                index === 1
                  ? {
                      boxShadow:
                        '0 0 250px rgba(0, 113, 255, 0.42)',
                    }
                  : undefined
              }
            >
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="m-0 text-center text-xl font-semibold leading-[33px] text-black">
                    {plan.name}
                  </h3>

                  <p className="m-0 mt-4 text-center text-[32px] font-semibold leading-[33px] text-black">
                    {plan.price}
                  </p>
                </div>

                <ul className="m-0 list-none space-y-1 p-0 text-[15px] leading-[26px] text-workhub-muted">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="before:mr-2 before:content-['•']"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            <button
  type="button"
  onClick={() => {
    const contactSection = document.getElementById('contact-section')

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }}
  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[25px] border-[1.5px] border-black bg-black px-5 py-4 text-[15px] leading-[26px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900"
>
  Contact
  <ArrowUp stroke="#FFFFFF" />
</button>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}