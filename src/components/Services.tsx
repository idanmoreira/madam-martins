
import { Sparkles, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Estética Facial",
      description: "Tratamentos faciais personalizados para realçar sua beleza natural",
      icon: <Sparkles className="w-8 h-8" />,
      image: "/lovable-uploads/05ebb247-4d0b-470d-8d97-2e01114dc425.png",
      features: ["Vapor de Ozônio", "Preenchimento Labial", "Hidratação Profunda"]
    },
    {
      id: 2,
      title: "Nail Designer",
      description: "Arte em unhas com designs exclusivos e técnicas avançadas",
      icon: <Palette className="w-8 h-8" />,
      image: "/lovable-uploads/33627e3d-d88e-42c2-a22e-5bd801ba9db5.png",
      features: ["Extensão de Unhas", "Design Personalizado", "Nail Art Exclusiva"]
    },
    {
      id: 3,
      title: "Depilação",
      description: "Técnicas modernas de depilação para pele lisa e sedosa",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=300&fit=crop&crop=center",
      features: ["Técnicas Avançadas", "Produtos Premium", "Conforto Garantido"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gold-50 to-gold-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Nossos Serviços
          </h2>
          <p className="font-poppins text-xl text-stone-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza com a mais alta qualidade e profissionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gold-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-gold-600 p-3 rounded-lg mb-3">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-poppins text-2xl font-normal text-stone-800 mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins text-stone-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="font-poppins text-sm text-stone-500 flex items-center">
                      <div className="w-2 h-2 bg-gold-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
