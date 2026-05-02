"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // 🔁 Replace this with real auth later
  const user = {
    name: "Sakib H",
    image: "https://i.pravatar.cc/40",
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/animals" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐄</span>
          <h1 className="text-xl font-bold text-green-700">Livestock</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium transition ${
                pathname === link.path
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative">
              {/* User Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-full transition"
              >
                <img
                  src={user.image}
                  alt="user"
                  className="w-9 h-9 rounded-full border-2 border-green-600"
                />
                <span className="text-sm font-semibold">{user.name}</span>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-xl overflow-hidden border">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={() => alert("Logged out")}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-green-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-green-700 transition duration-200"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">

          {/* Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block py-2 text-gray-700 hover:text-green-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Auth Section */}
          <div className="mt-3 border-t pt-3">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block py-2 text-gray-700"
                >
                  My Profile
                </Link>

                <button
                  onClick={() => alert("Logged out")}
                  className="block py-2 text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block bg-green-600 text-white text-center py-2 rounded-full font-medium hover:bg-green-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}