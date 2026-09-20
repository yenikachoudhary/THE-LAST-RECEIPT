import { motion } from "motion/react";
import {
  ArrowRight,
  Lock,
  Search,
  Sparkles,
} from "lucide-react";

function CaseCard({
  number,
  title,
  subtitle,
  evidence,
  color,
  status,
  onOpen,
}) {
  const locked = status === "locked";

  return (
    <motion.article
      className="relative"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={
        !locked
          ? {
              y: -7,
              rotate: -1,
            }
          : undefined
      }
    >
      {/* Comic shadow card */}

      <div
        className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[20px] border-2 border-black ${color}`}
        aria-hidden="true"
      />

      {/* Main card */}

      <div className="relative overflow-hidden rounded-[20px] border-2 border-black bg-white">

        {/* Color header */}

        <div className={`h-4 ${color}`} />

        <div className="p-6 md:p-7">

          {/* Case number + status */}

          <div className="flex items-center justify-between gap-4">

            <span className="stamp bg-white">
              CASE {number}
            </span>

            {locked ? (
              <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-text-soft)]">
                <Lock size={14} aria-hidden="true" />
                Locked
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} aria-hidden="true" />
                Open
              </span>
            )}

          </div>

          {/* Title */}

          <h2 className="display-font mt-7 text-3xl font-bold leading-[0.95] md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 min-h-[72px] text-base leading-relaxed text-[var(--color-text-muted)]">
            {subtitle}
          </p>

          {/* Evidence count */}

          <div className="mt-6 flex items-center gap-3 border-t-2 border-dashed border-black pt-5">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-[var(--color-background)]">
              <Search size={19} aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-soft)]">
                Evidence
              </p>

              <p className="font-bold">
                {evidence} fragments
              </p>
            </div>

          </div>

          {/* CTA */}

          <button
            type="button"
            disabled={locked}
            onClick={onOpen}
            className={`
              mt-6
              flex
              min-h-12
              w-full
              items-center
              justify-between
              rounded-xl
              border-2
              border-black
              px-4
              font-bold
              transition-all
              ${
                locked
                  ? "cursor-not-allowed bg-gray-100 text-gray-400"
                  : "bg-[var(--color-coral)] hover:-translate-y-1 hover:shadow-[3px_3px_0_#171717]"
              }
            `}
          >
            <span>
              {locked ? "CASE LOCKED" : "INVESTIGATE"}
            </span>

            {locked ? (
              <Lock size={18} aria-hidden="true" />
            ) : (
              <ArrowRight size={19} aria-hidden="true" />
            )}
          </button>

        </div>
      </div>
    </motion.article>
  );
}

export default CaseCard;