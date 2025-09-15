import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const galleryImages = [
    "/galeria/midia_1.png",
    "/galeria/midia_2.png", 
    "/galeria/midia_3.jpg",
    "/galeria/midia_4.jpg",
    "/galeria/midia_5.jpg",
    "/galeria/midia_6.jpg",
    "/galeria/midia_7.jpg",
    "/galeria/midia_8.jpg",
    "/galeria/midia_9.jpg",
    "/galeria/midia_10.jpg",
    "/galeria/midia_11.jpg",
    "/galeria/midia_12.jpg",
    "/galeria/midia_13.png",
    "/galeria/midia_14.jpg",
    "/galeria/midia_15.jpg",
    "/galeria/midia_16.jpg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary">Nossa galeria</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Confira alguns dos nossos produtos digitais e materiais disponíveis 
            para download imediato.
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer border-0 shadow-card hover:shadow-elegant transition-smooth group">
                          <CardContent className="p-0">
                            <div className="aspect-square overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Produto ${index + 1} - Excelência Digital`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="relative">
                          <img
                            src={image}
                            alt={`Produto ${index + 1} - Excelência Digital`}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h3 className="text-primary">Gostou do que viu?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Entre em contato conosco e adquira os produtos que mais se adequam 
              às suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5591982161215" className="btn-cta">
                Ver todos os produtos
              </a>
              <a href="https://wa.me/5591982161215" className="btn-outline">
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;