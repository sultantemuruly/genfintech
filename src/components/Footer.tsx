import React from 'react'

export default function Footer() {
    return (
    <div className="bg-gray-800 text-white py-10">
        <div className="mx-auto px-[180px]">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">GenFinTech Connect</h3>
              <p className="text-sm">
                Empowering your financial decisions with advanced AI tools.
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="text-md font-semibold mb-2">Quick Links</h4>
              <ul className="list-none">
                <li><a href="/" className="text-sm hover:underline">Home</a></li>
                <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
                <li><a href="/features" className="text-sm hover:underline">AI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-2">Contact Us</h4>
              <p className="text-sm mb-1">Email: <a href="mailto:contact@finai.com" className="text-blue-300 hover:underline">contact@finai.com</a></p>
              <p className="text-sm">Phone: <a href="tel:+1234567890" className="text-blue-300 hover:underline">+1 (234) 567-890</a></p>
            </div>
          </div>
          <div className="text-center text-sm mt-6">
            <p>&copy; {new Date().getFullYear()} GenFinTech Connect. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
}