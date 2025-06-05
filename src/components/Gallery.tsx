import { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/33627e3d-d88e-42c2-a22e-5bd801ba9db5.png",
      alt: "Red nail design with elegant finish",
      category: "Nail Design"
    },
    {
      src: "/lovable-uploads/9adcb9ca-3c56-4c3b-8b42-fb7754803e5c.png",
      alt: "Blue nail extension with professional finish",
      category: "Nail Extension"
    },
    {
      src: "/lovable-uploads/455cf295-994b-417d-9a74-3e85ec54c8db.png",
      alt: "Professional foot nail design",
      category: "Pedicure"
    },
    {
      src: "/lovable-uploads/5b0657df-977c-4771-9a81-ee7ddb55951c.png",
      alt: "Lip filler treatment result",
      category: "Estética Facial"
    },
    {
      src: "/lovable-uploads/5c6bef38-de22-49fd-9179-f4c2edad6558.png",
      alt: "Professional aesthetic treatment preparation",
      category: "Estética Facial"
    },
    {
      src: "/lovable-uploads/f065e584-c967-4113-8af1-7e63d0ea7086.png",
      alt: "Facial treatment session",
      category: "Estética Facial"
    },
    {
      src: "/lovable-uploads/35049dd2-23ba-423e-878d-300e08e9a9d7.png",
      alt: "Beauty clinic professional environment",
      category: "Clínica"
    },
    {
      src: "/lovable-uploads/19b12df7-61f1-42fc-8601-27b528417424.png",
      alt: "Gold facial mask treatment",
      category: "Tratamento Premium"
    },
    {
      src: "/lovable-uploads/17fba9ce-6af0-40d4-ad93-5a44c2b6fbb4.png",
      alt: "Madam Martins Beauty Clinic gift bag",
      category: "Produtos"
    },
    {
      src: "/lovable-uploads/0848d81a-de96-4e51-84ed-ea2d15ec91a8.png",
      alt: "Purple nail art design",
      category: "Nail Art"
    },
    {
      src: "/lovable-uploads/b60812a5-cf88-4163-8ff6-fca0e95657ac.png",
      alt: "Blue nail design with elegant finish",
      category: "Nail Design"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-amber-50 to-gold-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Galeria de Trabalhos
          </h2>
          <p className="font-poppins text-xl text-stone-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e se inspire
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-3">
                    <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-white/80 backdrop-blur-sm border border-gold-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-gold-900/50 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="font-poppins font-normal text-lg">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gold-600 hover:bg-gold-700 text-white border-gold-600 -left-6" />
            <CarouselNext className="bg-gold-600 hover:bg-gold-700 text-white border-gold-600 -right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
