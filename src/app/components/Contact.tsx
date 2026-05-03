import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    // Allow form to submit to Formspree
    // Form will automatically redirect after successful submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mt-2 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us for appointments,
            inquiries, or emergency assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                    <MapPin size={24} color="#F97316" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937] mb-1">Address</h4>
                  <p className="text-[#6B7280]">
                    Shubham Nursing Home, <br />
                    Chatrapati Colony,
                    <br />
                    Near Maher Hospital,
                  <br/>
                    Kurdawadi Road, Barshi - 413411
                  </p>
                </div>
              </div>
       
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                    <Phone size={24} color="#F97316" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937] mb-1">Phone</h4>
                  <p className="text-[#6B7280]">
                    Emergency & Appointment: <a href="tel:+917057632069" className="text-[#F97316] hover:underline"><br/>+91 705 763 2069</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                    <Mail size={24} color="#F97316" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937] mb-1">Email</h4>
                  <p className="text-[#6B7280]">
                    <a href="mailto:Shubhamnimkar7@gmail.com" className="text-[#F97316] hover:underline">
                      Shubhamnimkar7@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                    <Clock size={24} color="#F97316" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937] mb-1">Working Hours</h4>
                  <p className="text-[#6B7280]">
                    OPD: Afternoon 10:00 AM - 3:00 PM
                    <br />
                    OPD: Evening 5:00 PM - 9:00 PM
                    <br />
                    Emergency: 24/7 (All Days)
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden border-2 border-[#FED7AA] h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d75.6865002!3d18.2276839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc45519dcc3ab15%3A0xbcd5bdab07d5b8b7!2s%E0%A4%A8%E0%A4%BF%E0%A4%AE%E0%A4%95%E0%A4%B0%20%E0%A4%B9%E0%A5%89%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%9F%E0%A4%B2%20%E0%A4%8F%E0%A4%82%E0%A4%A1%E0%A5%89%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%89%E0%A4%AA%E0%A5%80%20%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
              Send us a Message
            </h3>

            <form action="https://formspree.io/f/mykozwpa" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#FED7AA] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#FED7AA] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1F2937] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#FED7AA] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#FED7AA] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="emergency">Emergency</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#FED7AA] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all resize-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F97316] text-white py-4 rounded-lg hover:bg-[#EA580C] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
