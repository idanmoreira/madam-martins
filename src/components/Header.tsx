
import { Instagram, MapPin, Star, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-gold-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col justify-center min-h-screen">
        <div className="text-center max-w-5xl mx-auto">
          {/* Frost glass card for logo and main content */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 mb-8 shadow-2xl animate-fade-in-up">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/c7db0972-b69c-4b5c-892a-e83aae2900b3.png" 
                alt="Madam Martins Beauty Clinic Logo" 
                className="w-52 h-52 mx-auto mb-6 object-contain filter drop-shadow-2xl"
              />
            </div>

            {/* Main heading with gradient text */}
            <h1 className="font-poppins text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block bg-gradient-to-r from-white via-gold-300 to-white bg-clip-text text-transparent">
                MADAM MARTINS
              </span>
              <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent text-4xl md:text-5xl font-medium mt-4">
                BEAUTY CLINIC
              </span>
            </h1>

            {/* Premium tagline */}
            <div className="flex items-center justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Sparkles className="w-6 h-6 text-gold-400 mr-3" />
              <p className="font-poppins text-2xl md:text-3xl text-white/90 font-light">
                Transformando autocuidado em experiência única
              </p>
              <Sparkles className="w-6 h-6 text-gold-400 ml-3" />
            </div>

            {/* Premium features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                </div>
                <p className="font-poppins text-white/80 text-sm">Excelência Premium</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="font-poppins text-gold-400 font-semibold text-lg">1,319+</p>
                <p className="font-poppins text-white/80 text-sm">Clientes Satisfeitas</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="font-poppins text-gold-400 font-semibold text-lg">5 Anos</p>
                <p className="font-poppins text-white/80 text-sm">de Experiência</p>
              </div>
            </div>
          </div>

          {/* Location card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center text-white/90">
              <MapPin className="w-6 h-6 mr-3 text-gold-400" />
              <span className="font-poppins text-xl font-medium">4B Father Mathew St, Cork, Ireland</span>
            </div>
          </div>

          {/* Social proof card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center text-white/90">
              <Instagram className="w-6 h-6 mr-3 text-gold-400" />
              <span className="font-poppins text-xl">@madammartinsbeautyclinic • 1,319 followers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <button className="group relative bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-poppins font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gold-500/25 border border-gold-400/50">
              <span className="relative z-10">Agendar Consulta Premium</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            <button className="group backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white font-poppins font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="relative z-10">Ver Portfólio</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
