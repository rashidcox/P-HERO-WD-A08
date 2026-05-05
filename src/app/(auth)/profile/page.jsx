'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUserEdit, FaPhone, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function ProfilePage() {
  const [user] = useState({
    name: "Sakib Hossain",
    email: "sakib@example.com",
    phone: "+880 1234-567890",
    location: "Bogura, Bangladesh",
    memberSince: "May 20, 2024",
    photoURL: "https://i.pravatar.cc/300", // You can change this
  });

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      alert("Logged out successfully!");
      // Add real logout logic here later
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Cover & Avatar */}
          <div className="h-48 bg-gradient-to-r from-emerald-600 to-green-600 relative">
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <div className="relative w-32 h-32">
                <Image
                  src={user.photoURL}
                  alt={user.name}
                  fill
                  className="rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="pt-20 pb-10 px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-emerald-600 mt-1">{user.email}</p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 text-sm">
              <div>
                <p className="text-2xl font-semibold text-gray-800">12</p>
                <p className="text-gray-500">Bookings</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-800">8</p>
                <p className="text-gray-500">Animals</p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="px-8 pb-10">
            <h3 className="text-lg font-semibold mb-5 text-gray-800">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <FaEnvelope className="text-emerald-600 text-2xl" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <FaPhone className="text-emerald-600 text-2xl" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <FaMapMarkerAlt className="text-emerald-600 text-2xl" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{user.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
                <FaCalendarAlt className="text-emerald-600 text-2xl" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">{user.memberSince}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-8 pb-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/update-info"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition"
            >
              <FaUserEdit />
              Update Profile
            </Link>

            <button
              onClick={handleLogout}
              className="flex-1 border border-red-300 hover:bg-red-50 text-red-600 font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>

        {/* Extra Info */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Need help? Contact us at <span className="text-emerald-600">info@livestock.com</span>
        </p>
      </div>
    </div>
  );
}