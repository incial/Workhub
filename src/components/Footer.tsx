export function Footer() {
  return (
    <footer className="bg-black px-12 py-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 text-white lg:grid-cols-3">

        {/* Left Navigation */}
        <div className="flex flex-col gap-5 text-left lg:col-start-1">
          <a
            href="#home"
            className="transition-colors duration-300 hover:text-workhub-blue"
          >
            Home
          </a>

          <a
            href="#features"
            className="transition-colors duration-300 hover:text-workhub-blue"
          >
            Features
          </a>

          <a
            href="#why-workhub"
            className="transition-colors duration-300 hover:text-workhub-blue"
          >
            Why WorkHub
          </a>

          <a
            href="#more-from-encial"
            className="transition-colors duration-300 hover:text-workhub-blue"
          >
            Customize
          </a>

          <a
            href="#reviews"
            className="transition-colors duration-300 hover:text-workhub-blue"
          >
            Review
          </a>
        </div>

        {/* Center Logo & Copyright */}
        <div className="flex flex-col items-center justify-center text-center lg:col-start-2">
          <h2 className="m-0 text-6xl font-bold">
            incial.
          </h2>

          <p className="mt-4 text-base text-white/80">
            © 2026 Incial. All Rights Reserved
          </p>
        </div>

        {/* Empty Right Side for Balance */}
        <div className="hidden lg:block" />
      </div>
    </footer>
  )
}