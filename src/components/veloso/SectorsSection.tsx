import { Anchor, FlaskConical, Snowflake, UtensilsCrossed, Pill, Wind, Droplets } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const sectors = [
  { key: "sectors.naval", icon: Anchor },
  { key: "sectors.quimico", icon: FlaskConical },
  { key: "sectors.frio_calor", icon: Snowflake },
  { key: "sectors.alimentario", icon: UtensilsCrossed },
  { key: "sectors.farmaceutico", icon: Pill },
  { key: "sectors.aire_comprimido", icon: Wind },
  { key: "sectors.gestion_aguas", icon: Droplets },
]

export function SectorsSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-20 sm:py-28 bg-card">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-primary" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("sectors.title")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <div
                key={sector.key}
                className="group flex flex-col items-center gap-4 rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-center text-sm font-medium text-foreground">
                  {t(sector.key)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
