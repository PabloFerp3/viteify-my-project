import { MapPin, Phone, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

interface FooterProps {
  onNavigate: (view: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Veloso Industrial"
                className="h-9 w-auto object-contain brightness-90 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("footer.desc")}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.contacto")}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>{t("contact.address_value")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>623258421</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info.talleresveloso@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.legal")}
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigate("privacidad")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t("footer.privacidad")}
              </button>
              <button
                onClick={() => onNavigate("cookies")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t("footer.cookies")}
              </button>
              <button
                onClick={() => onNavigate("aviso-legal")}
                className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t("footer.aviso_legal")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-3 text-center">
            <p className="text-xs leading-relaxed text-muted-foreground">
              {t("footer.rgpd")}
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              &copy; {new Date().getFullYear()} {t("footer.derechos")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
