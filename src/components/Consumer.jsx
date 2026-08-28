import { motion } from "framer-motion";
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
} from "react-icons/fa";

const student = [
  {
    id: 1,
    icon: FaGraduationCap,
    title: "For Students",
    description: "Earn around your class schedule. No experience required.",

    benefits: [
      {
        icon: FaBolt,
        description: "Flexible hours . work when you're free",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
      },
      {
        icon: FaMapMarkerAlt,
        description: "Gigs within walking distance of campus",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
      },
      {
        icon: FaRegCreditCard,
        description: "Fast payout to your in-app wallet",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
      },
      {
        icon: FaTrophy,
        description: "Build a verified portfolio of work",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
      },
      {
        icon: FaLock,
        description: "Verified employers — safe and legit",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
      },
    ],

    button: "Sign up as a Student",
  },
];

const employer = [
  {
    id: 2,
    icon: FaBuilding,
    title: "For Employers",
    description: "Find motivated, vetted students fast. Post a gig in minutes.",

    benefits: [
      {
        icon: FaBolt,
        description: "Post a gig in under 3 minutes",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
      },
      {
        icon: FaCheckSquare,
        description: "Students are campus-verified",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
      },
      {
        icon: FaComment,
        description: "Built-in messaging & proposals",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
      },
      {
        icon: FaStar,
        description: "Ratings and reviews system",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
      },
      {
        icon: FaChartBar,
        description: "Track all your active gigs in one place",
        color: "text-purple-300",
        bg: "bg-purple-500/10",
      },
    ],

    button: "Post as an Employer",
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

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardFromLeft = {
  hidden: { opacity: 0, x: -32, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const cardFromRight = {
  hidden: { opacity: 0, x: 32, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: EASE, delay: 0.1 },
  },
};

const benefitsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const benefitItem = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: 0.55 },
  },
};

const Consumer = () => {
  return (
    <section className="bg-[#050505] px-6 md:px-25">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20 text-center"
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h3
          variants={headingItem}
          className="text-sm font-bold tracking-[0.2em] text-purple-500"
        >
          WHO IT'S FOR?
        </motion.h3>

        <motion.h1
          variants={headingItem}
          className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl"
        >
          Built For Both Sides
        </motion.h1>

        <motion.p
          variants={headingItem}
          className="mt-4 max-w-2xl text-base leading-7 text-gray-500 md:text-lg"
        >
          Whether you're looking for flexible work or reliable student talent,
          SkillBridge makes it simple to connect.
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 pb-20 lg:grid-cols-2"
        variants={cardsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {student.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              variants={cardFromLeft}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE } }}
              className="group rounded-4xl border border-orange-500/20 bg-orange-500/6 p-8 transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/9 md:p-10"
            >
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.1, rotate: 4 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-2xl text-orange-400"
              >
                <Icon />
              </motion.div>

              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {item.title}
              </h2>

              <p className="mt-3 max-w-lg text-[15px] leading-7 text-gray-400 md:text-base">
                {item.description}
              </p>

              <motion.div
                className="mt-8 space-y-5"
                variants={benefitsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={benefitItem}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${benefit.bg} ${benefit.color}`}
                      >
                        <BenefitIcon className="text-sm" />
                      </div>

                      <p className="text-sm leading-6 text-gray-300 md:text-[15px]">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.button
                variants={buttonVariant}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="mt-9 w-full cursor-pointer rounded-xl bg-orange-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/10 transition-shadow duration-300 hover:bg-orange-600 hover:shadow-orange-500/20"
              >
                {item.button}
              </motion.button>
            </motion.div>
          );
        })}

        {employer.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              variants={cardFromRight}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE } }}
              className="group rounded-3xl border border-purple-500/20 bg-purple-500/4 p-8 transition-colors duration-300 hover:border-purple-500/50 hover:bg-purple-500/[0.07] md:p-10"
            >
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.1, rotate: 4 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-2xl text-purple-400"
              >
                <Icon />
              </motion.div>

              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {item.title}
              </h2>

              <p className="mt-3 max-w-lg text-[15px] leading-7 text-gray-400 md:text-base">
                {item.description}
              </p>

              <motion.div
                className="mt-8 space-y-5"
                variants={benefitsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;

                  return (
                    <motion.div
                      key={index}
                      variants={benefitItem}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${benefit.bg} ${benefit.color}`}
                      >
                        <BenefitIcon className="text-sm" />
                      </div>

                      <p className="text-sm leading-6 text-gray-300 md:text-[15px]">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.button
                variants={buttonVariant}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="mt-9 w-full cursor-pointer rounded-xl border border-purple-500/50 bg-purple-500/5 px-5 py-3.5 font-semibold text-purple-300 transition-colors duration-300 hover:border-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
              >
                {item.button}
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Consumer;