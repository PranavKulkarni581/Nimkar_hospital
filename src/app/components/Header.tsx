import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Doctors', id: 'doctors' },
    { label: 'Services', id: 'services' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Endoscopy', id: 'endoscopy' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#F97316]">
              Nimkar Hospital
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1F2937] hover:text-[#F97316] transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-[#EA580C] transition-colors duration-200 font-medium"
            >
              <Phone size={18} />
              Emergency
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1F2937] hover:text-[#F97316] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#1F2937] hover:text-[#F97316] transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-[#EA580C] transition-colors duration-200 font-medium justify-center"
              >
                <Phone size={18} />
                Emergency
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
