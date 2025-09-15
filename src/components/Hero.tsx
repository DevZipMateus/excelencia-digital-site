import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-white leading-tight">
                Excelência Digital
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-normal leading-relaxed">
                Produtos digitais de excelência para soluções rápidas e práticas
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Especializados em ebooks, receitas e planilhas que prometem soluções rápidas 
                para seus problemas do dia a dia. Qualidade e praticidade em produtos digitais.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white/90">Produtos de qualidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-white/80" />
                <span className="text-white/90">Download imediato</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#servicos">
                  Ver produtos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white hover:text-primary">
                <a href="https://wa.me/5591982161215">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src="/logo-excelencia-digital.jpg" 
                  alt="Excelência Digital - Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="m0,0v120l1200,0v-120c-133.3,20-266.7,20-400,0c-133.3,-20-266.7,-20-400,0c-133.3,20-266.7,20-400,0Z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;