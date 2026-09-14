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
      delayChildren: 0.9,
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

const statCardVariant = {
  hidden: { opacity: 0, y: -16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE, delay: 0.7 },
  },
};

const frameVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE, delay: 0.1 },
  },
};

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden bg-[#0a0a0a]">
      {/* layered background: grid + orange mesh glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-orange-600/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-28">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
         

          <motion.h1
            variants={item}
            className="mt-8 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
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
            GigBridge connects Nigerian university students to short term paid
            work. Near you, on your schedule, no commute and no{" "}
            <b className="text-white">
              <em>stress.</em>
            </b>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-colors duration-200 hover:bg-orange-600"
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
        </motion.div>

        {/* framed panel holding the device image, with the stat card as a corner badge on the frame */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0"
          variants={frameVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-10 pb-14 pt-16 backdrop-blur-sm sm:px-14 sm:pt-20">
            {/* orange glow behind the image for depth */}
            <div className="absolute inset-10 -z-10 rounded-[2rem] bg-orange-500/20 blur-3xl" />

            <motion.img
              src={damlopic}
              alt="Preview of GigBridge on mobile"
              className="mx-auto h-auto w-full max-w-[260px] -rotate-3 rounded-3xl object-contain shadow-2xl shadow-orange-500/10 sm:max-w-[300px]"
              variants={imageVariant}
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

            {/* floating stat card, clipped to the frame's top edge — clear of the phone image */}
            <motion.div
              variants={statCardVariant}
              initial="hidden"
              animate="visible"
              className="absolute -top-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-[#111111]/90 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:left-10 sm:translate-x-0"
            >
              <motion.div
                className="flex -space-x-2"
                variants={avatarContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={avatarItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#111111] bg-orange-500 text-sm font-bold text-white"
                >
                  D
                </motion.div>

                <motion.div
                  variants={avatarItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#111111] bg-purple-400 text-sm font-bold text-white"
                >
                  A
                </motion.div>

                <motion.div
                  variants={avatarItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#111111] bg-blue-500 text-sm font-bold text-white"
                >
                  M
                </motion.div>

                <motion.div
                  variants={avatarItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#111111] bg-orange-400 text-sm font-bold text-white"
                >
                  L
                </motion.div>

                <motion.div
                  variants={avatarItem}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#111111] bg-orange-400 text-sm font-bold text-white"
                >
                  O
                </motion.div>
              </motion.div>

              <p className="whitespace-nowrap text-sm font-medium text-gray-400">
                <span className="font-bold text-white">100+</span> students
                <br className="hidden sm:block" /> already waiting
              </p>
            </motion.div>

            {/* small decorative accent on the frame's bottom edge for structural balance */}
            <div className="absolute -bottom-3 right-10 h-6 w-6 rotate-45 rounded-md border border-orange-500/40 bg-orange-500/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;