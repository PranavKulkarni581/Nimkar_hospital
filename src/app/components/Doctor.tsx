import { useState } from 'react';
import { GraduationCap, Award, X } from 'lucide-react';
import DrVikram from '../../images/drvikram_nimkar.png';
import DrShubham from '../../images/drshubham_nimkar.png';
import DrAnuja from '../../images/Dr_anuja_nimkar.png';

interface DoctorType {
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  image: string;
  description: string;
  achievements: string[];
}

export function Doctor() {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null);

  const doctors: DoctorType[] = [
    {
      name: 'Dr. Vikram Nimkar',
      specialty: 'General Surgery',
      qualification: 'MS (Gen. Surgery)',
      experience: '15+ Years',
      image: DrVikram,
      description: 'Experienced General Surgeon specializing in safe and effective surgical treatments with a focus on patient care and quick recovery.',
      achievements: [
        'Expert in General Surgical Procedures',
        'Specialist in Minimally Invasive Surgery',
        'Recognized for Excellence in Surgical Care',
      ],
    },
    {
      name: 'Dr. Shubham V. Nimkar',
      specialty: 'Consulting Physician, Gastroenterologist',
      qualification: 'MD (Medicine), F.G.I.E (MUHS)',
      experience: '12+ Years',
      image: DrShubham,
      description: 'Experienced consulting physician specializing in gastroenterology, digestive disorders, and advanced GI endoscopy procedures with a focus on patient-centered care.',
      achievements: [
        'F.G.I.E Certification from MUHS',
        'Specialist in Gastrointestinal Endoscopy',
        'Expert in Digestive and Liver Disorders',
      ],
    },
    {
      name: 'Dr. Anuja S. Nimkar',
      specialty: 'Radiologist',
      qualification: 'MBBS, MD (Radiology)',
      experience: '10+ Years',
      image: DrAnuja,
      description: 'Specialized in diagnostic imaging including X-ray, CT, MRI, and ultrasound.',
      achievements: [
        'Expert in Breast Imaging, Antenatal Sonography',
        // 'Expert in Antenatal Sonography and Anomaly/NT Scans',
        'Specialized in Mammography and Sonography Guided Biopsy',
        'F.M.F. U.K. Certified professional for First Trimester screening',
      ],
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-4">
            Expert Medical Professionals
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Meet our dedicated team of experienced doctors committed to providing
            exceptional healthcare services
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#FED7AA] hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{doctor.name}</h3>
                  <p className="text-[#FDBA74] text-sm">{doctor.specialty}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-[#6B7280]">
                  <GraduationCap size={16} className="text-[#F97316]" />
                  <span>{doctor.experience}</span>
                </div>
                <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                  {doctor.description}
                </p>
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="w-full bg-[#F97316] text-white py-3 rounded-lg hover:bg-[#EA580C] transition-colors duration-200 font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-2xl mb-1">
                  {selectedDoctor.name}
                </h3>
                <p className="text-[#FDBA74] text-lg">{selectedDoctor.specialty}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#6B7280] mb-2">
                  <GraduationCap size={20} className="text-[#F97316]" />
                  <span className="font-semibold">Qualification:</span>
                </div>
                <p className="text-[#1F2937] ml-7">{selectedDoctor.qualification}</p>
              </div>

              <div className="mb-6">
                <p className="text-[#6B7280] leading-relaxed">
                  {selectedDoctor.description}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#6B7280] mb-3">
                  <Award size={20} className="text-[#F97316]" />
                  <span className="font-semibold">Achievements:</span>
                </div>
                <ul className="space-y-2 ml-7">
                  {selectedDoctor.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#6B7280]">
                      <span className="text-[#F97316] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedDoctor(null)}
                className="w-full mt-8 bg-[#F97316] text-white py-3 rounded-lg hover:bg-[#EA580C] transition-colors duration-200 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
