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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF0F6] via-[#F8E6EE] to-[#EDE4FF] py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block text-manolya-purple font-semibold tracking-widest uppercase text-sm mb-4">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Made with Hands,{' '}
            <span className="text-manolya-purple">Gifted with Heart</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manolya Handmade started with a simple passion for creativity and color — turning tiny
            beads into wearable art that tells a story.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Beginning</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
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
          {/* Decorative grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FFF0F6] rounded-2xl h-48 flex items-center justify-center text-5xl shadow-sm">
              🌸
            </div>
            <div className="bg-[#EDE4FF] rounded-2xl h-48 flex items-center justify-center text-5xl shadow-sm mt-6">
              💜
            </div>
            <div className="bg-[#E0F4FF] rounded-2xl h-48 flex items-center justify-center text-5xl shadow-sm">
              🪩
            </div>
            <div className="bg-[#FFF4E6] rounded-2xl h-48 flex items-center justify-center text-5xl shadow-sm -mt-6">
              ✨
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-[#FDF4FF]/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What We Stand For</h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            The values that shape every piece we create.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(value => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">From Bead to Beauty</h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            How each piece comes to life in four steps.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.step}>
                <div className="text-6xl font-black text-[#F8E6EE] select-none leading-none mb-3">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-manolya-purple to-purple-700">
        <div className="container mx-auto max-w-3xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Piece?</h2>
          <p className="text-purple-100 text-lg mb-8">
            Each item is made to order and ships worldwide. Find the one that speaks to you.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-manolya-purple font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}