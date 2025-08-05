import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeLoginPanel = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 text-xl font-bold text-blue-700">
              ALLEN
            </div>
            <div className="hidden md:flex space-x-6">
              {["Courses", "Test Series", "Classroom", "Results", "Study Material", "ALLEN Store"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={toggleMenu}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
 
      {isOpen && (
       <div className="fixed top-0 right-0 h-full w-full bg-black bg-opacity-30 z-50 flex justify-end">

          <div className="bg-white w-full max-w-sm p-6 shadow-lg h-full overflow-y-auto">
          
            <button
              className="text-gray-500 text-xl font-bold mb-4"
              onClick={closeLoginPanel}
            >
              &times;
            </button>

            
            <div>
              <h2 className="text-lg font-semibold mb-4">Login with mobile number</h2>
              <input
                type="text"
                placeholder="Enter 10-digit mobile number"
                className="w-full border p-2 mb-4 rounded"
              />
              <button className="w-full bg-gray-300 text-gray-600 py-2 rounded mb-4">
                Send OTP
              </button>
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-500">or</span>
              </div>
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded mb-2">
                Continue with Form ID
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded">
                Continue with Email ID
              </button>
              <p className="text-xs text-gray-500 mt-6">
                By continuing you are accepting our{" "}
                <a href="#" className="underline">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  T&C
                </a>
              </p>
            </div>
          </div>

          <div className="flex-1" onClick={closeLoginPanel}></div>
        </div>
      )}
    </>
  );
};

export default Navbar;

                    

                   


