
import { MapPin, Phone, Mail, Instagram, Clock, Heart, Award, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/c7db0972-b69c-4b5c-892a-e83aae2900b3.png" 
                  alt="Madam Martins Beauty Clinic Logo" 
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-white">Madam Martins</h3>
                  <p className="font-poppins text-gold-400">Beauty Clinic</p>
                </div>
              </div>
              <p className="font-poppins text-white/80 text-lg leading-relaxed mb-6">
                Especializadas em estética facial, nail design e depilação com mais de 5 anos de experiência. 
                Transformando autocuidado em uma experiência única e sofisticada.
              </p>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Award className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <p className="font-poppins text-sm text-white/70">Certificadas</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <p className="font-poppins text-sm text-white/70">Seguras</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <p className="font-poppins text-sm text-white/70">Dedicadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl h-full">
              <h3 className="font-poppins text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-gold-400 mr-2" />
                Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-gold-400 flex-shrink-0" />
                  <div>
                    <p className="font-poppins text-white font-medium">4B Father Mathew St</p>
                    <p className="font-poppins text-white/80">Cork, Ireland</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gold-400 flex-shrink-0" />
                  <p className="font-poppins text-white">+353 21 XXX XXXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gold-400 flex-shrink-0" />
                  <p className="font-poppins text-white">info@madammartinsbeauty.ie</p>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 mr-3 text-gold-400 flex-shrink-0" />
                  <p className="font-poppins text-white">@madammartinsbeautyclinic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl h-full">
              <h3 className="font-poppins text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 text-gold-400 mr-2" />
                Horário
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-white">Segunda - Sexta</span>
                  <span className="font-poppins text-gold-400 font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-white">Sábado</span>
                  <span className="font-poppins text-gold-400 font-semibold">9:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-white">Domingo</span>
                  <span className="font-poppins text-red-400 font-semibold">Fechado</span>
                </div>
              </div>
              
              {/* Emergency contact */}
              <div className="mt-6 p-4 backdrop-blur-sm bg-gold-500/20 border border-gold-400/30 rounded-2xl">
                <p className="font-poppins text-gold-300 text-sm font-medium">
                  💫 Atendimento de emergência mediante agendamento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <p className="font-poppins text-white/70 mr-4">
                  © 2024 Madam Martins Beauty Clinic. Todos os direitos reservados.
                </p>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-red-400 mr-1" />
                  <span className="font-poppins text-white/70 text-sm">Feito com amor em Cork</span>
                </div>
              </div>
              
              {/* Social media */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.instagram.com/madammartinsbeautyclinic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Instagram className="w-5 h-5 text-gold-400" />
                </a>
                <button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-poppins font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Agende Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
