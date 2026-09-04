import { motion } from "framer-motion";
import damlopic from "../assets/damlopic.jpeg";

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

const avatarContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.7,
    },
  },
};

const avatarItem = {
  hidden: { opacity: 0, scale: 0.5, x: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.2 },
  },
};

const Hero = () => {
  return (
    <section className="hero overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:gap-8 lg:py-20">
        <motion.div
          className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-sm text-orange-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
            Now in early access • Nigeria
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Find <em>Gigs.</em>{" "}
            <span className="text-orange-500">
              Earn <em>Fast.</em>
            </span>
            <br />
            Stay on <em>Campus.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg font-semibold text-gray-400 sm:text-xl lg:text-2xl"
          >
            GigBridge connects Nigerian university students to short-term paid
            work. Near you, on your schedule, no commute and no{" "}
            <b className="text-white">
              <em>stress.</em>
            </b>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-600"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="inline-flex items-center justify-center rounded-full border border-orange-500/40 px-8 py-4 text-sm font-medium text-orange-400 transition-colors duration-200 hover:bg-orange-500/10 hover:text-orange-500"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-0"
          >
            <motion.div
              className="flex -space-x-2"
              variants={avatarContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={avatarItem}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-orange-500 text-sm font-bold text-white"
              >
                D
              </motion.div>

              <motion.div
                variants={avatarItem}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-purple-400 text-sm font-bold text-white"
              >
                A
              </motion.div>

              <motion.div
                variants={avatarItem}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-blue-500 text-sm font-bold text-white"
              >
                M
              </motion.div>

              <motion.div
                variants={avatarItem}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-orange-400 text-sm font-bold text-white"
              >
                L
              </motion.div>

              <motion.div
                variants={avatarItem}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-orange-400 text-sm font-bold text-white"
              >
                O
              </motion.div>
            </motion.div>

            <p className="text-sm font-medium text-gray-400 sm:ml-5">
              <span className="font-bold text-white">100+</span> students
              already waiting
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-xs shrink-0 sm:max-w-sm lg:max-w-md xl:max-w-lg"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={damlopic}
            alt="Preview of GigBridge on mobile"
            className="h-auto w-full max-w-[320px] -rotate-3 rounded-3xl object-contain shadow-2xl shadow-orange-500/10 sm:max-w-sm sm:rotate-[-4deg] lg:h-125 lg:w-auto lg:max-w-lg"
            animate={{
              y: [0, -12, 0],
            }}
            whileHover={{
              scale: 1.03,
              rotate: -2,
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3,
                ease: EASE,
              },
              rotate: {
                duration: 0.3,
                ease: EASE,
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;