import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-stone-800 to-stone-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-poppins text-2xl font-normal mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-gold-400" />
                <div>
                  <p className="font-poppins">4B Father Mathew St</p>
                  <p className="font-poppins">Cork, Ireland</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold-400" />
                <p className="font-poppins">+353 XXX XXX XXX</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold-400" />
                <p className="font-poppins">info@email.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-poppins text-2xl font-normal mb-6">Horário de Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-poppins">Segunda - Sexta</span>
                <span className="font-poppins">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-poppins">Sábado</span>
                <span className="font-poppins">9:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-poppins">Domingo</span>
                <span className="font-poppins">Fechado</span>
              </div>
            </div>
          </div>

          {/* Social & Info */}
          <div>
            <h3 className="font-poppins text-2xl font-normal mb-6">Redes Sociais</h3>
            <div className="flex items-center mb-6">
              <Instagram className="w-6 h-6 mr-3 text-gold-400" />
              <div>
                <p className="font-poppins font-normal">@madammartinsbeautyclinic</p>
                <p className="font-poppins text-stone-400 text-sm">
              </p>
              </div>
            </div>
            <p className="font-poppins text-stone-300 text-sm leading-relaxed">
              Especializadas em estética facial, nail design e depilação. 
              Transformando autocuidado em uma experiência única.
            </p>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <p className="font-poppins text-stone-400">© 2025 Madam Martins Beauty Clinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;