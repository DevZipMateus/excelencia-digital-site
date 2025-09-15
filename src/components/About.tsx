import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Soluções rápidas",
      description: "Produtos digitais pensados para resolver seus problemas de forma ágil e eficiente."
    },
    {
      icon: Shield,
      title: "Qualidade garantida",
      description: "Todos os nossos produtos passam por rigorosa curadoria para garantir a melhor experiência."
    },
    {
      icon: Award,
      title: "Excelência em conteúdo",
      description: "Conteúdo desenvolvido por especialistas, com foco em resultados práticos e aplicáveis."
    },
    {
      icon: Users,
      title: "Suporte dedicado",
      description: "Atendimento personalizado para tirar suas dúvidas e garantir o melhor aproveitamento."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary">Sobre a Excelência Digital</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especializados em produtos digitais de alta qualidade, oferecendo ebooks, 
            receitas e planilhas que transformam a maneira como você resolve problemas do cotidiano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-primary font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-primary">Nossa missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso a soluções digitais de qualidade, oferecendo produtos 
                práticos e eficientes que realmente fazem a diferença na vida das pessoas. 
                Acreditamos que a tecnologia deve ser simples, acessível e transformadora.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Atendimento de segunda a sexta, das 8:00 às 22:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Localizada em Belém do Pará</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">CNPJ: 038.071.992-41</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-card">
                <img 
                  src="/logo-excelencia-digital.jpg" 
                  alt="Excelência Digital" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;