
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-eduBlue py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Let’s Talk</h1>
          <p className="text-xl text-gray-300">We’re Ready to Serve Your School or Ministry</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-eduBlue mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We welcome enquiries from schools, churches, parents and educational partners. Tell us about your needs and we’ll recommend a next step — whether it’s a workshop, curriculum review or consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-eduGold/10 rounded-full flex items-center justify-center text-eduGold mr-4 flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-bold text-eduBlue uppercase text-sm tracking-wider">Email Us</h4>
                  <p className="text-lg font-medium text-gray-700">hello@louiseduplus.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-eduGold/10 rounded-full flex items-center justify-center text-eduGold mr-4 flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-eduBlue uppercase text-sm tracking-wider">Call or WhatsApp</h4>
                  <p className="text-lg font-medium text-gray-700">+234 000 000 0000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-eduGold/10 rounded-full flex items-center justify-center text-eduGold mr-4 flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-bold text-eduBlue uppercase text-sm tracking-wider">Office Hours</h4>
                  <p className="text-lg font-medium text-gray-700">Mon–Fri, 9:00am–5:00pm (WAT)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-eduBlue mb-2 italic">Address / Partnerships</h4>
              <p className="text-gray-600 leading-relaxed">
                For partnership enquiries with schools and churches, please include organisation details and we’ll respond with a tailored proposal.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
                <h3 className="text-2xl font-bold text-eduBlue mb-2">Message Received!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll be in touch within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-eduGold outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Organisation / School</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-eduGold outline-none" placeholder="Edu Academy" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-eduGold outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-eduGold outline-none" placeholder="+234..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Type of Enquiry</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-eduGold outline-none">
                    <option>Teacher Training / Workshops</option>
                    <option>Curriculum Review</option>
                    <option>School Consultancy</option>
                    <option>Student Mentorship</option>
                    <option>Books & Resources</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Describe Your Need *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-eduGold outline-none" placeholder="How can we help your institution?"></textarea>
                </div>

                <p className="text-xs text-gray-500">
                  Privacy note: “We protect your data. Submitting this form signs you up for occasional resources and event invites. Unsubscribe at any time.”
                </p>

                <button type="submit" className="w-full py-4 bg-eduGold text-eduBlue font-bold rounded-lg hover:bg-eduGoldLight shadow-lg transition-all text-lg">
                  Request a Consultation →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
