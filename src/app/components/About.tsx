import { Heart, Award, Users, Shield } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We prioritize your comfort and well-being in every aspect of treatment',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Recognized for outstanding medical care and patient satisfaction',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly qualified doctors and medical staff with years of experience',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict protocols ensuring the highest standards of safety and hygiene',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="src/images/logo.png"
                alt="Medical Team at Nimkar Hospital"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/30 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-2 border-[#F97316]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F97316]">25+</div>
                <div className="text-sm text-[#6B7280] font-medium">Years of Trust</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-6">
              Your Health is Our{' '}
              <span className="text-[#F97316]">Priority</span>
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
              Nimkar Hospital is a modern multi-specialty healthcare center dedicated to high-quality medical services with a strong focus on patient care and safety. Equipped with advanced facilities such as a fully functional operation theater, X-ray and sonography units, a medical store, and well-designed doctor cabins, the hospital ensures comprehensive treatment under one roof. Led by experienced specialists, Nimkar Hospital offers expert care in general medicine, surgery, and gastroenterology, delivering accurate diagnoses and effective treatment while maintaining a patient-first approach.
            </p>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              We are committed to excellence in medical care, patient safety, and
              continuous improvement. Our multidisciplinary approach ensures
              comprehensive treatment for all your healthcare needs.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                        <Icon size={24} color="#F97316" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#6B7280]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="mt-8 bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#EA580C] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
