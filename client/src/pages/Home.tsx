import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Activity, Globe, ShieldCheck, Cpu, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-main.jpg" 
            alt="Green Energy Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          
          {/* HUD Overlay Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/4 right-1/4 w-60 h-60 border border-dashed border-emerald-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute bottom-20 left-20 flex gap-4">
              <div className="h-1 w-12 bg-emerald-500/50" />
              <div className="h-1 w-8 bg-emerald-500/30" />
              <div className="h-1 w-4 bg-emerald-500/10" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-20">
          <motion.div 
            className="max-w-3xl space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">
                Engineered for Reliability
              </span>
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight text-white">
              {t("hero.title")}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-emerald-600/25">
                {t("hero.cta")} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 text-base backdrop-blur-sm">
                {t("hero.learn_more")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "500+", icon: Globe },
              { label: "Total Capacity", value: "1.2 GW", icon: Zap },
              { label: "Uptime Guarantee", value: "99.9%", icon: Activity },
              { label: "Countries Served", value: "30+", icon: Map },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-emerald-600 mb-2">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-900 -skew-x-12 translate-x-20 z-0" />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-4xl text-slate-900 dark:text-white">
                  Engineering the Future of <span className="text-emerald-600">Distributed Energy</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  EnovoGrid transforms complex energy systems into standardized, deliverable engineering products. From microgrids to small hydro, we ensure stability, reliability, and cost-effectiveness for every project.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Full Lifecycle Delivery",
                    desc: "From feasibility study to O&M, we handle every step of the project.",
                    icon: ShieldCheck
                  },
                  {
                    title: "System-Level Integration",
                    desc: "Advanced VSG & EMS control for seamless on/off-grid switching.",
                    icon: Cpu
                  },
                  {
                    title: "Sustainable & Low Carbon",
                    desc: "Maximizing renewable penetration to reduce LCOE and emissions.",
                    icon: Leaf
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-slate-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img src="/images/tech-scada.jpg" alt="SCADA System" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-sm uppercase tracking-wider text-slate-500">System Status</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Grid Frequency</span>
                    <span className="font-mono font-bold text-emerald-600">50.02 Hz</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[98%]" />
                  </div>
                  <div className="flex justify-between text-sm pt-1">
                    <span className="text-slate-600 dark:text-slate-400">Battery SOC</span>
                    <span className="font-mono font-bold text-emerald-600">87%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[87%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-4xl text-slate-900 dark:text-white mb-4">Global Energy Solutions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Tailored engineering for diverse environments, from remote islands to industrial complexes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rural Electrification",
                image: "/images/solution-rural.jpg",
                desc: "Reliable microgrids for remote communities."
              },
              {
                title: "Industrial & Mining",
                image: "/images/solution-industrial.jpg",
                desc: "High-stability power for critical operations."
              },
              {
                title: "Island Resorts",
                image: "/images/solution-island.jpg",
                desc: "Silent, clean energy for premium destinations."
              }
            ].map((solution, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">{solution.title}</h3>
                  <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {solution.desc}
                  </p>
                  <span className="inline-flex items-center text-emerald-400 font-medium text-sm group-hover:gap-2 transition-all">
                    Explore Solution <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="container relative z-10 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Ready to Power Your Project?</h2>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto mb-10">
            Get a customized engineering proposal for your energy needs. We deliver worldwide.
          </p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 rounded-full px-10 h-14 text-lg font-semibold shadow-xl">
            {t("hero.cta")}
          </Button>
        </div>
      </section>
    </div>
  );
}

// Helper component for Map icon since it's not exported by default from lucide-react in some versions
function Map(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}
