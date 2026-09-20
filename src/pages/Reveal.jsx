import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  HelpCircle,
  Sparkles,
} from "lucide-react";

function Reveal({ onBack, onNextCase }) {
  return (
    <section className="min-h-screen px-5 py-8 md:px-10">

      <div className="mx-auto max-w-6xl">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b-2 border-black pb-5">

          <button
            onClick={onBack}
            className="text-sm font-black"
          >
            ← BACK TO INVESTIGATION
          </button>

          <div className="rounded-full border-2 border-black bg-[#42D6A4] px-4 py-2 text-xs font-black">
            CASE 01 / SOLVED
          </div>

        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 text-center"
        >

          <div className="mx-auto mb-6 flex w-fit rotate-[-2deg] items-center gap-2 border-2 border-black bg-[#FFC857] px-4 py-2 text-xs font-black shadow-[4px_4px_0_#171717]">
            <Sparkles size={15} />
            INVESTIGATION COMPLETE
          </div>

          <h1 className="display-font text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            YOU FOUND
            <br />
            <span className="text-[#FF5A5F]">THE SHIFT.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-8 text-[var(--color-text-muted)]">
            The receipts didn't tell you why something changed.
            They showed you where the trail changed.
          </p>

        </motion.div>

        {/* Timeline reconstruction */}
        <div className="relative">

          <div className="absolute left-6 top-0 hidden h-full w-1 bg-black md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8">

            {/* May */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >

              <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#171717]">

                <p className="text-xs font-black uppercase tracking-widest">
                  MAY 2023
                </p>

                <h2 className="display-font mt-2 text-3xl font-black">
                  A quiet beginning.
                </h2>

                <p className="mt-5 text-5xl font-black">
                  382
                </p>

                <p className="mt-1 font-bold">
                  transactions
                </p>

                <p className="mt-4 text-sm font-semibold leading-6 text-[var(--color-text-muted)]">
                  This becomes our baseline for the investigation.
                </p>

              </div>

              <div className="hidden md:block" />
            </motion.div>

            {/* June */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >

              <div className="hidden md:block" />

              <div className="rounded-3xl border-2 border-black bg-[#FF8A3D] p-6 shadow-[6px_6px_0_#171717]">

                <p className="text-xs font-black uppercase tracking-widest">
                  JUNE 2023
                </p>

                <h2 className="display-font mt-2 text-3xl font-black">
                  Something spiked.
                </h2>

                <p className="mt-5 text-5xl font-black">
                  575
                </p>

                <p className="font-bold">
                  transactions
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-xl border-2 border-black bg-white p-4">
                    <p className="text-xs font-black">
                      TOTAL AMOUNT
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      2.85M
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-black bg-white p-4">
                    <p className="text-xs font-black">
                      ACTIVE ENTITIES
                    </p>
                    <p className="mt-1 text-2xl font-black">
                      72
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* July */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >

              <div className="rounded-3xl border-2 border-black bg-[#FFC857] p-6 shadow-[6px_6px_0_#171717]">

                <p className="text-xs font-black uppercase tracking-widest">
                  JULY 2023
                </p>

                <h2 className="display-font mt-2 text-3xl font-black">
                  The surge faded.
                </h2>

                <p className="mt-5 text-5xl font-black">
                  418
                </p>

                <p className="font-bold">
                  transactions
                </p>

                <p className="mt-4 text-sm font-semibold leading-6">
                  The June increase did not continue into July.
                </p>

              </div>

              <div className="hidden md:block" />
            </motion.div>

            {/* August */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >

              <div className="hidden md:block" />

              <div className="rounded-3xl border-2 border-black bg-[#42D6A4] p-6 shadow-[6px_6px_0_#171717]">

                <p className="text-xs font-black uppercase tracking-widest">
                  AUGUST 2023
                </p>

                <h2 className="display-font mt-2 text-3xl font-black">
                  The shape changed.
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-xl border-2 border-black bg-white p-4">
                    <p className="text-xs font-black">
                      TRAVEL SHARE
                    </p>
                    <p className="mt-1 text-3xl font-black">
                      35.1%
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-black bg-white p-4">
                    <p className="text-xs font-black">
                      ONLINE SHOPPING
                    </p>
                    <p className="mt-1 text-3xl font-black">
                      17.0%
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* What we know */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >

          <div className="rounded-3xl border-2 border-black bg-white p-7 shadow-[6px_6px_0_#171717]">

            <div className="flex items-center gap-3">
              <div className="rounded-full border-2 border-black bg-[#42D6A4] p-2">
                <Check size={18} strokeWidth={3} />
              </div>

              <h2 className="display-font text-3xl font-black">
                WHAT WE KNOW
              </h2>
            </div>

            <ul className="mt-6 space-y-4">

              <li className="flex gap-3 font-semibold">
                <span>•</span>
                Activity increased sharply in June.
              </li>

              <li className="flex gap-3 font-semibold">
                <span>•</span>
                Spending increased alongside that activity.
              </li>

              <li className="flex gap-3 font-semibold">
                <span>•</span>
                The activity increase did not continue into July.
              </li>

              <li className="flex gap-3 font-semibold">
                <span>•</span>
                August showed a different activity composition.
              </li>

            </ul>

          </div>

          <div className="rounded-3xl border-2 border-black bg-[#FFF8EE] p-7 shadow-[6px_6px_0_#171717]">

            <div className="flex items-center gap-3">

              <div className="rounded-full border-2 border-black bg-[#FFC857] p-2">
                <HelpCircle size={18} strokeWidth={3} />
              </div>

              <h2 className="display-font text-3xl font-black">
                WHAT WE DON'T KNOW
              </h2>

            </div>

            <p className="mt-6 text-lg font-bold leading-8">
              We don't know why the change happened.
            </p>

            <p className="mt-4 text-sm font-semibold leading-7 text-[var(--color-text-muted)]">
              The receipts show a pattern. They don't give us permission
              to invent the reason behind it.
            </p>

          </div>

        </motion.div>

        {/* Final line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 text-center"
        >

          <p className="display-font mx-auto max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            “A digital life isn't a story until someone connects the dots.”
          </p>

          <button
            onClick={onNextCase}
            className="mt-10 inline-flex items-center gap-3 rounded-xl border-2 border-black bg-black px-7 py-4 text-sm font-black text-white shadow-[5px_5px_0_#FF5A5F] transition-transform hover:-translate-y-1"
          >
            OPEN NEXT CASE
            <ArrowRight size={18} />
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Reveal;