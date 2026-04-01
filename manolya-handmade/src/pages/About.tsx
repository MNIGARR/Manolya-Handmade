import { Link } from 'react-router-dom';

const values = [
  {
    icon: '✋',
    title: 'Handcrafted with Love',
    description:
      'Every single piece is made by hand, bead by bead, ensuring each creation is unique and full of care.',
  },
  {
    icon: '🌈',
    title: 'Color & Joy',
    description:
      'We believe in the power of color to uplift your day. Our collections celebrate vibrancy, personality, and self-expression.',
  },
  {
    icon: '🌍',
    title: 'Supporting Small',
    description:
      'When you shop with us, you directly support an independent artisan and the tradition of handmade craftsmanship.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Design',
    desc: 'Each design starts with inspiration from nature, culture, and colour palettes that spark joy.',
  },
  {
    step: '02',
    title: 'Source',
    desc: 'We handpick every bead and material, choosing only the finest quality for our pieces.',
  },
  {
    step: '03',
    title: 'Create',
    desc: 'With patience and precision, each item is assembled bead by bead, often taking several hours per piece.',
  },
  {
    step: '04',
    title: 'Deliver',
    desc: 'Packed with care and a personal touch, your order is sent directly to your door.',
  },
];

export default function About() {
  return (
    <div className="overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFF0F6] via-[#F8E6EE] to-[#EDE4FF] py-32 px-6">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
        <div className="container relative mx-auto max-w-4xl text-center z-10">
          <span className="inline-block bg-white/60 backdrop-blur-md px-6 py-2 rounded-full text-manolya-purple font-bold tracking-widest uppercase text-xs mb-6 shadow-sm border border-white/50">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Made with Hands, <br className="hidden md:block" />
            <span className="text-manolya-purple relative">
              Gifted with Heart
              {/* Subtle underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-manolya-purple/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mt-8">
            Manolya Handmade started with a simple passion for creativity and color — turning tiny
            beads into wearable art that tells a story.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 pr-0 md:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">The Beginning</h2>
            <div className="w-20 h-1.5 bg-[#F8E6EE] rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              It all began at a small craft table surrounded by jars of colorful beads. What
              started as a hobby quickly grew into a passion for creating wearable art that people
              could feel truly connected to.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every single bead is carefully selected and threaded by hand to create pieces that
              bring joy and style to your everyday life. We believe that accessories are more than
              just additions to an outfit — they are expressions of who you are.
            </p>
          </div>
          
          {/* Decorative grid with animations */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="bg-[#FFF0F6] rounded-3xl h-56 flex items-center justify-center text-6xl shadow-sm hover:scale-105 hover:-rotate-6 transition-transform duration-500 cursor-default">
              🌸
            </div>
            <div className="bg-[#EDE4FF] rounded-3xl h-56 flex items-center justify-center text-6xl shadow-sm mt-12 hover:scale-105 hover:rotate-6 transition-transform duration-500 cursor-default">
              💜
            </div>
            <div className="bg-[#E0F4FF] rounded-3xl h-56 flex items-center justify-center text-6xl shadow-sm hover:scale-105 hover:-rotate-3 transition-transform duration-500 cursor-default">
              🪩
            </div>
            <div className="bg-[#FFF4E6] rounded-3xl h-56 flex items-center justify-center text-6xl shadow-sm -mt-12 hover:scale-105 hover:rotate-3 transition-transform duration-500 cursor-default">
              ✨
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FDF4FF]/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">What We Stand For</h2>
            <p className="text-gray-500 text-xl font-light">
              The values that shape every piece we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(value => (
              <div
                key={value.title}
                className="group bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 text-center"
              >
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">From Bead to Beauty</h2>
            <p className="text-gray-500 text-xl font-light">
              How each piece comes to life in four steps.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative">
            {/* Optional connecting line for larger screens */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#F8E6EE] to-transparent z-0"></div>
            
            {steps.map((s, idx) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="text-7xl font-black text-[#F8E6EE] select-none leading-none mb-6 group-hover:text-manolya-purple/20 transition-colors duration-500">
                  {s.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-manolya-purple to-purple-700 relative overflow-hidden">
        {/* Decorative background blur objects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative z-10 mx-auto max-w-3xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Find Your Piece?</h2>
          <p className="text-purple-100 text-xl mb-10 font-light leading-relaxed">
            Each item is made to order and ships worldwide. Find the one that speaks to you.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-manolya-purple font-bold text-lg px-10 py-5 rounded-2xl hover:bg-purple-50 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
