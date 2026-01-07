import { useTranslation } from "react-i18next";
import { technologies } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tech-scada.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">{t("nav.technologies")}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Advanced engineering for a stable, renewable future.
          </p>
        </div>
      </section>

      {/* Tech List */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {technologies.map((tech, index) => (
              <div key={tech.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-emerald-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-video">
                    <img 
                      src={tech.image} 
                      alt={t(`technologies.${tech.translationKey}.title`)}
                      className="w-full h-full object-cover"
                    />
                    {/* Tech Overlay */}
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded border border-white/20">
                      SYS.ID: {tech.id.toUpperCase()}_V2.0
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 dark:text-white">
                    {t(`technologies.${tech.translationKey}.title`)}
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`technologies.${tech.translationKey}.desc`)}
                  </p>

                  <div className="pt-4">
                    <a href={`/contact?subject=${tech.id}`}>
                      <Button variant="outline" className="gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                        Learn Technical Specs <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
