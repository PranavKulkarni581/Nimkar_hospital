import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FFF7ED] border-t border-[#FED7AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dxjibpdu8/image/upload/v1777662440/Untitled_design_7_vi6xfn.png"
                alt="Nimkar Hospital Logo"
                className="h-20 w-20 object-contain"
              />
              <h3 className="text-xl font-bold text-[#F97316]">
                Nimkar Hospital
              </h3>
            </div>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Providing compassionate and comprehensive healthcare services for over 25
              years. Your health is our priority.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1CrMkjxAcd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-colors border border-[#FED7AA]"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/nimkarhospitalendoscopycenter?utm_source=qr&igsh=MXY1Y21tM291eWJ6Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-colors border border-[#FED7AA]"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#1F2937] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#6B7280] hover:text-[#F97316] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#6B7280] hover:text-[#F97316] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('doctors')}
                  className="text-[#6B7280] hover:text-[#F97316] transition-colors"
                >
                  Our Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#6B7280] hover:text-[#F97316] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('facilities')}
                  className="text-[#6B7280] hover:text-[#F97316] transition-colors"
                >
                  Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-[#1F2937] mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-[#6B7280] hover:text-[#F97316] transition-colors cursor-pointer">
                Gastroenterology
              </li>
              <li className="text-[#6B7280] hover:text-[#F97316] transition-colors cursor-pointer">
                Endoscopy
              </li>
              <li className="text-[#6B7280] hover:text-[#F97316] transition-colors cursor-pointer">
                X-ray & Sonography
              </li>
              <li className="text-[#6B7280] hover:text-[#F97316] transition-colors cursor-pointer">
                Operation Theater
              </li>
              <li className="text-[#6B7280] hover:text-[#F97316] transition-colors cursor-pointer">
                24/7 Emergency
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#1F2937] mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[#6B7280]">
                <MapPin size={20} className="text-[#F97316] flex-shrink-0 mt-1" />
                <span>Shubham Nursing Home, Chatrapati Colony, Kurdawadi Road, Barshi - 413411</span>
              </li>
              <li className="flex gap-3 text-[#6B7280]">
                <Phone size={20} className="text-[#F97316] flex-shrink-0" />
                <div>
                  <a href="tel:+911234567890" className="hover:text-[#F97316] transition-colors block">
                    +91 123 456 7890
                  </a>
                  <a href="tel:+910987654321" className="hover:text-[#F97316] transition-colors block">
                    +91 098 765 4321
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-[#6B7280]">
                <Mail size={20} className="text-[#F97316] flex-shrink-0" />
                <a href="mailto:info@nimkarhospital.com" className="hover:text-[#F97316] transition-colors">
                  info@nimkarhospital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FED7AA]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nimkar Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#6B7280] hover:text-[#F97316] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
