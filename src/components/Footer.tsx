import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-excelencia-digital.jpg" 
                alt="Excelência Digital" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">
                Excelência Digital
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especializada em produtos digitais de alta qualidade, oferecendo soluções 
              rápidas e práticas para o seu dia a dia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold">Links rápidos</h3>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Início
              </a>
              <a href="#sobre" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Sobre
              </a>
              <a href="#servicos" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Serviços
              </a>
              <a href="#contato" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contato
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-semibold">Nossos produtos</h3>
            <nav className="space-y-3">
              <span className="block text-primary-foreground/80">Ebooks exclusivos</span>
              <span className="block text-primary-foreground/80">Receitas especiais</span>
              <span className="block text-primary-foreground/80">Planilhas inteligentes</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5591982161215"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(91) 98216-1215</span>
              </a>
              <a 
                href="mailto:jhonatanluid253@gmail.com"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>jhonatanluid253@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Rua Santo André, 831<br />
                  Conjunto Porto Larangeira<br />
                  Tenoné - Belém/PA
                </span>
              </div>
              <a 
                href="https://www.instagram.com/janes26178?igsh=OTZzaWhsZDQxd2Z1&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <span>@janes26178</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Excelência Digital. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                CNPJ: 038.071.992-41
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80 text-sm">
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