import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChefHat, Calculator, Download, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Ebooks exclusivos",
      description: "Conteúdo digital de alta qualidade com informações práticas e aplicáveis para resolver seus desafios do dia a dia.",
      features: [
        "Formato PDF otimizado",
        "Conteúdo exclusivo",
        "Aplicação prática",
        "Linguagem clara e objetiva"
      ],
      badge: "Mais Popular",
      color: "bg-blue-500"
    },
    {
      icon: ChefHat,
      title: "Receitas especiais",
      description: "Coleção completa de receitas testadas e aprovadas, com passo a passo detalhado e dicas profissionais.",
      features: [
        "Receitas testadas",
        "Ingredientes acessíveis",
        "Passo a passo ilustrado",
        "Dicas profissionais"
      ],
      badge: "Novidade",
      color: "bg-green-500"
    },
    {
      icon: Calculator,
      title: "Planilhas inteligentes",
      description: "Planilhas automatizadas para organização financeira, controle de gastos e planejamento estratégico.",
      features: [
        "Fórmulas automatizadas",
        "Design profissional",
        "Fácil personalização",
        "Compatível Excel/Google"
      ],
      badge: "Essencial",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra nossa linha completa de produtos digitais, cada um desenvolvido 
            com foco na qualidade e na praticidade para o seu dia a dia.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center ${service.color}/10 group-hover:${service.color}/20 transition-smooth`}>
                    <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-primary group-hover:text-primary/80 transition-smooth text-lg sm:text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm font-semibold text-primary">Características:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-muted-foreground">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                  <Button variant="cta" className="w-full text-sm sm:text-base" asChild>
                    <a href="https://wa.me/5591982161215">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      Adquirir agora
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full text-sm sm:text-base" asChild>
                    <a href="https://wa.me/5591982161215">
                      Saber mais
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-card">
          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            <h3 className="text-primary">Não encontrou o que procura?</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Entre em contato conosco e descubra como podemos ajudar você com soluções 
              personalizadas para suas necessidades específicas.
            </p>
            <Button variant="cta" size="lg" asChild className="w-full sm:w-auto">
              <a href="https://wa.me/5591982161215">
                Falar com especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;