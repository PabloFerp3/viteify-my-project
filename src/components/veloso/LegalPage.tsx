import { ArrowLeft } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const legalContent: Record<string, { title: string; sections: { heading: string; text: string }[] }> = {
  privacidad: {
    title: "Política de Privacidad",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        text: "Veloso Industrial, con domicilio en Bembrive-Vigo, Pontevedra (España), es el responsable del tratamiento de los datos personales que el usuario proporcione a través de este sitio web. Correo electrónico de contacto: info.talleresveloso@gmail.com. Teléfono: 623258421.",
      },
      {
        heading: "2. Finalidad del tratamiento de datos",
        text: "Los datos personales recabados a través del formulario de contacto serán tratados con la finalidad de gestionar y responder a las consultas, solicitudes de información o presupuestos realizados por los usuarios. Los datos no serán utilizados para finalidades distintas a las descritas.",
      },
      {
        heading: "3. Legitimación del tratamiento",
        text: "La base legal para el tratamiento de sus datos es el consentimiento del usuario al enviar el formulario de contacto, así como el interés legítimo del responsable para atender las solicitudes recibidas.",
      },
      {
        heading: "4. Destinatarios de los datos",
        text: "Los datos personales no serán cedidos a terceros salvo obligación legal. No se realizan transferencias internacionales de datos.",
      },
      {
        heading: "5. Derechos del usuario",
        text: "El usuario puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición al tratamiento de sus datos personales dirigiéndose a info.talleresveloso@gmail.com, adjuntando copia de su documento de identidad.",
      },
      {
        heading: "6. Conservación de datos",
        text: "Los datos personales proporcionados se conservarán durante el tiempo necesario para dar respuesta a la consulta y, en su caso, durante los plazos legalmente establecidos.",
      },
    ],
  },
  cookies: {
    title: "Política de Cookies",
    sections: [
      {
        heading: "1. Qué son las cookies",
        text: "Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario. Se utilizan para recordar preferencias, mejorar la experiencia de navegación y recopilar información anónima sobre el uso del sitio.",
      },
      {
        heading: "2. Tipos de cookies que utilizamos",
        text: "Cookies técnicas: Necesarias para el funcionamiento básico del sitio web. Permiten la navegación y el uso de las diferentes opciones y servicios. Cookies analíticas: Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización del sitio web.",
      },
      {
        heading: "3. Gestión de cookies",
        text: "El usuario puede configurar su navegador para aceptar o rechazar todas las cookies, o para recibir un aviso en pantalla de la recepción de cada cookie y decidir en ese momento su aceptación o no. La desactivación de cookies puede afectar al correcto funcionamiento del sitio web.",
      },
      {
        heading: "4. Cookies de terceros",
        text: "Este sitio web puede utilizar servicios de terceros que, por cuenta propia, recopilan información con fines estadísticos y de uso del sitio web por parte del usuario.",
      },
      {
        heading: "5. Actualización de la política de cookies",
        text: "Veloso Industrial puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.",
      },
    ],
  },
  "aviso-legal": {
    title: "Aviso Legal",
    sections: [
      {
        heading: "1. Datos identificativos",
        text: "En cumplimiento del deber de información recogido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se facilitan los siguientes datos: Titular: Veloso Industrial. Domicilio: Bembrive-Vigo, Pontevedra (España). Contacto: info.talleresveloso@gmail.com | 623258421.",
      },
      {
        heading: "2. Objeto",
        text: "El presente aviso legal regula el uso y las condiciones de acceso al sitio web de Veloso Industrial, cuyo contenido es de carácter informativo sobre los servicios de soldadura, montaje de tubería, calderería ligera, reparaciones y mantenimientos que ofrece la empresa.",
      },
      {
        heading: "3. Propiedad intelectual e industrial",
        text: "Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Veloso Industrial o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación.",
      },
      {
        heading: "4. Condiciones de uso",
        text: "El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Veloso Industrial ofrece a través de su sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.",
      },
      {
        heading: "5. Exclusión de responsabilidad",
        text: "Veloso Industrial no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.",
      },
      {
        heading: "6. Legislación aplicable y jurisdicción",
        text: "Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Vigo.",
      },
    ],
  },
}

interface LegalPageProps {
  type: string
  onBack: () => void
}

export function LegalPage({ type, onBack }: LegalPageProps) {
  const { t } = useI18n()
  const content = legalContent[type]

  if (!content) return null

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("legal.volver")}
        </button>

        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {content.title}
        </h1>
        <div className="mb-10 h-1 w-16 bg-primary" />

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t("legal.actualizacion")}
          </p>
        </div>
      </div>
    </section>
  )
}
