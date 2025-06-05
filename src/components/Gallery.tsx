
import { Eye, Heart, Star } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/33627e3d-d88e-42c2-a22e-5bd801ba9db5.png",
      alt: "Red nail design with elegant finish",
      category: "Nail Design",
      likes: 127,
      featured: true
    },
    {
      src: "/lovable-uploads/9adcb9ca-3c56-4c3b-8b42-fb7754803e5c.png",
      alt: "Blue nail extension with professional finish",
      category: "Nail Extension",
      likes: 89,
      featured: false
    },
    {
      src: "/lovable-uploads/455cf295-994b-417d-9a74-3e85ec54c8db.png",
      alt: "Professional foot nail design",
      category: "Pedicure",
      likes: 156,
      featured: true
    },
    {
      src: "/lovable-uploads/5b0657df-977c-4771-9a81-ee7ddb55951c.png",
      alt: "Lip filler treatment result",
      category: "Estética Facial",
      likes: 203,
      featured: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with frost glass */}
        <div className="text-center mb-20">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-gold-400 mr-3 fill-current" />
              <h2 className="font-poppins text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gold-300 to-white bg-clip-text text-transparent">
                Galeria de Trabalhos
              </h2>
              <Star className="w-8 h-8 text-gold-400 ml-3 fill-current" />
            </div>
            <p className="font-poppins text-xl text-white/80 max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos mais recentes e se inspire com a excelência dos nossos resultados
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                image.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ 
                aspectRatio: image.featured ? '16/12' : '1/1',
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {/* Frost glass overlay card */}
              <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"></div>
                
                {/* Featured badge */}
                {image.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full text-sm font-poppins font-semibold shadow-lg">
                    ✨ Featured
                  </div>
                )}
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-3">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-4 py-2 flex items-center">
                      <Heart className="w-4 h-4 text-red-400 mr-2" />
                      <span className="text-white font-poppins font-semibold">{image.likes}</span>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4">
                    <p className="font-poppins font-bold text-white text-lg mb-1">{image.category}</p>
                    <p className="font-poppins text-white/80 text-sm">Trabalho Premium</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="font-poppins text-xl text-white/90 mb-6">
              Quer ver mais do nosso trabalho? Siga-nos no Instagram!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Ver Mais Trabalhos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
