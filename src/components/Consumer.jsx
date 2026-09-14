import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLock,
  FaTrophy,
  FaRegCreditCard,
  FaBuilding,
  FaCheckSquare,
  FaComment,
  FaStar,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1];

const audiences = {
  students: {
    id: "students",
    icon: FaGraduationCap,
    title: "Students, get paid",
    description:
      "Turn spare hours into real income right from your phone, around your timetable, without a single unpaid internship.",
    button: "Start earning",
    benefits: [
      { icon: FaBolt, label: "Work your own hours" },
      { icon: FaMapMarkerAlt, label: "Gigs a walk from your dorm" },
      { icon: FaRegCreditCard, label: "Cash out the same day" },
      { icon: FaTrophy, label: "Every gig builds your record" },
      { icon: FaLock, label: "Every employer is checked" },
    ],
  },
  employers: {
    id: "employers",
    icon: FaBuilding,
    title: "Employers, hire fast",
    description:
      "Skip the recruiting cycle entirely. Post once, and meet verified students within hours, not weeks.",
    button: "Post a gig",
    benefits: [
      { icon: FaBolt, label: "Live in under 3 minutes" },
      { icon: FaCheckSquare, label: "Every applicant campus-verified" },
      { icon: FaComment, label: "Talk it out before you commit" },
      { icon: FaStar, label: "A reputation you can see" },
      { icon: FaChartBar, label: "One dashboard, every gig" },
    ],
  },
};

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

const panelVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const paneEnter = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE },
  },
  exit: { opacity: 0, x: 12, transition: { duration: 0.25, ease: EASE } },
};

const chipContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const chipItem = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: EASE },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
};

const Consumer = () => {
  const [active, setActive] = useState("students");
  const current = audiences[active];
  const CurrentIcon = current.icon;

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-16">
      {/* grid line + glow background, matching the rest of the page */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3
            variants={headingItem}
            className="text-sm font-bold tracking-[0.2em] text-orange-500"
          >
            TWO AUDIENCES
          </motion.h3>

          <motion.h1
            variants={headingItem}
            className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl"
          >
            One platform. Two sides.
          </motion.h1>

          <motion.p
            variants={headingItem}
            className="mt-4 max-w-2xl text-base leading-7 text-gray-500 md:text-lg"
          >
            Whether you've got hours to spare or gigs to fill, GigBridge
            closes the gap between campus and work.
          </motion.p>

          {/* segmented toggle */}
          <motion.div
            variants={headingItem}
            className="mt-9 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {Object.values(audiences).map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  active === a.id
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {active === a.id && (
                  <motion.span
                    layoutId="active-audience-pill"
                    className="absolute inset-0 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.4)]"
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}
                <span className="relative">
                  {a.id === "students" ? "I'm a Student" : "I'm Hiring"}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* interactive split panel: identity on the left, benefits as a chip grid on the right */}
        <motion.div
          variants={panelVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-[1fr_1.3fr]"
        >
          <div className="relative bg-[#0a0a0a] p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={paneEnter}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-2xl text-orange-400">
                  <CurrentIcon />
                </div>

                <h2 className="mt-7 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {current.title}
                </h2>

                <p className="mt-4 max-w-sm text-[15px] leading-7 text-gray-400 md:text-base">
                  {current.description}
                </p>

                <button className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/10 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/20">
                  {current.button}
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative bg-[#0a0a0a] p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={chipContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {current.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  const isWide = index === current.benefits.length - 1;

                  return (
                    <motion.div
                      key={benefit.label}
                      variants={chipItem}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.2, ease: EASE },
                      }}
                      className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/[0.06] ${
                        isWide ? "sm:col-span-2" : ""
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                        <BenefitIcon className="text-sm" />
                      </div>
                      <p className="text-sm font-medium leading-6 text-gray-300">
                        {benefit.label}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consumer;