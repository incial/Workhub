import { motion } from 'framer-motion'

export function MoreFromIncialSection() {
  const Card = () => (
    <div className="relative w-full max-w-[503px] overflow-hidden rounded-[10px]">
      <div className="relative h-[279px] w-full overflow-hidden">
        <img
          src="/images/stockflow.png"
          alt="StockFlow product preview"
          className="absolute left-[12%] top-[-7%] h-[134%] w-[94%] max-w-none object-cover shadow-feature-card"
        />
        <div className="relative z-10 px-9 pt-10">
          <p className="m-0 text-2xl font-semibold text-white">StockFlow</p>
          <p className="mt-4 text-base text-white">by Incial</p>
        </div>
      </div>
    </div>
  )

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.2, 0.8, 0.2, 1],
        delay: 0.2,
      },
    },
  }

  return (
    <section
      id="more-from-encial"
      className="bg-white px-6 py-20 lg:px-[141px] lg:py-28"
    >
      <div className="mx-auto grid max-w-[1158px] gap-12 lg:grid-cols-[905px_1fr] lg:items-start lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={contentVariants}
        >
          <div className="flex max-w-[905px] flex-col gap-5">
            <h2 className="m-0 text-[48px] font-bold leading-[60px] text-black">
              More From Incial
            </h2>

            <p className="m-0 text-lg italic leading-[29.25px] text-workhub-secondary">
              Incial offers a range of innovative products designed to streamline
              business operations. From intuitive project management tools to
              advanced customer engagement platforms, each solution focuses on
              simplicity and efficiency to help companies thrive.
            </p>

            <motion.div className="mt-6" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardVariants}>
              <Card />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex items-center justify-end">
          <a
            href="https://incial.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-black
              px-8
              py-4
              text-lg
              font-medium
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-neutral-900
              hover:scale-105
            "
          >
            Visit Incial →
          </a>
        </div>
      </div>
    </section>
  )
}