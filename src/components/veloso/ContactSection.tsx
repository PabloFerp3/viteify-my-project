import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function ContactSection() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {t("contact.badge")}
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t("contact.email_label")}
                  </h3>
                  <a
                    href="mailto:info.talleresveloso@gmail.com"
                    className="mt-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    info.talleresveloso@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t("contact.phone_label")}
                  </h3>
                  <a
                    href="tel:623258421"
                    className="mt-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    623258421
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t("contact.address_label")}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("contact.address_value")}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden rounded-lg border border-border bg-secondary/50 p-6 lg:block">
              <p className="text-sm font-medium text-foreground">
                {t("contact.horario")}
              </p>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t("contact.lun_vie")}</span>
                  <span className="text-foreground">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.sabado")}</span>
                  <span className="text-foreground">{t("contact.bajo_cita")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.domingo")}</span>
                  <span className="text-muted-foreground">{t("contact.cerrado")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact.form_nombre")}
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    required
                    className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder={t("contact.form_nombre_placeholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact.form_email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder={t("contact.form_email_placeholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t("contact.form_mensaje")}
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    required
                    className="w-full resize-none rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder={t("contact.form_mensaje_placeholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  {submitted ? (
                    t("contact.form_submitted")
                  ) : (
                    <>
                      {t("contact.form_submit")}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
