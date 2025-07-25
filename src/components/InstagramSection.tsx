import { Instagram, ExternalLink } from 'lucide-react';

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-20 bg-gradient-to-br from-gold-100 to-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Siga-nos no Instagram
          </h2>
          <p className="font-poppins text-xl text-stone-600 max-w-2xl mx-auto">
            Acompanhe nossos trabalhos mais recentes e dicas de beleza
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-gold-200">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mr-4">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-normal text-xl text-stone-800">@madammartinsbeautyclinic</h3>
                  </div>
                </div>
                <a href="https://www.instagram.com/madammartinsbeautyclinic" target="_blank" rel="noopener noreferrer" className="bg-gold-600 hover:bg-gold-700 text-white font-poppins font-normal px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                  Seguir
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Instagram Post Placeholder */}
              <div className="bg-gold-50 rounded-lg p-8 text-center border border-gold-200">
                <div className="mb-6">
                  <img src="/lovable-uploads/cc462e51-bf7f-4585-a1c1-1d272e989a28.png" alt="Clinic owners Pam and Carol Martins" className="w-64 h-64 object-cover rounded-lg mx-auto shadow-lg border-2 border-gold-200" />
                </div>
                <h4 className="font-poppins text-2xl font-normal text-stone-800 mb-4">
                  Conheça Nossa Equipe
                </h4>
                <p className="font-poppins text-stone-600 mb-4">
                  Pam Martins e Carol Martins, fundadoras da Madam Martins Beauty Clinic, 
                  trazem anos de experiência e paixão pela beleza.
                </p>
                <a href="https://www.instagram.com/p/DAn0phDNpWa/" target="_blank" rel="noopener noreferrer" className="font-poppins text-gold-600 hover:text-gold-700 font-normal inline-flex items-center">
                  Ver no Instagram
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
