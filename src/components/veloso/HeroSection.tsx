import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface HeroSectionProps {
  onNavigate: (view: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-welding.jpg"
        alt="Soldadura industrial profesional"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center sm:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-[#ffffff] sm:text-5xl lg:text-6xl text-balance">
          {t("hero.title")}
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          {t("hero.description")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => onNavigate("servicios")}
            className="group flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            {t("hero.cta_servicios")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => onNavigate("contacto")}
            className="flex items-center gap-2 rounded-md border border-border bg-background/20 px-6 py-3 text-sm font-semibold text-[#ffffff] backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-background/30"
          >
            {t("hero.cta_contacto")}
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  )
}
