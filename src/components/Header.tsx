import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/logo-excelencia-digital.jpg" 
              alt="Excelência Digital" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
            />
            <span className="text-lg sm:text-xl font-bold text-primary">
              Excelência Digital
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden xl:flex items-center space-x-4 text-sm">
              <a 
                href="mailto:jhonatanluid253@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden 2xl:inline">jhonatanluid253@gmail.com</span>
                <span className="xl:inline 2xl:hidden">E-mail</span>
              </a>
              <a 
                href="https://wa.me/91982593625"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden 2xl:inline">(91) 98259-3625</span>
                <span className="xl:inline 2xl:hidden">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a 
                  href="mailto:jhonatanluid253@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  <span>jhonatanluid253@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/91982593625"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Phone className="w-4 h-4" />
                  <span>(91) 98259-3625</span>
                </a>
                <a 
                  href="https://www.instagram.com/janes26178?igsh=OTZzaWhsZDQxd2Z1&utm_source=ig_contact_invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@janes26178</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;