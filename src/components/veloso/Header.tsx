import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/translations";

const languages: {code: Locale;label: string;}[] = [
{ code: "es", label: "Español" },
{ code: "en", label: "English" },
{ code: "pt", label: "Português" },
{ code: "fr", label: "Français" }];


interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navItems = [
  { id: "inicio", labelKey: "nav.inicio" },
  { id: "servicios", labelKey: "nav.servicios" },
  { id: "contacto", labelKey: "nav.contacto" }];


  const handleNavigate = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("inicio")}
            className="flex items-center gap-2 group shrink-0">
            
            <img

              alt="Veloso Industrial"
              className="h-14 w-auto object-contain" src="/lovable-uploads/187dafb1-6278-4205-bee5-f3fb24ebb28f.png" />
            
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {}














            )}

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                onBlur={() => setTimeout(() => setLangDropdownOpen(false), 150)}
                className="flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50">
                
                <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                {languages.find((l) => l.code === locale)?.label}
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </button>
              {langDropdownOpen &&
              <div className="absolute right-0 top-full mt-1 w-36 overflow-hidden rounded-md border border-border bg-popover shadow-lg">
                  {languages.map((lang) =>
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setLangDropdownOpen(false);
                  }}
                  className={`flex w-full items-center px-3 py-2 text-xs transition-colors ${
                  locale === lang.code ?
                  "bg-primary/10 text-primary" :
                  "text-foreground hover:bg-secondary"}`
                  }>
                  
                      {lang.label}
                    </button>
                )}
                </div>
              }
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label={mobileMenuOpen ? t("nav.cerrar_menu") : t("nav.abrir_menu")}>
            
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="border-t border-border bg-background md:hidden">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
            currentView === item.id ?
            "bg-primary/10 text-primary" :
            "text-muted-foreground hover:bg-secondary hover:text-foreground"}`
            }>
            
                {t(item.labelKey)}
              </button>
          )}
            <div className="border-t border-border pt-3 mt-3">
              <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t("nav.idioma")}
              </p>
              {languages.map((lang) =>
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
              }}
              className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
              locale === lang.code ?
              "bg-primary/10 text-primary" :
              "text-muted-foreground hover:bg-secondary hover:text-foreground"}`
              }>
              
                  {lang.label}
                </button>
            )}
            </div>
          </div>
        </div>
      }
    </header>);

}