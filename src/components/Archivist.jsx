import { motion } from "motion/react";
import { Eye, Search } from "lucide-react";

function Archivist({ message = "Interesting..." }) {
  return (
    <motion.div
      className="relative w-full max-w-[260px]"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Speech bubble */}

      <motion.div
        key={message}
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        className="relative mb-4 rounded-2xl border-2 border-black bg-white p-4 shadow-[4px_4px_0_#171717]"
      >

        <div className="flex gap-2">

          <Search
            size={18}
            className="mt-1 shrink-0"
          />

          <p className="text-sm font-bold leading-relaxed">
            {message}
          </p>

        </div>

        {/* Speech bubble tail */}

        <div className="absolute -bottom-3 left-8 h-5 w-5 rotate-45 border-b-2 border-r-2 border-black bg-white" />

      </motion.div>


      {/* Character */}

      <motion.div
        className="mx-auto w-fit"
        animate={{
          y: [0, -4, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* Hair */}

        <div className="relative h-32 w-32 rounded-[45%] bg-[#7C5CFC]">

          {/* Face */}

          <div className="absolute left-3 top-6 h-28 w-26 rounded-[45%] border-2 border-black bg-[#FFD59A]">

            {/* Hair fringe */}

            <div className="absolute -top-5 left-1 h-10 w-20 rounded-full bg-[#7C5CFC]" />

            {/* Glasses */}

            <div className="absolute left-3 top-12 flex gap-1">

              <div className="h-7 w-7 rounded-lg border-2 border-black bg-white/60">
                <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-black" />
              </div>

              <div className="mt-2 h-0.5 w-3 bg-black" />

              <div className="h-7 w-7 rounded-lg border-2 border-black bg-white/60">
                <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-black" />
              </div>

            </div>

            {/* Nose */}

            <div className="absolute left-[50%] top-[72px] h-2 w-2 rounded-full bg-black/40" />

            {/* Mouth */}

            <div className="absolute left-[44%] top-[82px] h-2 w-5 rounded-full border-b-2 border-black" />

          </div>

        </div>

      </motion.div>


      <div className="mt-3 text-center">

        <p className="display-font font-black">
          THE ARCHIVIST
        </p>

        <p className="text-xs font-semibold text-[var(--color-text-muted)]">
          Keeper of the trail
        </p>

      </div>

    </motion.div>
  );
}

export default Archivist;