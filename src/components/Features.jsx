import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaLock,
  FaFileAlt,
  FaStar,
  FaClipboardList,
} from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const tiles = [
  {
    id: 2,
    icon: FaCreditCard,
    title: "Get paid the second you're done",
    description:
      "No bank transfers, no three day holds  funds land straight in your wallet.",
    featured: true,
    placement: "md:[grid-column:3/5] md:[grid-row:1/2]",
  },
  {
    id: 3,
    icon: FaLock,
    title: "Encrypted, always",
    description: "Job chats stay between you and the other side.",
    placement: "md:[grid-column:3/4] md:[grid-row:2/3]",
  },
  {
    id: 4,
    icon: FaFileAlt,
    title: "Proposals, not guesswork",
    description: "Structured terms both sides agree to upfront.",
    placement: "md:[grid-column:4/5] md:[grid-row:2/3]",
  },
  {
    id: 5,
    icon: FaStar,
    title: "A reputation you keep",
    description: "Verified feedback from gigs you've actually done.",
    placement: "md:[grid-column:1/2] md:[grid-row:3/4]",
  },
  {
    id: 6,
    icon: CheckCircle2,
    title: "Proof you're a student",
    description: "ID and campus verification, done once.",
    placement: "md:[grid-column:2/3] md:[grid-row:3/4]",
  },
  {
    id: 7,
    icon: FaClipboardList,
    title: "A portfolio that builds itself",
    description: "Every completed gig adds to your public track record.",
    wide: true,
    placement: "md:[grid-column:3/5] md:[grid-row:3/4]",
  },
];

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const tileVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

const ctaContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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
    <section className="relative overflow-hidden border-b border-[#2A2A2A] bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* bento grid: the intro copy IS a tile, sitting inside the grid itself */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(170px,1fr))]"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* intro tile */}
          <motion.div
            variants={headingContainer}
            className="flex flex-col justify-center rounded-3xl border border-white/10 bg-[#111111] p-8 md:col-span-2 md:row-span-2 md:[grid-column:1/3] md:[grid-row:1/3] md:p-10"
          >
            <motion.h3
              variants={headingItem}
              className="text-sm font-bold tracking-[0.2em] text-orange-500"
            >
              THE TOOLKIT
            </motion.h3>

            <motion.h1
              variants={headingItem}
              className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl"
            >
              Built to run itself
            </motion.h1>

            <motion.p
              variants={headingItem}
              className="mt-5 max-w-sm text-base leading-7 text-gray-500"
            >
              Payments, messaging, proposals, trust  the pieces gig work
              actually needs, already wired together.
            </motion.p>
          </motion.div>

          {/* feature tiles */}
          {tiles.map((tile) => {
            const Icon = tile.icon;

            return (
              <motion.div
                key={tile.id}
                variants={tileVariant}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
                className={`relative flex flex-col justify-center rounded-3xl border p-6 transition-colors duration-300 md:p-7 ${tile.placement} ${
                  tile.featured
                    ? "border-orange-500/40 bg-gradient-to-br from-orange-500/[0.12] to-transparent"
                    : "border-white/10 bg-[#111111] hover:border-white/20"
                }`}
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border text-lg ${
                    tile.featured
                      ? "border-orange-500/50 bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                      : "border-orange-500/30 bg-orange-500/10 text-orange-400"
                  }`}
                >
                  <Icon />
                </div>

                <h2
                  className={`font-bold text-white ${
                    tile.featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
                  }`}
                >
                  {tile.title}
                </h2>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                  {tile.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* waitlist bar: horizontal split, not a centered stack */}
        <motion.div
          className="relative mt-6 overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.08] to-transparent p-8 md:p-12"
          variants={ctaContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <motion.div
                variants={ctaItem}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-sm text-orange-400"
              >
                🔥 100+ already on the list
              </motion.div>

              <motion.h1
                variants={ctaItem}
                className="mt-4 text-4xl font-black leading-[1.05] text-white md:text-5xl"
              >
                Get in before the{" "}
                <span className="text-orange-400">
                  <em>doors open</em>
                </span>
              </motion.h1>

              <motion.p
                variants={ctaItem}
                className="mt-4 max-w-md text-base leading-7 text-gray-500 md:text-lg"
              >
                Early access, first pick of gigs, and a verified badge 
                waiting for you the moment we go live.
              </motion.p>
            </div>

            <div>
              <motion.form
                variants={ctaItem}
                className="flex w-full flex-col gap-3 sm:flex-row"
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
                  className="h-12 shrink-0 rounded-xl bg-orange-500 px-6 font-semibold text-black transition-shadow duration-300 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Reserve my spot
                </motion.button>
              </motion.form>

              <motion.p
                variants={ctaItem}
                className="mt-3 text-sm text-gray-500"
              >
                One email. No spam, ever.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;