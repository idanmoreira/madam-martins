
import { Sparkles, Palette, Zap, Crown, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Estética Facial",
      subtitle: "Tratamentos Premium",
      description: "Tratamentos faciais personalizados com tecnologia avançada para realçar sua beleza natural",
      icon: <Sparkles className="w-10 h-10" />,
      image: "/lovable-uploads/05ebb247-4d0b-470d-8d97-2e01114dc425.png",
      features: ["Vapor de Ozônio", "Preenchimento Labial", "Hidratação Profunda", "Lifting Facial"],
      price: "A partir de €80",
      badge: "Mais Popular"
    },
    {
      id: 2,
      title: "Nail Designer",
      subtitle: "Arte Exclusiva",
      description: "Arte em unhas com designs exclusivos, técnicas avançadas e produtos de alta qualidade",
      icon: <Palette className="w-10 h-10" />,
      image: "/lovable-uploads/33627e3d-d88e-42c2-a22e-5bd801ba9db5.png",
      features: ["Extensão Premium", "Design Personalizado", "Nail Art Exclusiva", "Produtos Importados"],
      price: "A partir de €45",
      badge: "Tendência"
    },
    {
      id: 3,
      title: "Depilação",
      subtitle: "Conforto Garantido",
      description: "Técnicas modernas de depilação com produtos premium para pele lisa e sedosa",
      icon: <Zap className="w-10 h-10" />,
      image: "/lovable-uploads/455cf295-994b-417d-9a74-3e85ec54c8db.png",
      features: ["Técnicas Avançadas", "Produtos Premium", "Conforto Garantido", "Resultados Duradouros"],
      price: "A partir de €25",
      badge: "Especialidade"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section with frost glass */}
        <div className="text-center mb-20">
          <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-8 h-8 text-gold-600 mr-3" />
              <h2 className="font-poppins text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent">
                Nossos Serviços Premium
              </h2>
              <Crown className="w-8 h-8 text-gold-600 ml-3" />
            </div>
            <p className="font-poppins text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços de beleza com a mais alta qualidade, 
              tecnologia avançada e profissionalismo excepcional
            </p>
            
            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold-600 mr-2" />
                <span className="font-poppins text-slate-600 font-medium">Produtos Certificados</span>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-6 h-6 text-gold-600 mr-2" />
                <span className="font-poppins text-slate-600 font-medium">Profissionais Qualificadas</span>
              </div>
              <div className="flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold-600 mr-2" />
                <span className="font-poppins text-slate-600 font-medium">Resultados Garantidos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Floating frost glass card */}
              <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full text-sm font-poppins font-semibold shadow-lg">
                    {service.badge}
                  </span>
                </div>
                
                {/* Image section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/20 border border-white/30 p-4 rounded-2xl text-white shadow-xl">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-8">
                  <div className="mb-4">
                    <p className="font-poppins text-gold-600 font-semibold text-sm uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </p>
                    <h3 className="font-poppins text-3xl font-bold text-slate-800 mb-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="font-poppins text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="font-poppins text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mr-3 shadow-sm"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-2xl font-bold text-slate-800">{service.price}</span>
                    <button className="group/btn backdrop-blur-md bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-poppins font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold-500/25">
                      <span className="group-hover/btn:scale-110 transition-transform duration-200 inline-block">
                        Agendar
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="font-poppins text-lg text-slate-700 mb-6">
              Pronta para transformar sua beleza? Entre em contato conosco hoje mesmo!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-poppins font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
