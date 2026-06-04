import { Button } from './Button'
import { AnimateIn } from './AnimateIn'

const ABOUT_TEXT = `WorkHub is not a regular enterprise management software or CRM. It is designed to remove complexity and keep only what truly matters for a company to operate smoothly.

There are no unnecessary features, no confusing workflows, and no heavy enterprise clutter.

WorkHub includes only the essential tools a company needs, such as task management, a clean CRM, team visibility, and clear reporting.`

export function AboutSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-[130px] lg:py-32">
      <AnimateIn className="mx-auto flex max-w-[1181px] flex-col items-center gap-[54px] text-center">
        <p className="m-0 max-w-[1181px] whitespace-pre-line text-xl italic leading-relaxed text-black">
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