import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
  ShoppingBag,
  Activity,
  Network,
} from "lucide-react";

const icons = {
  ACTIVITY: Activity,
  SPENDING: ShoppingBag,
  NETWORK: Network,
  PLACES: MapPin,
  PURCHASES: ShoppingBag,
};

function ClueCard({ clue, examined, onExamine }) {
  const Icon = icons[clue.category] || Activity;

  return (
    <motion.article
      className="relative"
      style={{
        rotate: clue.rotate,
      }}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
        type: "spring",
        stiffness: 140,
      }}
      whileHover={{
        y: -7,
        rotate: 0,
      }}
    >

      {/* Colored paper behind card */}

      <div
        className={`absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border-2 border-black ${clue.color}`}
        aria-hidden="true"
      />

      {/* Main card */}

      <div className="relative rounded-2xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#171717]">

        {/* Top */}

        <div className="flex items-start justify-between gap-4">

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black ${clue.color}`}
          >
            <Icon size={21} aria-hidden="true" />
          </div>

          <span
            className={`rounded-full border-2 border-black px-3 py-1 text-[10px] font-black ${
              examined
                ? "bg-[var(--color-mint)]"
                : "bg-white"
            }`}
          >
            {examined ? "EXAMINED" : `CLUE ${String(clue.id).padStart(2, "0")}`}
          </span>

        </div>


        {/* Period */}

        <p className="mt-5 text-xs font-black tracking-[0.15em] text-[var(--color-text-muted)]">
          {clue.period}
        </p>


        {/* Title */}

        <h3 className="display-font mt-2 text-2xl font-bold">
          {clue.title}
        </h3>


        {/* Main value */}

        <div className="mt-5">

          <span className="display-font text-5xl font-black">
            {clue.value}
          </span>

          <span className="ml-2 text-sm font-bold text-[var(--color-text-muted)]">
            {clue.unit}
          </span>

        </div>


        {/* Description */}

        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {clue.description}
        </p>


        {/* Button */}

        <button
          type="button"
          onClick={() => onExamine(clue)}
          className="mt-6 flex min-h-11 w-full items-center justify-between rounded-xl border-2 border-black bg-[var(--color-yellow)] px-4 font-bold shadow-[3px_3px_0_#171717] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#171717]"
          aria-label={`Examine clue ${clue.id}: ${clue.title}`}
        >
          <span>
            {examined ? "EXAMINE AGAIN" : "EXAMINE CLUE"}
          </span>

          <ArrowRight
            size={18}
            aria-hidden="true"
          />
        </button>

      </div>

    </motion.article>
  );
}

export default ClueCard;