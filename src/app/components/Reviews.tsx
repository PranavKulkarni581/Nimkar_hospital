import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: 'Dr. explained my health issue very clearly and gave proper treatment. I started feeling better within a few days.',
    name: 'Amit Patil',
    initials: 'AP',
    rating: 5,
  },
  {
    id: 2,
    text: 'I visited for high fever and weakness. Diagnosis was accurate and medicines worked quickly.',
    name: 'Sneha Kulkarni',
    initials: 'SK',
    rating: 5,
  },
  {
    id: 3,
    text: 'Very calm and polite doctor. He listens carefully and doesn\'t rush the consultation.',
    name: 'Rohit Sharma',
    initials: 'RS',
    rating: 5,
  },
  {
    id: 4,
    text: 'Excellent experience. Doctor focuses on root cause and gives proper guidance.',
    name: 'Priya Deshmukh',
    initials: 'PD',
    rating: 5,
  },
  {
    id: 5,
    text: 'I had BP issues for a long time. Doctor helped me manage it with proper medication and advice.',
    name: 'Sandeep Jadhav',
    initials: 'SJ',
    rating: 5,
  },
  {
    id: 6,
    text: 'Highly knowledgeable and professional. I felt comfortable discussing my health problems.',
    name: 'Neha Joshi',
    initials: 'NJ',
    rating: 5,
  },
  {
    id: 7,
    text: 'Doctor explained all my reports in detail and answered all my questions patiently.',
    name: 'Kiran Pawar',
    initials: 'KP',
    rating: 5,
  },
  {
    id: 8,
    text: 'Very good treatment and follow-up. I would definitely recommend this doctor.',
    name: 'Pooja Shinde',
    initials: 'PS',
    rating: 5,
  },
  {
    id: 9,
    text: 'Simple and effective treatment. Doctor also suggested lifestyle changes which helped a lot.',
    name: 'Nikhil More',
    initials: 'NM',
    rating: 5,
  },
  {
    id: 10,
    text: 'Clinic is well maintained and doctor is very experienced. Overall good experience.',
    name: 'Vaishali Chavan',
    initials: 'VC',
    rating: 5,
  },
];

const avatarColors = [
  'bg-[#F97316]',
  'bg-[#EA580C]',
  'bg-[#FB923C]',
  'bg-[#C2410C]',
  'bg-[#FDBA74]',
];

export function Reviews() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Cards visible at once based on screen size
  const VISIBLE = 3;

  const total = reviews.length;

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(((index % total) + total) % total);
        setAnimating(false);
      }, 350);
    },
    [animating, total]
  );

  const prev = () => goTo(current - 1, 'left');
  const next = () => goTo(current + 1, 'right');

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1, 'right');
    }, 4500);
    return () => clearInterval(timer);
  }, [current, goTo]);

  // Get the 3 visible review indices
  const getVisible = () => {
    return [0, 1, 2].map((offset) => reviews[(current + offset) % total]);
  };

  const visible = getVisible();

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-[#FFF7ED] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Patient Testimonials
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-4">
            What Our{' '}
            <span className="text-[#F97316]">Patients Say</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Real experiences from patients who trusted us with their health and
            well-being.
          </p>

          {/* Overall rating bar */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white px-6 py-3 rounded-full shadow-md border border-[#FED7AA]">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-[#F97316] text-[#F97316]" />
              ))}
            </div>
            <span className="font-bold text-[#1F2937] text-lg">5.0</span>
            <span className="text-[#6B7280] text-sm">· 10 reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-350 ${
              animating
                ? direction === 'right'
                  ? 'opacity-0 translate-x-8'
                  : 'opacity-0 -translate-x-8'
                : 'opacity-100 translate-x-0'
            }`}
            style={{ transition: 'opacity 0.35s ease, transform 0.35s ease' }}
          >
            {visible.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className={`relative bg-white rounded-2xl p-7 shadow-lg border border-[#FED7AA] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                  idx === 1
                    ? 'md:scale-105 md:border-[#F97316] md:shadow-[0_8px_32px_rgba(249,115,22,0.18)]'
                    : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center shadow-md">
                    <Quote size={14} className="text-white fill-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#374151] leading-relaxed text-base flex-1 italic">
                  "{review.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-[#FED7AA] my-5" />

                {/* Reviewer */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 ${
                      avatarColors[review.id % avatarColors.length]
                    }`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F2937]">
                      {review.name}
                    </div>
                    <div className="text-xs text-[#6B7280]">Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316] text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 'right' : 'left')}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-3 bg-[#F97316]'
                      : 'w-3 h-3 bg-[#FED7AA] hover:bg-[#FDBA74]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316] text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6B7280] mb-4">
            Join thousands of satisfied patients
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#EA580C] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
