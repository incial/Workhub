
import { motion } from 'framer-motion'

export function CtaSection() {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  }

  return (
    <section className="bg-white px-6 py-6 lg:px-[364px] lg:py-10 flex items-center">
      <motion.div
        className="mx-auto flex max-w-full lg:max-w-[589px] flex-col items-center gap-[50px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={variants}
      >
        <div className="flex flex-col gap-5">
          <h2 className="m-0 text-[32px] font-bold leading-none text-black">
            Ready to Transform Your Workflow?
          </h2>

          <p className="m-0 text-base text-black">
            We promise to reply within 24 hours, every time.
          </p>
        </div>

       
      </motion.div>
    </section>
  )
}