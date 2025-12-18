
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Teacher Training & Christian Professional Development Workshops",
    desc: "High-impact workshops and in-service training that strengthen pedagogy, classroom management and spiritual leadership.",
    outcomes: "Improved teaching quality, renewed vocation, biblical classroom culture.",
    cta: "Book a Workshop",
    icon: "👨‍🏫"
  },
  {
    title: "Curriculum Design, Review & Faith Integration",
    desc: "Custom curriculum solutions that marry 21st-century competencies with Christian worldview integration across subjects and grade levels.",
    outcomes: "Coherent scope & sequence, values integration, teacher-ready lesson frameworks.",
    cta: "Request a Curriculum Audit",
    icon: "🗺️"
  },
  {
    title: "Student Enrichment & Mentorship Programs",
    desc: "After-school clubs, leadership tracks, and one-to-one mentoring that advance academic confidence and spiritual formation.",
    outcomes: "Stronger learner engagement, character formation, higher retention.",
    cta: "Enrol Students",
    icon: "🌱"
  },
  {
    title: "School Consultancy & Strategic Development",
    desc: "Strategic planning, governance advice, and school improvement roadmaps to scale impact responsibly and sustainably.",
    outcomes: "Clear vision, improved leadership capacity, measurable growth.",
    cta: "Schedule a Consultation",
    icon: "💼"
  },
  {
    title: "Educational Resource Development & Digital Solutions",
    desc: "Bespoke teaching materials, digital content and blended learning systems for modern classrooms and remote learners.",
    outcomes: "High-quality resources, teacher ease of use, blended learning capability.",
    cta: "Explore Resources",
    icon: "💻"
  },
  {
    title: "Leadership & Character Formation for Educators",
    desc: "Character formation courses, leadership coaching and spiritual formation programs to equip educators as servant leaders.",
    outcomes: "Stronger school culture, ethical leadership, discipleship in action.",
    cta: "Learn More",
    icon: "🏹"
  }
];

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-eduBlue py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Practical, Faith-Based Solutions</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our services are designed to meet the real needs of schools, teachers and parents. Each offering is rooted in Scripture and shaped by modern educational practice so learners grow in knowledge, skill and character.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8 flex-grow">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-eduBlue mb-4 font-serif leading-tight">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                  <h4 className="text-sm font-bold text-eduBlue uppercase tracking-wider mb-2">Outcomes:</h4>
                  <p className="text-eduBlue font-medium leading-tight">{service.outcomes}</p>
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link to="/contact" className="block w-full text-center py-3 bg-white border-2 border-eduGold text-eduGold font-bold rounded-lg hover:bg-eduGold hover:text-white transition-all">
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-eduBlue mb-12">Who We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Christian & faith-based schools",
              "Private and public schools seeking values integration",
              "Teachers & school leaders",
              "Parents and learners seeking Christian enrichment",
              "Church education ministries & NGOs"
            ].map((client, i) => (
              <span key={i} className="px-6 py-3 bg-white text-eduBlue border border-eduBlue/10 rounded-full font-medium shadow-sm">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center bg-eduBlue text-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 font-serif">Not sure where to start?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Book a free discovery call and we’ll map the best first step for your school or ministry.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-eduGold text-eduBlue font-bold rounded-xl hover:bg-eduGoldLight shadow-lg transition-transform hover:scale-105">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
