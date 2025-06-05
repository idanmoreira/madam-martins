
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/6cb102a7-aad6-4f4b-a306-606a00235ffe.png" alt="Madam Martins Beauty Clinic" className="w-10 h-10 object-contain" />
            <span className="ml-2 font-poppins font-semibold text-stone-800"></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-poppins text-stone-700 hover:text-gold-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="font-poppins text-stone-700 hover:text-gold-600 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('gallery')} className="font-poppins text-stone-700 hover:text-gold-600 transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('instagram')} className="font-poppins text-stone-700 hover:text-gold-600 transition-colors">
              Instagram
            </button>
            <button onClick={() => scrollToSection('contact')} className="font-poppins text-stone-700 hover:text-gold-600 transition-colors">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-stone-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gold-200">
            <div className="py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 font-poppins text-stone-700 hover:text-gold-600 hover:bg-gold-50 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 font-poppins text-stone-700 hover:text-gold-600 hover:bg-gold-50 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 font-poppins text-stone-700 hover:text-gold-600 hover:bg-gold-50 transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('instagram')} className="block w-full text-left px-4 py-2 font-poppins text-stone-700 hover:text-gold-600 hover:bg-gold-50 transition-colors">
                Instagram
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 font-poppins text-stone-700 hover:text-gold-600 hover:bg-gold-50 transition-colors">
                Contato
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
