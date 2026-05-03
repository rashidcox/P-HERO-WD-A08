import { SiHappycow } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A3D2B] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 align-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10rounded-xl flex items-center justify-center">
                <SiHappycow className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Livestock</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for Qurbani.<br />
              Quality animals, transparent deals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 align-center">
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/animals" className="hover:text-white transition-colors">All Animals</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors">My Profile</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">How it Works</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div >
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 mt-0.5" />
                <div>
                  <p>+880 1234-567890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MdMailOutline  className="w-5 h-5 mt-0.5" />
                <div>
                  <p>info@livestock.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <IoLogoInstagram className="w-5 h-5"/>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <FaXTwitter className="w-5 h-5"  />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Livestock Marketplace. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for Qurbani in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}