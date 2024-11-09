import React from "react";

export default function Pixelperfect() {
  return (
    <div className="bg-[#1D1E2C] min-h-screen flex flex-col items-center">
      <nav className="w-full py-6 flex justify-between items-center px-12">
        <div className="text-white font-bold text-xl">BrandName</div>
        <div className="flex space-x-8 text-white">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Product</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white">Login</a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">JOIN US</button>
        </div>
      </nav>

      <div className="text-center mt-16">
        <p className="text-blue-400 text-sm mb-4">Welcome</p>
        <h1 className="text-white text-5xl font-bold mb-6">Selling on the internet like a pro</h1>
        <p className="text-gray-300 text-lg mb-10">
          We know how large object will act, but things on a small scale just do not act that way.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600">Get Quote Now</button>
          <button className="border border-blue-500 text-blue-500 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-8 mt-20">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <div className="w-12 h-12 bg-red-200 mb-4"></div>
          <h2 className="text-gray-800 font-bold text-xl mb-2">Training Courses</h2>
          <p className="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <div className="w-12 h-12 bg-green-200 mb-4"></div>
          <h2 className="text-gray-800 font-bold text-xl mb-2">2,769 online courses</h2>
          <p className="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        {/* Card 3 */}
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg w-80 text-white">
          <div className="w-12 h-12 bg-white mb-4"></div>
          <h2 className="font-bold text-xl mb-2">Training Courses</h2>
          <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      </div>
    </div>
  );
}