import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(91) 98216-1215",
      link: "https://wa.me/5591982161215",
      description: "WhatsApp disponível"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "jhonatanluid253@gmail.com",
      link: "mailto:jhonatanluid253@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Santo André, 831",
      link: null,
      description: "Conjunto Porto Larangeira, Tenoné - Belém/PA"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a sexta",
      link: null,
      description: "Das 8:00 às 22:00"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas. 
            Entre em contato através dos canais abaixo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth text-center">
              <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-primary text-base sm:text-lg">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 sm:space-y-2 p-4 sm:p-6 pt-0">
                {info.link ? (
                  <a 
                    href={info.link}
                    className="block font-semibold text-foreground hover:text-primary transition-smooth text-sm sm:text-base"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {info.content}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTAs */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* WhatsApp Card */}
          <Card className="border-0 shadow-card gradient-hero text-white">
            <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Fale conosco no WhatsApp
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Atendimento rápido e personalizado para tirar suas dúvidas e fazer pedidos.
                </p>
              </div>
              <Button variant="hero" size="lg" asChild className="w-full">
                <a href="https://wa.me/5591982161215">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Abrir WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-primary font-semibold text-lg sm:text-xl">
                  Siga-nos no Instagram
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Acompanhe nossas novidades, dicas e lançamentos de produtos.
                </p>
              </div>
              <Button variant="outline" size="lg" asChild className="w-full">
                <a 
                  href="https://www.instagram.com/janes26178?igsh=OTZzaWhsZDQxd2Z1&utm_source=ig_contact_invite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                  @janes26178
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Business Info */}
        <div className="mt-8 sm:mt-12 bg-secondary rounded-3xl p-6 sm:p-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-primary font-semibold text-lg sm:text-xl">
              Excelência Digital
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              CNPJ: 038.071.992-41 | Belém do Pará, Brasil
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Especializada em produtos digitais de excelência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;