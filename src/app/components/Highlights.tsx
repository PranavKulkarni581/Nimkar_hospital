import { Activity, Eye, Radio, Scissors } from 'lucide-react';

export function Highlights() {
  const specialties = [
    {
      icon: Activity,
      title: 'Gastroenterology & Endoscopy',
      description: 'Expert diagnosis and treatment of digestive system disorders with advanced technology.',
      color: '#F97316',
    },
    {
      icon: Eye,
      title: 'General Medicine',
      description: 'Expert consultation and treatment for common illnesses, chronic diseases, and preventive healthcare.',
      color: '#F97316',
    },
    {
      icon: Radio,
      title: 'X-ray & Sonography',
      description: 'Advanced imaging services with the latest digital equipment for precise diagnostics.',
      color: '#F97316',
    },
    {
      icon: Scissors,
      title: 'Operation Theater',
      description: 'Modern surgical facilities with experienced surgeons and advanced equipment.',
      color: '#F97316',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Our Specialties
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Delivering excellence in medical care with cutting-edge facilities and expert professionals
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg border border-[#FED7AA] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFF7ED] to-[#FDBA74]/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} color={specialty.color} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {specialty.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {specialty.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 bg-[#F97316] group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#FFF7ED] to-[#FDBA74]/20 rounded-2xl p-8 border border-[#FED7AA]">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#F97316] mb-2">24/7</div>
              <div className="text-[#6B7280] font-medium">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F97316] mb-2">25+</div>
              <div className="text-[#6B7280] font-medium">Beds Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F97316] mb-2">35K+</div>
              <div className="text-[#6B7280] font-medium">Successful Surgeries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F97316] mb-2">50k+</div>
              <div className="text-[#6B7280] font-medium">Patients Treated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
