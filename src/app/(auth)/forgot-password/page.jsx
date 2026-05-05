'use client';
import { SiHappycow } from "react-icons/si";
import { useState } from 'react';
import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          
          {/* Header */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                <SiHappycow />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Livestock</h1>
            </div>
          </div>

          {!success ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">Forgot Password?</h2>
              <p className="text-gray-600 text-center mb-8">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MdOutlineEmail size={22} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 rounded-2xl text-lg transition-all"
                >
                  {loading ? "Sending Reset Link..." : "Send Reset Link"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                ✅
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Check Your Email</h2>
              <p className="text-gray-600 mb-8">
                We have sent a password reset link to <br />
                <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Please check your inbox and spam folder.
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}