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
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const columnContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const columnItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const wordmarkVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE, delay: 0.2 },
  },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 md:px-16">
      {/* faint grid line background, matching the rest of the page */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[22rem] w-[22rem] rounded-full bg-orange-500/10 blur-[110px]" />

      <motion.div
        className="relative mx-auto max-w-7xl pt-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* editorial brand statement */}
          <motion.div variants={item} className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-black tracking-tight text-white">
                GB
              </div>
              <span className="text-lg font-bold text-white">GigBridge</span>
            </div>

            <p className="max-w-xs text-2xl font-bold leading-snug text-white">
              The bridge between your class schedule and your next paycheck.
            </p>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://x.com/damlodotdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <FaXTwitter className="text-sm" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/whannou-damilola-59b494339?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <FaLinkedinIn className="text-sm" />
              </motion.a>
            </div>
          </motion.div>

          {/* link columns */}
          <motion.div variants={columnContainer} className="flex flex-col gap-4">
            <motion.h4
              variants={columnItem}
              className="text-xs font-bold tracking-[0.2em] text-gray-500"
            >
              EXPLORE
            </motion.h4>
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href="#"
                variants={columnItem}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="w-fit text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-orange-400"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={columnContainer} className="flex flex-col gap-4">
            <motion.h4
              variants={columnItem}
              className="text-xs font-bold tracking-[0.2em] text-gray-500"
            >
              LEGAL
            </motion.h4>
            {legalLinks.map((link) => (
              <motion.a
                key={link.id}
                href="#"
                variants={columnItem}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="w-fit text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-orange-400"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* status card, filling the fourth column */}
          <motion.div
            variants={item}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-5"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-500/10 px-2.5 py-1 text-xs font-semibold text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Early access
            </span>
            <p className="text-sm leading-6 text-gray-400">
              Built in Nigeria, for the students working through it.
            </p>
          </motion.div>
        </div>

        {/* bottom row */}
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GigBridge. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">Made for the hustle between classes.</p>
        </motion.div>
      </motion.div>

      {/* oversized background wordmark */}
      <motion.div
        variants={wordmarkVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pointer-events-none relative -mb-6 select-none text-center leading-none text-white/[0.04]"
        style={{ fontSize: "clamp(4rem, 16vw, 14rem)", fontWeight: 900 }}
      >
        GigBridge
      </motion.div>
    </footer>
  );
};

export default Footer;