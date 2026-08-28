import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaLock,
  FaFileAlt,
  FaStar,
  FaClipboardList,
} from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const offers = [
  {
    id: 1,
    icon: FaCreditCard,
    title: "In-app Wallet",
    description: "Instant payouts. No bank delays.",
    iconColor: "text-cyan-400",
    iconBg: "bg-orange-500/10",
    iconBorder: "border-orange-500/30",
  },
  {
    id: 2,
    icon: FaLock,
    title: "Secure Messaging",
    description: "End-to-end encrypted job chat.",
    iconColor: "text-purple-300",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/30",
  },
  {
    id: 3,
    icon: FaFileAlt,
    title: "Gig Proposals",
    description: "Send and receive structured proposals.",
    iconColor: "text-gray-200",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/30",
  },
  {
    id: 4,
    icon: FaStar,
    title: "Reviews & Ratings",
    description: "Build trust with verified feedback.",
    iconColor: "text-yellow-300",
    iconBg: "bg-yellow-500/10",
    iconBorder: "border-yellow-500/30",
  },
  {
    id: 5,
    icon: CheckCircle2,
    title: "Verification Badge",
    description: "Student ID and campus verification.",
    iconColor: "text-green-400",
    iconBg: "bg-red-500/10",
    iconBorder: "border-red-500/30",
  },
  {
    id: 6,
    icon: FaClipboardList,
    title: "Portfolio Gallery",
    description: "Showcase completed work to employers.",
    iconColor: "text-yellow-300",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/30",
  },
];

// Shared easing for a premium, consistent feel
const EASE = [0.16, 1, 0.3, 1];

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const cardGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: EASE, delay: 0.08 },
  },
};

const ctaContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const Features = () => {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20  border-b border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3
            variants={headingItem}
            className="text-sm font-bold tracking-[0.2em] text-purple-500"
          >
            PLATFORM FEATURES
          </motion.h3>

          <motion.h1
            variants={headingItem}
            className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl"
          >
            Everything You Need
          </motion.h1>

          <motion.p
            variants={headingItem}
            className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-500 md:text-lg"
          >
            A complete toolkit for complete gig work. Built for speed,
            safety, and <em>student life.</em>
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={cardGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {offers.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariant}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25, ease: EASE },
                }}
                className="min-h-40.75 rounded-2xl border border-white/10 bg-[#151515] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-[#181818]"
              >
                {/* Icon baddo  */}
                <motion.div
                  variants={iconVariant}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${item.iconBg} ${item.iconBorder} ${item.iconColor}`}
                >
                  <Icon className="text-lg" />
                </motion.div>

                {/* Title */}
                <h2 className="text-base font-bold text-white md:text-lg">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col items-center mt-17"
          variants={ctaContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={ctaItem}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-sm text-orange-400"
          >
            🔥100 {""} + students already waiting
          </motion.div>

          <motion.h1
            variants={ctaItem}
            className="text-white text-5xl font-black font-sans mt-4"
          >
            Be first when we{" "}
            <span className="text-orange-400">
              <em>launch</em>
            </span>
          </motion.h1>

          <motion.p
            variants={ctaItem}
            className="mx-auto mt-4 max-w-lg text-center text-base leading-7 text-gray-500 md:text-lg"
          >
            Join the waitlist . Get early access ,exclusive gigs and a <br />
            <b>Verified badge</b> on launch day .
          </motion.p>

          <motion.form
            variants={ctaItem}
            className="mt-6 flex w-full max-w-xl gap-3"
          >
            <input
              type="email"
              placeholder="your@university.edu.ng"
              className="h-12 flex-1 rounded-xl border border-white/10 bg-[#151515] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 hover:bg-[#181818] focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="h-12 rounded-xl bg-orange-500 px-6 font-semibold text-black transition-shadow duration-300 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Join Waitlist
            </motion.button>
          </motion.form>

          <motion.p
            variants={ctaItem}
            className="mx-auto mt-4 max-w-lg text-center text-base leading-7 text-gray-500 md:text-sm"
          >
            No spam .Unsubscribe anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;