import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ms", label: "Bahasa Melayu" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.solutions"), href: "/solutions" },
    { label: t("nav.technologies"), href: "/technologies" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.resources"), href: "/resources" },
    { label: t("nav.about"), href: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-800 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-xl text-white shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <path d="m4.93 4.93 14.14 14.14" />
                  <path d="m19.07 4.93-14.14 14.14" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none tracking-tight text-slate-900 dark:text-white">
                EnovoGrid
              </span>
              <span className="text-[10px] font-medium text-emerald-600 tracking-wider uppercase">
                Energy Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600",
                  location === item.href
                    ? "text-emerald-600 font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-slate-600 dark:text-slate-300">
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{i18n.language.split('-')[0]}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      "cursor-pointer",
                      i18n.language === lang.code && "bg-emerald-50 text-emerald-600"
                    )}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/contact" className="inline-block">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 rounded-full px-6">
                {t("nav.contact")}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 lg:hidden animate-in slide-in-from-top-10 duration-200">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 border-b border-slate-100 dark:border-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm border",
                      i18n.language === lang.code
                        ? "border-emerald-600 text-emerald-600 bg-emerald-50"
                        : "border-slate-200 text-slate-600"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                {t("nav.contact")}
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-emerald-600 rounded-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl text-white">EnovoGrid</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t("nav.solutions")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Microgrids</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Solar PV</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Energy Storage</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Hydro Power</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t("nav.technologies")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">VSG Control</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">EMS & SCADA</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Remote Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">{t("nav.contact")}</h4>
            <ul className="space-y-2 text-sm">
              <li>info@enovogrid.com</li>
              <li>+86 123 4567 8900</li>
              <li>123 Green Energy Park, Tech District</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
