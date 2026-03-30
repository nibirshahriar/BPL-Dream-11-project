import React from "react";

const Subscribe = () => {
  return (
    <div className="max-w-5xl mx-auto -mb-32 relative z-10 mt-20">
      <div className="bg-gradient-to-r from-blue-100 via-white to-orange-200 rounded-2xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates and news right in your inbox!
        </p>

        <div className="flex justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border w-72 outline-none"
          />
          <button className="px-5 py-2 rounded-md bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
