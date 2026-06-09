<section id="home"></section>
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { Header } from './Header'
import { VideoModal } from './VideoModal'
import heroVideo from '../assets/video.mp4'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const navVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const enableAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false
        videoRef.current.volume = 1

        videoRef.current.play().catch(() => {
          console.log('Audio playback blocked by browser')
        })
      }

      document.removeEventListener('click', enableAudio)
    }

    document.addEventListener('click', enableAudio)

    return () => {
      document.removeEventListener('click', enableAudio)
    }
  }, [])

  return (
    <>
      <section
        id="home"
        className="relative min-h-[640px] lg:min-h-[981px] overflow-hidden bg-black"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-workhub-overlay"
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-full lg:max-w-[1440px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={navVariants}
          >
            <Header variant="light" />
          </motion.div>

          <div className="flex min-h-[560px] lg:min-h-[820px] flex-col justify-end px-6 pb-16 pt-24 lg:px-[140px] lg:pb-[120px]">
              <motion.div
              className="flex flex-col gap-8 max-w-full lg:max-w-[580px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h1
                className="m-0 text-[48px] font-bold leading-tight text-white"
                variants={itemVariants}
              >
                WorkHub
              </motion.h1>

              <motion.p
                className="m-0 text-xl italic leading-normal text-white"
                variants={itemVariants}
              >
                The enterprise management software that removes complexity and
                keeps only what truly matters
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-4 lg:absolute lg:bottom-[120px] lg:right-[140px] lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={itemVariants}
            >
              <Button
  variant="outline"
  className="!px-3 !py-3.5 btn-pulse"
  onClick={() => {
    const section = document.getElementById('contact-section')

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }}
>
  Try it Out
</Button>
              <Button
                variant="outline"
                className="!px-3 !py-3.5"
                onClick={() => setIsVideoOpen(true)}
              >
                Watch the Video
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={heroVideo}
      />
    </>
  )
}