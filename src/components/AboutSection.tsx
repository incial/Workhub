import { Button } from './Button'
import { AnimateIn } from './AnimateIn'

const ABOUT_TEXT = `WorkHub is the all-in-one workplace management software that brings your tasks, team, communication, and workflows into a single, centralized dashboard — powered by AI.
No more juggling multiple tools. No more missed deadlines. No more scattered information.`

export function AboutSection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-[130px] lg:py-16">
      <AnimateIn className="mx-auto flex max-w-full lg:max-w-[1181px] flex-col items-center gap-[54px] text-center">
        <p className="m-0 max-w-full lg:max-w-[1181px] whitespace-pre-line text-xl italic leading-relaxed text-black">
          {ABOUT_TEXT}
        </p>

        <Button
          variant="primary"
          size="md"
          className="
            !bg-black
            !text-white
            !px-8
            !py-4
            rounded-full
            shadow-lg
            hover:!bg-neutral-900
            transition-all
            duration-300
          "
        >
          Try it Out →
        </Button>
      </AnimateIn>
    </section>
  )
}