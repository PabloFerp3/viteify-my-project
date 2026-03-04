import { useI18n } from "@/lib/i18n-context"

const services = [
  {
    titleKey: "services.s1.title",
    descKey: "services.s1.desc",
    image: "/images/service-welding.jpg",
  },
  {
    titleKey: "services.s2.title",
    descKey: "services.s2.desc",
    image: "/images/service-piping.jpg",
  },
  {
    titleKey: "services.s3.title",
    descKey: "services.s3.desc",
    image: "/images/service-boilermaking.jpg",
  },
  {
    titleKey: "services.s4.title",
    descKey: "services.s4.desc",
    image: "/images/service-maintenance.jpg",
  },
]

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {t("services.badge")}
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t("services.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t(service.titleKey)}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(service.descKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
