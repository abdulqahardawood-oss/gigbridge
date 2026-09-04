import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const navLinks = [
  { id: 1, label: "How it Works" },
  { id: 2, label: "For Students" },
  { id: 3, label: "For Employers" },
  { id: 4, label: "FAQ" },
];

const legalLinks = [
  { id: 1, label: "Terms of Service" },
  { id: 2, label: "Privacy Policy" },
];

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
};

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};

const bottomRow = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
      delay: 0.2,
    },
  },
};

const Footer = () => {
  return (
    <section className="bg-[#050505] px-6 md:px-25">
      <motion.div
        className="mx-auto max-w-7xl py-14"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

          {/* Brand */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-black tracking-tight text-white">
                GB
              </div>

              <span className="text-lg font-bold text-white">
                GigBridge
              </span>
            </div>

            <p className="max-w-xs text-sm leading-6 text-gray-500">
              Connecting Nigerian students to short-term paid work since 2023.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex flex-wrap items-center gap-x-8 gap-y-3"
            variants={navContainer}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href="#"
                variants={navItem}
                whileHover={{ y: -2 }}
                transition={{
                  duration: 0.2,
                  ease: EASE,
                }}
                className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-orange-400"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="flex items-center gap-3"
          >
            <motion.a
              href="https://x.com/damlodotdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: EASE,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
            >
              <FaXTwitter className="text-sm" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/whannou-damilola-59b494339?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: EASE,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
            >
              <FaLinkedinIn className="text-sm" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="mt-10 border-t border-white/10"
        />

        {/* Bottom Row */}
        <motion.div
          variants={bottomRow}
          className="flex flex-col items-start justify-between gap-4 pt-6 pb-8 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GigBridge. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                className="text-sm text-gray-500 transition-colors duration-200 hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Footer;