import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center gap-6 text-7xl">
          <span>🐄</span>
          <span>🐐</span>
        </div>

        <h1 className="text-[120px] font-black text-emerald-100 leading-none -mt-6">404</h1>

        <h2 className="text-4xl font-bold text-gray-900 -mt-8 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 text-lg mb-10">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold inline-block transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}