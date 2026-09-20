import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Fingerprint,
  X,
} from "lucide-react";

import Archivist from "../components/Archivist";
import CaseCard from "../components/CaseCard";

const cases = [
  {
    number: "01",
    title: "THE SUMMER EVERYTHING MOVED",
    subtitle:
      "Something changed. The receipts noticed before anyone else.",
    evidence: 7,
    color: "bg-coral",
    status: "open",
  },
  {
    number: "02",
    title: "THE IMPOSSIBLE DAY",
    subtitle:
      "One day left a trail unlike almost any other.",
    evidence: 3,
    color: "bg-blue",
    status: "open",
  },
  {
    number: "03",
    title: "THE REPEATING RITUAL",
    subtitle:
      "Random behavior becomes interesting when it repeats.",
    evidence: 4,
    color: "bg-purple",
    status: "open",
  },
];

function CaseArchive({ onBack, onSelectCase }) {
  const [selectedCase, setSelectedCase] = useState(null);

  function handleCaseOpen(caseItem) {
    setSelectedCase(caseItem);
  }

  function beginInvestigation() {
    if (!selectedCase) return;

    setSelectedCase(null);
    onSelectCase(selectedCase);
  }

  return (
    <main className="min-h-screen pb-20">

      {/* Header */}

      <header className="content-width flex items-center justify-between py-6">

        <button
          type="button"
          onClick={onBack}
          className="
            inline-flex
            min-h-11
            items-center
            gap-2
            rounded-xl
            border-2
            border-black
            bg-white
            px-4
            font-bold
            transition-transform
            hover:-translate-y-1
          "
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          <Fingerprint size={18} aria-hidden="true" />
          <span className="text-sm font-bold">
            ARCHIVE / CASE FILES
          </span>
        </div>

      </header>

      {/* Hero */}

      <section className="content-width pt-10 md:pt-16">

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

          <div>

            <motion.span
              className="stamp bg-yellow"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
            >
              THE ARCHIVE
            </motion.span>

            <motion.h1
              className="section-title mt-6 max-w-4xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              EVERY RECEIPT
              <br />
              HIDES A STORY.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Three investigations are waiting inside the
              archive. Each one begins with fragments and
              ends with a pattern.
            </motion.p>

          </div>

          {/* Archivist */}

          <Archivist message="Choose your case carefully..." />

        </div>

      </section>

      {/* Comic divider */}

      <section className="content-width py-12">

        <div className="flex items-center gap-4">

          <div className="h-4 w-4 rotate-45 border-2 border-black bg-[var(--color-coral)]" />

          <div className="h-0 flex-1 border-t-2 border-dashed border-black" />

          <BookOpen size={22} aria-hidden="true" />

          <div className="h-0 flex-1 border-t-2 border-dashed border-black" />

          <div className="h-4 w-4 rotate-45 border-2 border-black bg-[var(--color-blue)]" />

        </div>

      </section>

      {/* Case cards */}

      <section className="content-width">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cases.map((caseItem) => (
            <CaseCard
              key={caseItem.number}
              {...caseItem}
              onOpen={() => handleCaseOpen(caseItem)}
            />
          ))}

        </div>

      </section>

      {/* Bottom narrative */}

      <section className="content-width mt-16">

        <motion.div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border-2
            border-black
            bg-[var(--color-mint)]
            p-7
            shadow-[5px_5px_0_#171717]
            md:p-10
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-2 border-black bg-white/30" />

          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            FIELD NOTE
          </p>

          <p className="display-font mt-3 max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
            "Don't ask what happened yet."
          </p>

          <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
            First find what changed. Then find what connects.
            The story comes last.
          </p>

        </motion.div>

      </section>

      {/* Case confirmation modal */}

      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="selected-case-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedCase(null);
              }
            }}
          >

            <motion.div
              className="paper-card w-full max-w-lg overflow-hidden"
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.9,
                rotate: -2,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
            >

              <div
                className={`h-5 ${selectedCase.color}`}
              />

              <div className="p-7">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <span className="stamp">
                      CASE {selectedCase.number}
                    </span>

                    <h2
                      id="selected-case-title"
                      className="display-font mt-5 text-3xl font-bold leading-none"
                    >
                      {selectedCase.title}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCase(null)}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border-2
                      border-black
                      bg-white
                      transition-transform
                      hover:-translate-y-1
                    "
                    aria-label="Close case preview"
                  >
                    <X size={19} />
                  </button>

                </div>

                <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
                  {selectedCase.subtitle}
                </p>

                <div className="my-6 border-t-2 border-dashed border-black" />

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-soft)]">
                      Evidence waiting
                    </p>

                    <p className="display-font text-3xl font-bold">
                      {selectedCase.evidence}
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-black bg-[var(--color-yellow)] px-4 py-3 text-center">
                    <p className="text-xs font-bold uppercase">
                      Objective
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Find the pattern
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={beginInvestigation}
                  className="
                    mt-7
                    flex
                    min-h-14
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    border-2
                    border-black
                    bg-[var(--color-coral)]
                    px-5
                    font-bold
                    shadow-[4px_4px_0_#171717]
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-[6px_6px_0_#171717]
                  "
                >
                  START INVESTIGATION
                  <ArrowRight size={20} />
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </main>
  );
}

export default CaseArchive;