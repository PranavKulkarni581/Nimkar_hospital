import { Info, ShieldCheck, Stethoscope } from 'lucide-react';
import EndoscopyMachine from '../../images/whatendo.png';
import HospitalImg from '../../images/whyendo.png';
import MedicalImg from '../../images/how_we_support.png';

const awarenessPoints = [
  {
    icon: Info,
    title: 'What is Endoscopy?',
    description:
      'Endoscopy is a safe procedure that helps doctors inspect the digestive tract and diagnose conditions early, including ulcers, inflammation, and cancers.',
  },
  {
    icon: ShieldCheck,
    title: 'Why It Matters',
    description:
      'Early detection through endoscopy improves treatment outcomes and can prevent complications by identifying issues before they worsen.',
  },
  {
    icon: Stethoscope,
    title: 'How We Support You',
    description:
      'Our team provides gentle preparation guidance, expert care during the procedure, and follow-up support to keep you comfortable and informed.',
  },
];

const awarenessImages = [
  {
    src: EndoscopyMachine,
    title: 'Advanced Endoscopy Equipment',
    alt: 'Endoscopy machine in a modern examination room',
  },
  {
    src: HospitalImg,
    title: 'Comfortable Care Environment',
    alt: 'Hospital environment showing clean patient facilities',
  },
  {
    src: MedicalImg,
    title: 'Experienced Medical Team',
    alt: 'Medical staff preparing for patient care',
  },
];

export function Gallery() {
  return (
    <section id="endoscopy" className="py-20 bg-gradient-to-b from-white to-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Endoscopy Awareness
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-4">
            Know the Signs and Benefits of Endoscopy
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">
            Endoscopy is a minimally invasive diagnostic tool that helps our specialists identify digestive health issues early and plan the right treatment with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {awarenessPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="rounded-3xl border border-[#F9E7D6] bg-white p-8 shadow-xl">
                {point.image && (
                  <img
                    src={point.image}
                    alt={point.imageAlt}
                    className="w-full h-48 object-cover rounded-2xl mb-6"
                  />
                )}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#FFF2E6] text-[#F97316] mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-3">
                  {point.title}
                </h3>
                <p className="text-[#6B7280] leading-7">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {awarenessImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-[#F9E7D6] bg-white shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[#1F2937]">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFF7ED] rounded-3xl p-10 shadow-inner border border-[#F9E7D6]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1F2937] mb-4">
                Preparing for your endoscopy
              </h3>
              <ul className="space-y-3 text-[#6B7280] list-disc list-inside">
                <li>Follow the fasting and preparation guidance provided by our team.</li>
                <li>Arrange a companion for the procedure and recovery period.</li>
                <li>Ask questions about the procedure to feel confident and calm.</li>
              </ul>
            </div>
            <div>
              <p className="text-[#6B7280] leading-7">
                Our specialists are here to guide you through every step, using advanced endoscopy tools and a compassionate approach to make the experience as smooth and reassuring as possible.
              </p>
              <button className="mt-8 bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#EA580C] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                Talk to an Endoscopy Specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
