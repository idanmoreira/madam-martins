
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-gold-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Galeria de Trabalhos
          </h2>
          <p className="font-poppins text-xl text-stone-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e se inspire
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-white/80 backdrop-blur-sm border border-gold-200 shadow-lg">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-gold-900/50 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="font-poppins font-normal">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gold-600 hover:bg-gold-700 text-white border-gold-600" />
            <CarouselNext className="bg-gold-600 hover:bg-gold-700 text-white border-gold-600" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
