import { useState, useEffect } from "react"
import { I18nProvider } from "@/lib/i18n-context"
import { Header } from "@/components/veloso/Header"
import { Footer } from "@/components/veloso/Footer"
import { HeroSection } from "@/components/veloso/HeroSection"
import { SectorsSection } from "@/components/veloso/SectorsSection"
import { ServicesSection } from "@/components/veloso/ServicesSection"
import { ContactSection } from "@/components/veloso/ContactSection"

export default function Home() {
  const [currentView, setCurrentView] = useState("inicio")

  const handleNavigate = (view: string) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [currentView])

  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header currentView={currentView} onNavigate={handleNavigate} />

        <main className="pt-16">
          {currentView === "inicio" && (
            <>
              <HeroSection onNavigate={handleNavigate} />
              <SectorsSection />
            </>
          )}
          {currentView === "servicios" && <ServicesSection />}
          {currentView === "contacto" && <ContactSection />}
        </main>

        <Footer />
      </div>
    </I18nProvider>
  )
}
