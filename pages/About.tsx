
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-eduBlue py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision & Values</h1>
          <p className="text-xl text-eduGold">Education with a Kingdom Heart</p>
        </div>
      </div>

      {/* Purpose */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-eduBlue mb-6 font-serif">Our Purpose</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Louis Eduplus Ltd exists to revolutionize education by marrying innovative practice with Christian and human values. We believe that learning is most powerful when it’s purposeful, character-forming and supported by parents and faith communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our work is practical, professional and prayerfully pursued. We aim to bridge the gap between academic excellence and spiritual depth.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img src="https://picsum.photos/seed/edu2/800/600" alt="About Louis Eduplus" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-eduGold">
            <h3 className="text-2xl font-bold text-eduBlue mb-6 flex items-center">
              <span className="mr-3 text-3xl">👁️</span> Vision
            </h3>
            <p className="text-gray-700 leading-relaxed italic">
              "To revolutionize global education by fostering innovation and integrating human and Christian values — creating a harmonious link between education and parenting to shape a generation of compassionate, skilled and faith-rooted individuals."
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-eduBlue">
            <h3 className="text-2xl font-bold text-eduBlue mb-6 flex items-center">
              <span className="mr-3 text-3xl">🚀</span> Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We transform education globally through innovative curricula, values-led training, and practical partnerships that empower parents and educators to raise well-rounded learners who serve God and society with competence and character.
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-eduBlue mb-12 text-center">Aims & Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Promote balanced education systems that combine innovation, excellence and Christian values.",
              "Equip parents and educators with tools to nurture academic, emotional and spiritual growth.",
              "Develop global curricula integrating 21st-century skills with moral and biblical truth.",
              "Run training programs and workshops for educators and parents.",
              "Build partnerships with schools, churches and communities to strengthen the education-parenting connection."
            ].map((aim, i) => (
              <div key={i} className="flex space-x-4 p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-eduGold rounded-full flex items-center justify-center text-eduBlue font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-medium">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-eduBlue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-eduGold opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="h-1 w-20 bg-eduGold mb-6 transition-all group-hover:w-full"></div>
              <h3 className="text-2xl font-bold mb-4">Excellence with Purpose</h3>
              <p className="text-blue-100">Pursuing high standards as a reflection of God’s nature.</p>
            </div>
            <div className="group">
              <div className="h-1 w-20 bg-eduGold mb-6 transition-all group-hover:w-full"></div>
              <h3 className="text-2xl font-bold mb-4">Integrity & Faithfulness</h3>
              <p className="text-blue-100">Honest, transparent, accountable work that honours God.</p>
            </div>
            <div className="group">
              <div className="h-1 w-20 bg-eduGold mb-6 transition-all group-hover:w-full"></div>
              <h3 className="text-2xl font-bold mb-4">Innovation for Kingdom Impact</h3>
              <p className="text-blue-100">Creative solutions that advance learning and service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-eduBlue mb-6">Ready to Partner With Us?</h3>
          <p className="text-xl text-gray-600 mb-10">
            Partner with us to redesign a curriculum, train staff, or launch a mentorship program.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-eduGold text-eduBlue font-bold rounded-lg hover:bg-eduGoldLight shadow-xl transition-all">
            Start a Partnership
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
