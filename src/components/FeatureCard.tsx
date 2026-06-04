type FeatureCardProps = {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="feature-card flex w-[min(363px,85vw)] shrink-0 flex-col gap-5 rounded-[20px] border-[1.5px] border-workhub-border p-5">
      <img
        src="/images/feature-card-566f86.png"
        alt=""
        className="h-[178px] w-full rounded-2xl object-cover shadow-feature-card"
        width={323}
        height={178}
      />
      <h3 className="m-0 text-[22px] font-semibold leading-[33px] text-black">{title}</h3>
      <p className="m-0 text-base leading-[26px] text-workhub-muted">{description}</p>
    </article>
  )
}
