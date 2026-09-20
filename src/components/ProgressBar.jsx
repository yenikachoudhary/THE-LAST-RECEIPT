import { motion } from "motion/react";

function ProgressBar({ current, total }) {
  const percentage = total === 0 ? 0 : (current / total) * 100;

  return (
    <div className="w-full max-w-md">

      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span>EVIDENCE EXAMINED</span>

        <span>
          {current} / {total}
        </span>
      </div>

      <div
        className="h-4 overflow-hidden rounded-full border-2 border-black bg-white shadow-[3px_3px_0_#171717]"
        aria-label={`${current} of ${total} clues examined`}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax={total}
        aria-valuenow={current}
      >
        <motion.div
          className="h-full bg-[var(--color-coral)]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      </div>

    </div>
  );
}

export default ProgressBar;