import { useTranslation } from "react-i18next";
import { solutions } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Solutions() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-main.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">{t("nav.solutions")}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={t(`solutions.${solution.translationKey}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white">
                      {t(`solutions.${solution.translationKey}.title`)}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed flex-grow">
                    {t(`solutions.${solution.translationKey}.desc`)}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>High Reliability</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Cost Effective</span>
                    </div>
                  </div>

                  <Link href={`/contact?subject=${solution.id}`}>
                    <Button className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-emerald-600 hover:text-white transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      {t("hero.cta")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
