import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(t("contact.success_message"));
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="bg-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-main.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">{t("nav.contact")}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-heading font-bold text-3xl text-slate-900 dark:text-white mb-6">{t("contact.get_in_touch")}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {t("contact.description")}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t("contact.email_us")}</h3>
                    <p className="text-slate-600 dark:text-slate-400">auto@enovogrid.com</p>

                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t("contact.call_us")}</h3>
                    <p className="text-slate-600 dark:text-slate-400">+86 123 4567 8900 (Global HQ)</p>
                    <p className="text-slate-600 dark:text-slate-400">+1 234 567 8900 (Americas)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t("contact.visit_us")}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t("contact.address_line1")}<br />
                      {t("contact.address_line2")}<br />
                      {t("contact.address_country")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">{t("contact.customer_type")}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t("contact.select_type")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="epc">{t("contact.type_epc")}</SelectItem>
                      <SelectItem value="owner">{t("contact.type_owner")}</SelectItem>
                      <SelectItem value="gov">{t("contact.type_gov")}</SelectItem>
                      <SelectItem value="other">{t("contact.type_other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.project_details")}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t("contact.project_placeholder")}
                    className="min-h-[150px]"
                    required 
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.sending") : t("contact.send_message")} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
