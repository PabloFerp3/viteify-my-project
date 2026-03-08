import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function Footer() {
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
                className="h-12 w-auto object-contain"
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
                <a href="tel:623258421" className="transition-colors hover:text-primary">623258421</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info.talleresveloso@gmail.com" className="transition-colors hover:text-primary">info.talleresveloso@gmail.com</a>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                {t("footer.redes") || "Redes Sociales"}
              </h3>
              <a
                href="https://www.instagram.com/veloso_industrial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span>@veloso_industrial</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("footer.legal")}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {t("footer.rgpd")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("footer.derechos")}
          </p>
        </div>
      </div>
    </footer>
  )
}
