import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

  useEffect(() => { 
    const handleScroll = () => {
      setIsScrollToTopVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917722027329?text=Hello%20Nimkar%20Hospital"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1DA851] transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Scroll to Top Button */}
      {isScrollToTopVisible && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-14 h-14 bg-[#F97316] text-white rounded-full shadow-lg hover:bg-[#EA580C] transition-all duration-300 hover:scale-110 animate-fadeIn"
          title="Scroll to Top"
        >
          <ArrowUp size={28} />
        </button>
      )}
    </div>
  );
}
