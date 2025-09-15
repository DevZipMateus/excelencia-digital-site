import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
              <img 
                src="/logo-excelencia-digital.jpg" 
                alt="Excelência Digital" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
              />
              <span className="text-lg sm:text-xl font-bold">
                Excelência Digital
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              Especializada em produtos digitais de alta qualidade, oferecendo soluções 
              rápidas e práticas para o seu dia a dia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg">Links rápidos</h3>
            <nav className="space-y-2 sm:space-y-3">
              <a href="#inicio" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm sm:text-base">
                Início
              </a>
              <a href="#sobre" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm sm:text-base">
                Sobre
              </a>
              <a href="#servicos" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm sm:text-base">
                Serviços
              </a>
              <a href="#contato" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm sm:text-base">
                Contato
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg">Nossos produtos</h3>
            <nav className="space-y-2 sm:space-y-3">
              <span className="block text-primary-foreground/80 text-sm sm:text-base">Ebooks exclusivos</span>
              <span className="block text-primary-foreground/80 text-sm sm:text-base">Receitas especiais</span>
              <span className="block text-primary-foreground/80 text-sm sm:text-base">Planilhas inteligentes</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="https://wa.me/5591982161215"
                className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">(91) 98216-1215</span>
              </a>
              <a 
                href="mailto:jhonatanluid253@gmail.com"
                className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">jhonatanluid253@gmail.com</span>
              </a>
              <div className="flex items-start justify-center sm:justify-start space-x-2 sm:space-x-3 text-primary-foreground/80">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" />
                <span className="leading-relaxed text-xs sm:text-sm">
                  Rua Santo André, 831<br />
                  Conjunto Porto Larangeira<br />
                  Tenoné - Belém/PA
                </span>
              </div>
              <a 
                href="https://www.instagram.com/janes26178?igsh=OTZzaWhsZDQxd2Z1&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">@janes26178</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 sm:space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-primary-foreground/80 text-xs sm:text-sm">
                © {currentYear} Excelência Digital. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                CNPJ: 038.071.992-41
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-primary-foreground/80 text-xs sm:text-sm">
                Horário de atendimento
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Segunda a sexta, das 8:00 às 22:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;