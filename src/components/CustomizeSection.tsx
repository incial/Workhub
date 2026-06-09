import { motion } from 'framer-motion'
import imageHero from '../assets/hero.png'
import { Button } from './Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function CustomizeSection() {
  const { ref: sectionRef, visible: sectionVisible } = useScrollReveal<HTMLElement>(0.18)

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] } },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.4, ease: [0.2, 0.8, 0.2, 1] } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
  }

  function scrollToContact() {
    const el = document.getElementById('contact-section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="customize"
      ref={sectionRef}
      className="bg-white px-6 py-20 lg:px-36 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-full lg:max-w-[1158px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-12">
          <motion.div
            initial="hidden"
            animate={sectionVisible ? 'visible' : 'hidden'}
            variants={leftVariants}
            className="flex flex-col gap-6 lg:pr-6"
          >
            <span className="text-sm font-medium text-black/70">CUSTOMIZATION</span>

            <h2 className="m-0 text-[40px] font-bold leading-[52px] text-black">
              Customize WorkHub to Fit Your Business
            </h2>

            <p className="m-0 max-w-full lg:max-w-[680px] text-base leading-[30px] text-black/80">
              Every business operates differently.
              WorkHub is designed to adapt to your workflow, processes, and team
              structure without adding unnecessary complexity.
              Whether you manage projects, sales, operations, HR, or customer
              relationships, WorkHub helps you build a workspace that works exactly
              the way your business needs.
            </p>

            <motion.div
              initial="hidden"
              animate={sectionVisible ? 'visible' : 'hidden'}
              variants={buttonVariants}
              className="mt-4"
            >
              <Button variant="primary-dark" size="md" onClick={scrollToContact} className="rounded-[25px]">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={sectionVisible ? 'visible' : 'hidden'}
            variants={rightVariants}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-[520px] transform transition-all">
              <img
                src={imageHero}
                alt="WorkHub dashboard mockup"
                className="w-full rounded-[16px] shadow-lg floating-mockup"
                style={{ willChange: 'transform, opacity' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .floating-mockup {
          animation: floatY 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default CustomizeSection
