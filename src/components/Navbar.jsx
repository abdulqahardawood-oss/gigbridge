import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "How it Works", path: "/how-it-works" },
  { name: "For Students", path: "/for-students" },
  { name: "For Employers", path: "/for-employers" },
  { name: "FAQs", path: "/faqs" },
];

const EASE = [0.16, 1, 0.3, 1];

const panelVariant = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: EASE },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: EASE },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: EASE },
  },
};

const iconVariant = {
  hidden: { opacity: 0, rotate: -90, scale: 0.7 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.25, ease: EASE },
  },
  exit: {
    opacity: 0,
    rotate: 90,
    scale: 0.7,
    transition: { duration: 0.2, ease: EASE },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111111]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-[#FF6B2B] rounded-lg blur-md opacity-40" />
            <h1 className="relative bg-[#FF6B2B] text-white w-8 h-8 flex items-center justify-center font-bold rounded-lg sm:w-9 sm:h-9">
              G
            </h1>
          </div>

          <p className="text-white text-lg font-semibold tracking-tight sm:text-xl">
            Gig<span className="text-[#FF6B2B]">Bridge</span>
          </p>
        </div>

        <button
          className="lg:hidden relative flex h-9 w-9 items-center justify-center text-white -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                variants={iconVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <FaTimes size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                variants={iconVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <FaBars size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="relative px-4 py-2 text-sm text-gray-300 font-medium rounded-full hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hidden lg:block relative bg-[#FF6B2B] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#e85a20] transition-all hover:shadow-[0_0_20px_rgba(255,107,43,0.5)]">
          Join Waitlist
        </button>
      </div>

      {/* mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={panelVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden w-full overflow-hidden border-t border-white/10 bg-[#111111]/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            <nav className="px-4 py-4 sm:px-6 sm:py-5">
              <motion.ul
                variants={listContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.path} variants={listItem}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-3 rounded-lg text-gray-300 font-medium hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}

                <motion.li variants={listItem} className="pt-2">
                  <button className="w-full bg-[#FF6B2B] text-white px-4 py-3 rounded-full font-semibold hover:bg-[#e85a20] transition-colors">
                    Join Waitlist
                  </button>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;