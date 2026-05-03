import { ArrowRight, Calendar } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF7ED] via-[#FDBA74]/20 to-white overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FDBA74]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left lg:col-span-5">
            <div className="inline-block mb-4">
              <span className="bg-[#FFF7ED] text-[#F97316] px-4 py-2 rounded-full text-sm font-semibold border border-[#FED7AA]">
                🏥 Trusted Healthcare Since 1995
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
              Advanced Care with{' '}
              <span className="text-[#F97316]">Compassion</span>
            </h1>
            
            <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
              Providing world-class medical services with cutting-edge technology
              and experienced healthcare professionals dedicated to your well-being.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#EA580C] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center gap-2 bg-white text-[#F97316] px-8 py-4 rounded-lg border-2 border-[#F97316] hover:bg-[#FFF7ED] transition-all duration-200 font-semibold transform hover:-translate-y-0.5"
              >
                <Calendar size={20} />
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-[#F97316]">25+</div>
                <div className="text-sm text-[#6B7280]">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-[#F97316]">50k+</div>
                <div className="text-sm text-[#6B7280]">Happy Patients</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-[#F97316]">15+</div>
                <div className="text-sm text-[#6B7280]">Specialists</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661200/Hospital_img_eiaj5v.png"
                alt="Shree Nimkar Hospital Building"
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-[#FED7AA]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFF7ED] rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F97316]">4.9/5</div>
                  <div className="text-sm text-[#6B7280]">Patient Rating</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
