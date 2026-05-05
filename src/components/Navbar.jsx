"use client";

import { SiHappycow } from "react-icons/si";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // 🔐 Real auth state (Replace this with your actual auth logic later)
  const [user, setUser] = useState({
    name: "Sakib H",
    image: "https://i.pravatar.cc/40",
  });
  // const [user, setUser] = useState(null); // ← Use this when user is logged out

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/animals" },
  ];

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      setUser(null); // Clear user
      setDropdownOpen(false);
      setMenuOpen(false);
      alert("Logged out successfully!");
      // Later: Add real logout logic (clear token, redirect, etc.)
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl text-green-700"><SiHappycow /></span>
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

        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1 rounded-full transition"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-9 h-9 rounded-full border-2 border-green-600 object-cover"
                />
                <span className="text-sm font-semibold text-green-600">{user.name}</span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 py-1 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2.5 hover:bg-gray-100 text-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-600 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block py-3 text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4 pt-4 border-t">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block py-3 text-gray-700 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-3 text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block bg-green-600 text-white text-center py-3 rounded-full font-medium"
                onClick={() => setMenuOpen(false)}
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