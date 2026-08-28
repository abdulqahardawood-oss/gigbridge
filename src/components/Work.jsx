import { motion } from "framer-motion";
import { FaUser, FaMap, FaMoneyBillWave } from "react-icons/fa";

const profile = [
  {
    id: 1,
    number: "01",
    icon: FaUser,
    title: "Create your profile",
    description:
      "Sign up with your student email, verify your campus, and set your skills and availability in minutes.",
  },
  {
    id: 2,
    number: "02",
    icon: FaMap,
    title: "Browse gigs near your campus",
    description:
      "See paid opportunities sorted by distance, duration, and category — all within reach of your campus.",
  },
  {
    id: 3,
    number: "03",
    icon: FaMoneyBillWave,
    title: "Apply, get hired, get paid",
    description:
      "Send a proposal, chat with employers, complete the gig, and get paid directly to your in-app wallet.",
  },
];

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
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
    transition: { duration: 0.45, ease: EASE, delay: 0.1 },
  },
};

const numberVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
};

const Work = () => {
  return (
    <section className="bg-[#0a0a0a] px-6 md:px-25">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20"
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h3
          variants={headingItem}
          className="text-orange-500 font-bold text-lg"
        >
          Simple Process
        </motion.h3>
        <motion.h1
          variants={headingItem}
          className="text-white text-4xl font-black font-sans mt-2"
        >
          How it Works
        </motion.h1>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3"
        variants={cardGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {profile.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariant}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
            className="relative rounded-2xl border border-white/10 bg-[#151515] p-5 transition-colors duration-300 hover:border-white/20"
          >
            <motion.div
              variants={iconVariant}
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-xl font-bold text-orange-500"
            >
              <item.icon />
            </motion.div>

            <motion.span
              variants={numberVariant}
              className="absolute right-5 top-4 text-5xl font-sans font-black text-orange-400/10"
            >
              {item.number}
            </motion.span>

            <h3 className="mb-2 text-xl font-sans font-bold text-white">
              {item.title}
            </h3>

            <p className="max-w-md text-sm font-bold font-sans leading-6 text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;