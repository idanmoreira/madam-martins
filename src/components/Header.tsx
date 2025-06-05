import { Instagram, MapPin } from 'lucide-react';
import Navigation from './Navigation';
const Header = () => {
  return <section id="home">
      <Navigation />
      <header className="relative min-h-screen bg-gradient-to-br from-gold-50 via-gold-100 to-amber-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col justify-center min-h-screen">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 animate-fade-in-up">
              <img src="/lovable-uploads/c7db0972-b69c-4b5c-892a-e83aae2900b3.png" alt="Madam Martins Beauty Clinic Logo" className="w-48 h-48 mx-auto mb-6 object-contain" />
            </div>

            {/* Main heading */}
            <h1 className="font-poppins text-5xl md:text-7xl font-light text-stone-800 mb-6 leading-tight animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <span className="block">MADAM MARTINS</span>
              <span className="block text-gold-600 text-3xl md:text-4xl font-normal mt-2">BEAUTY CLINIC</span>
            </h1>

            {/* Tagline */}
            <p className="font-poppins text-xl md:text-2xl text-stone-600 mb-8 animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              Transformando autocuidado em uma experiência única ✨
            </p>

            {/* Location */}
            <div className="flex items-center justify-center text-stone-700 mb-8 animate-fade-in-up" style={{
            animationDelay: '0.6s'
          }}>
              <MapPin className="w-5 h-5 mr-2 text-gold-600" />
              <span className="font-poppins text-lg">4B Father Mathew St, Cork, Ireland</span>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-center text-stone-700 animate-fade-in-up" style={{
            animationDelay: '0.8s'
          }}>
              <Instagram className="w-5 h-5 mr-2 text-gold-600" />
              <span className="font-poppins text-lg">@madammartinsbeautyclinic</span>
            </div>

            {/* CTA Button */}
            <div className="mt-12 animate-fade-in-up" style={{
            animationDelay: '1s'
          }}>
              <button className="bg-gold-600 hover:bg-gold-700 text-white font-poppins font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>;
};
export default Header;