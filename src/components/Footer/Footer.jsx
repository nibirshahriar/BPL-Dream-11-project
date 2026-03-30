import React from "react";
import footerIMG from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <footer className="bg-[#050B2B] text-white pt-40 pb-6 px-6 relative">
      {/* Logo */}
      <div className="flex items-center justify-center my-4">
        <img src={footerIMG} alt="logo" className="w-20 h-20 object-contain" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md w-full text-black outline-none"
            />
            <button className="px-4 py-2 rounded-r-md bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        @2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
