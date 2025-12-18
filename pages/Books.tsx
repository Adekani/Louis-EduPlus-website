
import React from 'react';

const Books: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-eduBlue py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Louis Eduplus Publications</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Practical guides for parents, teachers and church leaders on faith-integrated education and character formation.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Book 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1 w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-eduGold rounded-xl rotate-3 group-hover:rotate-0 transition-transform"></div>
                <img 
                  src="https://picsum.photos/seed/book1/600/800" 
                  alt="Ripples in Teacher Education" 
                  className="relative z-10 w-full rounded-xl shadow-2xl transition-transform transform group-hover:-translate-y-2"
                />
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-eduGold/20 text-eduGold font-bold text-sm uppercase tracking-widest rounded-full mb-6">New Release</span>
              <h2 className="text-3xl md:text-4xl font-bold text-eduBlue mb-6 font-serif">Ripples in Teacher Education: <span className="text-eduGold">Teaching for Global Relevance</span></h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A visionary call to reimagine what teacher preparation must be in our ever-changing world. In this book, Louis Odubanjo challenges traditional, narrow models of teacher training and makes the case for a globally relevant, holistic approach.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-eduGold mb-8">
                <h4 className="font-bold text-eduBlue mb-2">Why it matters:</h4>
                <p className="text-gray-600">
                  This is for educators and school leaders who want to build curricula and training programs that prepare learners for global challenges — while rooting them in timeless Christian values.
                </p>
              </div>
              <a href="#" className="inline-flex items-center px-8 py-4 bg-eduBlue text-white font-bold rounded-lg hover:bg-blue-900 shadow-lg transition-all">
                Get it on Amazon <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="h-px bg-gray-200 mb-24"></div>

          {/* Book 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-eduBlue rounded-xl -rotate-3 group-hover:rotate-0 transition-transform"></div>
                <img 
                  src="https://picsum.photos/seed/book2/600/800" 
                  alt="ConforMix Book" 
                  className="relative z-10 w-full rounded-xl shadow-2xl transition-transform transform group-hover:-translate-y-2"
                />
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-gray-100 text-gray-500 font-bold text-sm uppercase tracking-widest rounded-full mb-6">Coming Soon</span>
              <h2 className="text-3xl md:text-4xl font-bold text-eduBlue mb-6 font-serif">ConforMix</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A work that reflects our commitment to integrating faith, modern educational theory, and practical classroom realities. ConforMix explores how education can be dynamically shaped to meet both contemporary demands and eternal truths.
              </p>
              <p className="text-gray-600 mb-8 italic">
                (Book details, blurb and purchase link will be updated soon — contact us for pre-order or availability.)
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-eduGold text-eduBlue font-bold rounded-lg hover:bg-eduGoldLight shadow-lg transition-all">
                Pre-order / Enquire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Para at bottom for more depth */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Louis Eduplus publishes practical, Christ-centred resources that support education and parenting. Our books are written to equip leaders, strengthen families and bring biblical perspective to everyday teaching and learning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Books;
