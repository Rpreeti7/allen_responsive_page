const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6 px-6 md:px-12 border-t border-blue-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h4 className="font-semibold text-xl mb-2">ALLEN Career Institute</h4>
          <p className="text-sm leading-relaxed opacity-90">
            Trusted by millions for over 34 years. Delivering success in JEE, NEET & Olympiads.
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold text-xl mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Test Series</a></li>
            <li><a href="#" className="hover:underline">Study Material</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h4 className="font-semibold text-xl mb-2">Contact</h4>
          <p className="text-sm opacity-90">Email: support@allen.in</p>
          <p className="text-sm opacity-90">Phone: +91 90000 12345</p>
          <div className="mt-4 flex space-x-4 text-lg">
            <a href="#" className="hover:opacity-75">🌐</a>
            <a href="#" className="hover:opacity-75">📘</a>
            <a href="#" className="hover:opacity-75">🐦</a>
          </div>
        </div>
      </div>

    
      <div className="text-center text-xs mt-10 opacity-70">
        © 2025 ALLEN Career Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
