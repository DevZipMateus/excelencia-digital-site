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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.color}/10 group-hover:${service.color}/20 transition-smooth`}>
                    <service.icon className={`w-6 h-6 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-primary group-hover:text-primary/80 transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-primary">Características:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 space-y-3">
                  <Button variant="cta" className="w-full" asChild>
                    <a href="https://wa.me/5591982161215">
                      <Download className="w-4 h-4" />
                      Adquirir agora
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
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
        <div className="mt-16 text-center bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h3 className="text-primary">Não encontrou o que procura?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar você com soluções 
              personalizadas para suas necessidades específicas.
            </p>
            <Button variant="cta" size="lg" asChild>
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