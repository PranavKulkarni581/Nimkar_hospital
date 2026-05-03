import {
  Bed,
  Wifi,
  Coffee,
  Car,
  Shield,
  Clock,
  Users,
  Zap,
  User,
  Building,
  Scan,
  Activity,
  Pill,
} from 'lucide-react';

export function Facilities() {
  const facilities = [
    {
      icon: User,
      title: 'Cabin Dr. Shubham Nimkar',
      description: 'Personal consultation cabin for Dr. Shubham Nimkar, equipped with modern diagnostic tools.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661197/Dr_shubham_kebin_wktmxc.png',
    },
    {
      icon: Building,
      title: 'Reception',
      description: 'Modern reception area with friendly staff for patient registration and assistance.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661197/reception_xl5frn.png',
    },
    {
      icon: Users,
      title: 'Operation Theater',
      description: 'Fully equipped operation theater for safe and efficient surgical procedures.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661200/operation_theator_zacg48.png',
    },
    {
      icon: Scan,
      title: 'X-Ray Machine',
      description: 'Advanced digital X-ray machine for accurate and quick diagnostic imaging.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661201/x_ray_machine_emr3p8.png',
    },
    {
      icon: Scan,
      title: 'Sonography Machine',
      description: 'State-of-the-art ultrasound machine for detailed internal imaging and diagnostics.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661198/Sonography_machine_ud6vcn.png',
    },
    {
      icon: Bed,
      title: 'General Ward',
      description: 'Comfortable general ward with multiple beds for patient care and monitoring.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661198/General_Ward_v2hqph.png',
    },
    {
      icon: Activity,
      title: 'Endoscopy Machine',
      description: 'Advanced endoscopy equipment for minimally invasive diagnostic procedures.',
      image: 'https://res.cloudinary.com/dxjibpdu8/image/upload/v1777661199/Endoscopy_machine_zheymy.png',
    },
    {
      icon: Pill,
      title: 'Medical Store',
      description: 'In-house pharmacy providing essential medicines and healthcare products.',
      image: './images/Medical.png',
    },
  ];
 
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Our Facilities
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-4">
            World-Class Healthcare Infrastructure
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Experience modern healthcare with our state-of-the-art facilities designed
            for your comfort and care
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-[#FED7AA] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon size={24} color="#F97316" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#F97316] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-4 h-0.5 w-0 bg-[#F97316] group-hover:w-full transition-all duration-300 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-[#FFF7ED] to-white rounded-2xl p-8 border border-[#FED7AA]">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#F97316] mb-2">25+</h3>
              <p className="text-[#6B7280] font-medium">Hospital Beds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#F97316] mb-2">100%</h3>
              <p className="text-[#6B7280] font-medium">Safety Standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#F97316] mb-2">24/7</h3>
              <p className="text-[#6B7280] font-medium">Medical Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
