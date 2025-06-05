
import { Instagram, ExternalLink, Heart, MessageCircle, Share } from 'lucide-react';

const InstagramSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-md bg-white/40 border border-white/50 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h2 className="font-poppins text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent mb-6">
              Siga-nos no Instagram
            </h2>
            <p className="font-poppins text-xl text-slate-700 max-w-2xl mx-auto">
              Acompanhe nossos trabalhos mais recentes, dicas de beleza e ofertas exclusivas
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Instagram card */}
          <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl shadow-2xl overflow-hidden mb-8">
            <div className="p-8">
              {/* Profile header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center mr-6 shadow-lg">
                      <Instagram className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-2xl text-slate-800">@madammartinsbeautyclinic</h3>
                    <p className="font-poppins text-slate-600 text-lg">1,319 seguidores • 5 anos de experiência</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center mr-4">
                        <Heart className="w-4 h-4 text-red-500 mr-1" />
                        <span className="font-poppins text-sm text-slate-600">98% satisfação</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 text-blue-500 mr-1" />
                        <span className="font-poppins text-sm text-slate-600">Resposta rápida</span>
                      </div>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://www.instagram.com/madammartinsbeautyclinic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Seguir
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Instagram Post */}
              <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl overflow-hidden shadow-xl">
                {/* Post image */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/cc462e51-bf7f-4585-a1c1-1d272e989a28.png"
                    alt="Clinic owners Pam and Carol Martins"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Post engagement overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-3 py-1 flex items-center">
                      <Heart className="w-4 h-4 text-red-400 mr-1" />
                      <span className="text-white text-sm font-poppins font-semibold">247</span>
                    </div>
                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-3 py-1 flex items-center">
                      <MessageCircle className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-white text-sm font-poppins font-semibold">38</span>
                    </div>
                  </div>
                </div>
                
                {/* Post content */}
                <div className="p-6">
                  <h4 className="font-poppins text-2xl font-bold text-slate-800 mb-4">
                    ✨ Conheça Nossa Equipe de Especialistas
                  </h4>
                  <p className="font-poppins text-slate-700 mb-6 leading-relaxed">
                    Pam Martins e Carol Martins, fundadoras da Madam Martins Beauty Clinic, 
                    trazem anos de experiência internacional e paixão pela excelência em beleza. 
                    Nossa missão é transformar cada cliente em sua melhor versão! 💫
                  </p>
                  
                  {/* Post actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-slate-600 hover:text-red-500 transition-colors duration-200">
                        <Heart className="w-5 h-5 mr-2" />
                        <span className="font-poppins font-medium">Curtir</span>
                      </button>
                      <button className="flex items-center text-slate-600 hover:text-blue-500 transition-colors duration-200">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        <span className="font-poppins font-medium">Comentar</span>
                      </button>
                      <button className="flex items-center text-slate-600 hover:text-purple-500 transition-colors duration-200">
                        <Share className="w-5 h-5 mr-2" />
                        <span className="font-poppins font-medium">Compartilhar</span>
                      </button>
                    </div>
                    <a 
                      href="https://www.instagram.com/p/DAn0phDNpWa/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-poppins text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center transition-colors duration-200"
                    >
                      Ver no Instagram
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 font-poppins mb-2">1,319+</div>
              <div className="text-slate-700 font-poppins">Seguidores Engajados</div>
            </div>
            <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-pink-600 font-poppins mb-2">500+</div>
              <div className="text-slate-700 font-poppins">Posts Inspiradores</div>
            </div>
            <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-gold-600 font-poppins mb-2">98%</div>
              <div className="text-slate-700 font-poppins">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
