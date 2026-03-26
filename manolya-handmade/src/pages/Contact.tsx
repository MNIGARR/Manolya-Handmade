export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-2xl flex flex-col items-center">
      <h1 className="text-4xl font-bold text-manolya-purple mb-8 text-center">Get in Touch</h1>
      <form className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-6 w-full">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-manolya-purple" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-manolya-purple" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea rows={5} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-manolya-purple" placeholder="How can we help you?"></textarea>
        </div>
        <button type="button" className="bg-manolya-purple text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-medium w-full md:w-auto self-start">Send Message</button>
      </form>
    </div>
  );
}