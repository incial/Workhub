import { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from './icons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const REVIEWS = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: '~ Full Name',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: '~ Full Name',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: '~ Full Name',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

function ReviewCard({ quote, author }: { quote: string; author: string }) {
  return (
    <article className="review-card flex w-[min(683px,88vw)] shrink-0 flex-col gap-[30px] rounded-[20px] border border-workhub-border bg-white p-10 lg:w-[683px] lg:p-[60px]">
      <p className="m-0 text-base leading-[33px] text-black">{quote}</p>
      <p className="m-0 text-right text-base font-medium leading-[33px] text-black">
        {author}
      </p>
    </article>
  )
}

export function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const { ref: sectionRef, visible: sectionVisible } =
    useScrollReveal<HTMLDivElement>(0.15)

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return

    const cards = track.querySelectorAll<HTMLElement>('.review-card')
    const card = cards[index]

    if (!card) return

    const offset =
      card.offsetLeft - (track.clientWidth - card.clientWidth) / 2

    track.scrollTo({
      left: Math.max(0, offset),
      behavior: 'smooth',
    })
  }, [])

  const goNext = useCallback(() => {
    scrollToIndex(1)
  }, [scrollToIndex])

  const goPrev = useCallback(() => {
    scrollToIndex(0)
  }, [scrollToIndex])

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white px-6 py-20 lg:px-[100px] lg:py-28"
      ref={sectionRef}
    >
      <motion.div
        className="mx-auto max-w-full lg:max-w-[1440px]"
        initial="hidden"
        animate={sectionVisible ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <h2 className="mb-12 text-center text-[40px] font-bold leading-[60px] text-black lg:mb-16">
          Reviews
        </h2>
      </motion.div>

      <div className="relative mx-auto max-w-full lg:max-w-[1440px]">
        <motion.div
          className="reviews-marquee mb-8"
          initial="hidden"
          animate={sectionVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="reviews-marquee-inner">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <ReviewCard key={`marquee-${i}`} {...review} />
            ))}
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-6 lg:absolute lg:inset-y-0 lg:mt-0 lg:items-center lg:justify-between lg:px-2">
          <button
            type="button"
            aria-label="Previous review"
            onClick={goPrev}
            className="carousel-nav flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[rgba(0,0,0,0.3)] bg-white transition-transform hover:scale-105"
          >
            <span className="inline-block rotate-[-135deg]">
              <ArrowUp stroke="#000000" />
            </span>
          </button>

          <button
            type="button"
            aria-label="Next review"
            onClick={goNext}
            className="carousel-nav flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[rgba(0,0,0,0.3)] bg-white transition-transform hover:scale-105"
          >
            <span className="inline-block rotate-45">
              <ArrowUp stroke="#000000" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}