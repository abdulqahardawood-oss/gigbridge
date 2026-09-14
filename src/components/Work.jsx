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
    featured: true,
  },
  {
    id: 2,
    number: "02",
    icon: FaMap,
    title: "Browse gigs near your campus",
    description:
      "See paid opportunities sorted by distance, duration, and category  all within reach of your campus.",
  },
  {
    id: 3,
    number: "03",
    icon: FaMoneyBillWave,
    title: "Apply, get hired, get paid",
    description:
      "Send a proposal, chat with employers, complete the gig, and get paid directly to your in app wallet.",
    featured: true,
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
      staggerChildren: 0.15,
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

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.2 },
  },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.5, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, ease: EASE, delay: 0.1 },
  },
};

const Work = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 md:px-16">
      {/* faint grid line background, consistent with the hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* split header: eyebrow + heading on the left, supporting line on the right */}
        <motion.div
          className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <motion.h3
              variants={headingItem}
              className="text-lg font-bold text-orange-500"
            >
              Simple Process
            </motion.h3>
            <motion.h1
              variants={headingItem}
              className="mt-2 font-sans text-4xl font-black text-white sm:text-5xl"
            >
              How it Works
            </motion.h1>
          </div>

          <motion.p
            variants={headingItem}
            className="max-w-sm text-left text-base font-medium leading-relaxed text-gray-400 lg:text-right"
          >
            Three steps stand between you and your next paid gig .No long
            applications, no waiting around for a reply.
          </motion.p>
        </motion.div>

        {/* connected horizontal timeline on desktop, vertical rail on mobile */}
        <motion.div
          className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6"
          variants={cardGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* the connecting rail */}
          <motion.div
            variants={lineVariant}
            style={{ transformOrigin: "left" }}
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-orange-500/50 via-white/15 to-orange-500/50 lg:block"
          />
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-white/10 lg:hidden" />

          {profile.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
              className={`relative flex gap-5 rounded-2xl border p-6 transition-colors duration-300 lg:flex-col lg:gap-0 lg:pt-0 ${
                item.featured
                  ? "border-orange-500/40 bg-gradient-to-b from-orange-500/[0.08] to-transparent"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              } ${idx === 1 ? "lg:mt-10" : ""}`}
            >
              {/* icon bubble sitting on the rail */}
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.25, ease: EASE }}
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-xl font-bold lg:mb-6 ${
                  item.featured
                    ? "border-orange-500/60 bg-orange-500 text-white shadow-[0_0_25px_rgba(249,115,22,0.45)]"
                    : "border-orange-500/30 bg-[#0a0a0a] text-orange-500"
                }`}
              >
                <item.icon />
              </motion.div>

              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-sm font-black tracking-wide text-orange-500/70">
                    {item.number}
                  </span>
                  <h3 className="font-sans text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 max-w-md text-sm font-medium leading-6 text-gray-400 lg:mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;