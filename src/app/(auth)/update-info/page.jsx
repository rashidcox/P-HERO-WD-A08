'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaUser, FaPhone, FaEnvelope, FaImage } from 'react-icons/fa';

export default function UpdateInfoPage() {
  const [formData, setFormData] = useState({
    name: "Sakib Hossain",
    email: "sakib@example.com",
    phone: "+880 1234-567890",
    photoURL: "https://i.pravatar.cc/300",
  });

  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(formData.photoURL);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "photoURL") {
      setPreviewImage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Profile Updated Successfully!");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/profile" 
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <FaArrowLeft /> Back to Profile
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-8">Update Information</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Profile Picture Preview */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={previewImage || "/placeholder-avatar.jpg"}
                  alt="Profile Preview"
                  fill
                  className="rounded-full object-cover border-4 border-emerald-100"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Photo URL
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaImage size={20} />
                </div>
                <input
                  type="text"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  placeholder="https://example.com/your-photo.jpg"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaUser size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

          
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaEnvelope size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 bg-gray-100 rounded-2xl focus:outline-none cursor-not-allowed"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaPhone size={20} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 rounded-2xl text-lg transition-all mt-6"
            >
              {loading ? "Updating Profile..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}