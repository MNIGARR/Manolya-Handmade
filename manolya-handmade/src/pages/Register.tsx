import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="container mx-auto px-6 py-20 flex justify-center items-center min-h-[70vh]">
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 w-full max-w-md">
        <h1 className="text-3xl font-bold text-manolya-purple mb-6 text-center">Create Account</h1>
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="••••••••" />
          </div>
          <button type="button" className="bg-manolya-purple text-white py-3 rounded-md hover:bg-purple-700 transition font-medium mt-2">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account? <Link to="/login" className="text-manolya-purple font-semibold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}