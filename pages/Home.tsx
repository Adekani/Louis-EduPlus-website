
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/edu1/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Minds. <span className="text-eduGold">Transforming Learning.</span> Inspiring Change for God’s Glory.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
              Practical, Christ-centred education solutions that unite excellence, character and parenting to form the next generation of principled leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-eduGold hover:bg-eduGoldLight text-eduBlue font-bold rounded-md text-center transition-all duration-300 transform hover:scale-105">
                Work with Us →
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-eduBlue font-bold rounded-md text-center transition-all duration-300">
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Panel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-eduBlue mb-8">Nurturing Mind, Heart and Spirit</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Louis Eduplus Ltd partners with schools, churches, parents and educators to deliver innovative curricula, teacher training, and strategic school consultancy — all anchored in Christian truth.
          </p>
          <div className="w-24 h-1 bg-eduGold mx-auto"></div>
          <p className="mt-8 text-xl font-serif italic text-eduBlue">
            "We believe education must form the mind, heart and spirit."
          </p>
        </div>
      </section>

      {/* What We Do - Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-eduBlue mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Teacher Training", desc: "Equipping teachers to teach with excellence and faith.", icon: "🎓" },
              { title: "Curriculum Design", desc: "21st-century skills seamlessly woven with Christian values.", icon: "📚" },
              { title: "Student Enrichment", desc: "Holistic programs that build character and competence.", icon: "⭐" },
              { title: "School Consultancy", desc: "Clarity, structure and sustainable growth for faith-based institutions.", icon: "🏛️" },
              { title: "Digital Resources", desc: "Modern tools that expand reach and impact.", icon: "🌐" },
              { title: "Leadership Programs", desc: "Cultivating principled leaders with a Kingdom heart.", icon: "👑" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-eduBlue mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-eduBlue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Louis Eduplus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-eduGold text-eduBlue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">Christ-Centred Philosophy</h3>
              <p className="text-blue-100">Every program is grounded in biblical truth, ensuring a solid foundation for growth.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-eduGold text-eduBlue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">Holistic Transformation</h3>
              <p className="text-blue-100">We cultivate intellect, character and spirituality simultaneously for well-rounded development.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-eduGold text-eduBlue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">Sustainable Impact</h3>
              <p className="text-blue-100">We build capacity so schools continue growing long after our initial training is completed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-eduBlue">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Free Resource for Educators & Parents</h3>
            <p className="text-lg opacity-90">Download our free brief: <strong>“Bridging Home and Classroom: 5 Practical Steps for Parents & Schools”</strong>.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-eduBlue text-white font-bold rounded-lg hover:bg-blue-900 shadow-lg transition-colors">
            Download Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
