import {
  Activity,
  Heart,
  Stethoscope,
  Syringe,
  Pill,
  Microscope,
  Scan,
  Ambulance,
  ClipboardList,
  UserCog,
  Droplets,
  Baby,
} from 'lucide-react';

export function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const services = [
    {
      icon: ClipboardList,
      title: 'OPD Services',
      description:
        'Regular outpatient department services with experienced doctors for consultation and follow-ups.',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description:
        'Expert consultation and treatment for common illnesses, chronic diseases, and preventive healthcare.',
    },
    {
      icon: Activity,
      title: 'Gastroenterology',
      description:
        'Specialized care for digestive system disorders, liver diseases, and gastrointestinal conditions.',
    },
    {
      icon: Scan,
      title: 'GI Endoscopy',
      description:
        'Advanced diagnostic and therapeutic endoscopy procedures for accurate evaluation of digestive tract issues.',
    },
    {
      icon: Scan,
      title: 'X-Ray & Sonography',
      description:
        'Digital X-ray and ultrasound imaging services for accurate and quick diagnosis.',
    },
    {
      icon: UserCog,
      title: 'Operation Theater',
      description:
        'Well-equipped modern operation theater for safe and efficient surgical procedures.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#FFF7ED] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            We offer a wide range of healthcare services to meet all your medical needs
            under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-[#FED7AA] hover:bg-gradient-to-br hover:from-[#FFF7ED] hover:to-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFF7ED] to-[#FDBA74]/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} color="#F97316" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#F97316] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="mt-4 h-0.5 w-0 bg-[#F97316] group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Medical Assistance?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our expert medical team is available 24/7 to provide you with the best
              healthcare services. Book your appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#F97316] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold shadow-lg"
              >
                Book Appointment
              </button>
              <a
                href="tel:+911234567890"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold"
              >
                Call Now: +91 772 202 7329
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
