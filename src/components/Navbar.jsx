
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "How it Works", path: "/how-it-works" },
  { name: "For Students", path: "/for-students" },
  { name: "For Employers", path: "/for-employers" },
  { name: "FAQs", path: "/faqs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="bg-[#FF6B2B] text-white px-4 py-2 font-bold rounded-lg">
            G
          </h1>

          <p className="text-white text-xl font-semibold">
            Gig<span className="text-[#FF6B2B]">Bridge</span>
          </p>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-300 font-medium hover:text-[#FF6B2B] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hidden lg:block bg-[#FF6B2B] text-white px-4 py-1.5 rounded-full font-semibold hover:bg-[#e85a20] transition-colors">
          Join Waitlist
        </button>
      </div>

      {/* mobile nav  */}

      {menuOpen && (
        <div className="lg:hidden border-t border-[#2A2A2A] bg-[#111111] px-6 py-5">
          <nav>
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-300 font-medium hover:text-[#FF6B2B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <button className="w-full bg-[#FF6B2B] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#e85a20] transition-colors">
                  Join Waitlist
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
