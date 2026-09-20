import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Music,
  MapPin,
  ShoppingBag,
  Search,
  MessageCircle,
  CalendarDays,
  Receipt,
} from "lucide-react";

import AppShell from "./components/AppShell";
import CaseArchive from "./pages/CaseArchive";
import Investigation from "./pages/Investigation";

const fragments = [
  {
    label: "Songs",
    icon: Music,
    color: "bg-purple",
    rotate: "-3deg",
  },
  {
    label: "Places",
    icon: MapPin,
    color: "bg-mint",
    rotate: "4deg",
  },
  {
    label: "Purchases",
    icon: ShoppingBag,
    color: "bg-yellow",
    rotate: "-2deg",
  },
  {
    label: "Searches",
    icon: Search,
    color: "bg-blue",
    rotate: "3deg",
  },
  {
    label: "Messages",
    icon: MessageCircle,
    color: "bg-coral",
    rotate: "-4deg",
  },
  {
    label: "Events",
    icon: CalendarDays,
    color: "bg-orange",
    rotate: "2deg",
  },
];

function App() {
  const [screen, setScreen] = useState("intro");
  const [started, setStarted] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  // First button on homepage
  const openArchivePopup = () => {
    setStarted(true);
  };

  // IMPORTANT:
  // This is what actually moves from popup -> Case Archive
  const enterArchive = () => {
    setStarted(false);
    setScreen("archive");
  };

  // Case card -> investigation
  const openInvestigation = (caseData) => {
    setSelectedCase(caseData);
    setScreen("investigation");
  };

  // Return to homepage
  const returnToIntro = () => {
    setScreen("intro");
    setSelectedCase(null);
  };

  return (
    <AppShell>

      {/* =====================================================
          INTRO PAGE
      ===================================================== */}

      {screen === "intro" && (
        <main className="min-h-screen overflow-hidden">

          {/* TOP BAR */}

          <header className="content-width flex items-center justify-between py-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white shadow-[3px_3px_0_#171717]">
                <Receipt size={20} aria-hidden="true" />
              </div>

              <span className="display-font font-bold tracking-tight">
                THE LAST RECEIPT
              </span>

            </div>

            <span className="hidden text-sm font-semibold text-[var(--color-text-muted)] sm:block">
              ARCHIVE / 001
            </span>

          </header>


          {/* HERO */}

          <section className="content-width relative flex min-h-[calc(100vh-88px)] items-center py-16">

            {/* Decorative circles */}

            <motion.div
              className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[var(--color-yellow)] opacity-50 blur-2xl"
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />

            <motion.div
              className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[var(--color-mint)] opacity-40 blur-3xl"
              animate={{
                x: [0, -15, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

              {/* LEFT SIDE */}

              <div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="stamp bg-coral">
                    CASE FILE 001
                  </span>
                </motion.div>


                <motion.h1
                  className="display-title mt-7 max-w-4xl"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                >
                  THE LAST
                  <br />
                  RECEIPT
                </motion.h1>


                <motion.p
                  className="display-font mt-7 text-2xl font-semibold md:text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                  }}
                >
                  Every life leaves a trail.
                </motion.p>


                <motion.p
                  className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55,
                  }}
                >
                  Someone left behind thousands of tiny digital
                  moments.
                </motion.p>


                {/* EVIDENCE FRAGMENTS */}

                <div
                  className="mt-10 flex max-w-2xl flex-wrap gap-3"
                  aria-label="Examples of digital life receipts"
                >

                  {fragments.map((fragment, index) => {

                    const Icon = fragment.icon;

                    return (
                      <motion.div
                        key={fragment.label}
                        className={`flex items-center gap-2 rounded-xl border-2 border-black px-4 py-3 font-bold shadow-[3px_3px_0_#171717] ${fragment.color}`}
                        style={{
                          rotate: fragment.rotate,
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + index * 0.1,
                          type: "spring",
                          stiffness: 180,
                        }}
                        whileHover={{
                          y: -5,
                          rotate: 0,
                        }}
                      >
                        <Icon size={17} aria-hidden="true" />
                        {fragment.label}
                      </motion.div>
                    );

                  })}

                </div>


                {/* STORY */}

                <motion.div
                  className="mt-12 max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.5,
                  }}
                >
                  <p className="text-lg font-semibold">
                    Individually, they're meaningless.
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    Together, they tell a story.
                  </p>
                </motion.div>


                {/* OPEN ARCHIVE */}

                <motion.button
                  type="button"
                  onClick={openArchivePopup}
                  className="
                    mt-9
                    inline-flex
                    min-h-14
                    items-center
                    gap-3
                    rounded-xl
                    border-2
                    border-black
                    bg-[var(--color-coral)]
                    px-7
                    text-base
                    font-bold
                    shadow-[5px_5px_0_#171717]
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-[7px_7px_0_#171717]
                    active:translate-x-[3px]
                    active:translate-y-[3px]
                    active:shadow-[2px_2px_0_#171717]
                  "
                >
                  OPEN THE ARCHIVE

                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />

                </motion.button>

              </div>


              {/* =================================================
                  RIGHT SIDE — CUTE RECEIPT
              ================================================= */}

              <motion.div
                className="relative hidden lg:block"
                initial={{
                  opacity: 0,
                  x: 60,
                  rotate: 5,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 3,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 80,
                }}
              >

                <div className="relative mx-auto w-full max-w-[400px]">

                  {/* BACK BLUE RECEIPT */}

                  <div
                    className="absolute inset-0 translate-x-5 translate-y-5 rotate-6 rounded-2xl border-2 border-black bg-[var(--color-blue)]"
                    aria-hidden="true"
                  />

                  {/* BACK YELLOW RECEIPT */}

                  <div
                    className="absolute inset-0 -translate-x-4 translate-y-3 -rotate-3 rounded-2xl border-2 border-black bg-[var(--color-yellow)]"
                    aria-hidden="true"
                  />


                  {/* MAIN RECEIPT */}

                  <div className="relative rounded-2xl border-2 border-black bg-white p-7 shadow-[8px_8px_0_#171717]">

                    {/* RECEIPT HEADER */}

                    <div className="flex items-center justify-between border-b-2 border-dashed border-black pb-5">

                      <div>

                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                          Digital Life
                        </p>

                        <p className="display-font mt-1 text-2xl font-bold">
                          RECEIPT
                        </p>

                      </div>

                      <Receipt
                        size={32}
                        aria-hidden="true"
                      />

                    </div>


                    {/* RECEIPT CONTENT */}

                    <div className="py-6">

                      <ReceiptRow
                        label="MUSIC"
                        value="∞"
                      />

                      <ReceiptRow
                        label="PLACES"
                        value="247"
                      />

                      <ReceiptRow
                        label="PURCHASES"
                        value="1,689"
                      />

                      <ReceiptRow
                        label="SEARCHES"
                        value="4,281"
                      />

                      <ReceiptRow
                        label="MESSAGES"
                        value="9,421"
                      />

                    </div>


                    {/* TOTAL */}

                    <div className="border-t-2 border-dashed border-black pt-5">

                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                        Total evidence
                      </p>

                      <p className="display-font mt-2 text-5xl font-bold">
                        10,000+
                      </p>

                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        tiny moments left behind
                      </p>

                    </div>


                    {/* RECEIPT FOOTER */}

                    <div className="mt-7 flex justify-between text-xs font-semibold">

                      <span>
                        THE LAST RECEIPT
                      </span>

                      <span>
                        001
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </section>


          {/* =====================================================
              ARCHIVE POPUP
          ===================================================== */}

          <AnimatePresence>

            {started && (

              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="archive-ready-title"
              >

                <motion.div
                  className="paper-card w-full max-w-md p-7"
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    y: 30,
                    rotate: -3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                >

                  <span className="stamp bg-mint">
                    ARCHIVE FOUND
                  </span>


                  <h2
                    id="archive-ready-title"
                    className="display-font mt-5 text-3xl font-bold"
                  >
                    The evidence is waiting.
                  </h2>


                  <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                    The archive contains several cases.
                    Somewhere inside the fragments, patterns
                    are waiting to be connected.
                  </p>


                  {/* THIS BUTTON NOW OPENS CASE ARCHIVE */}

                  <button
                    type="button"
                    onClick={enterArchive}
                    className="
                      mt-7
                      inline-flex
                      min-h-11
                      items-center
                      gap-2
                      rounded-xl
                      border-2
                      border-black
                      bg-[var(--color-yellow)]
                      px-5
                      font-bold
                      shadow-[3px_3px_0_#171717]
                      transition-all
                      hover:-translate-y-1
                      hover:shadow-[5px_5px_0_#171717]
                    "
                  >
                    ENTER ARCHIVE

                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                    />

                  </button>

                </motion.div>

              </motion.div>

            )}

          </AnimatePresence>

        </main>
      )}


      {/* =====================================================
          CASE ARCHIVE
      ===================================================== */}

      {screen === "archive" && (

        <CaseArchive
          onBack={returnToIntro}
          onSelectCase={openInvestigation}
        />

      )}
      {screen === "investigation" && (
        <Investigation
          caseData={selectedCase}
          onBack={() => {
            setScreen("archive");
            setSelectedCase(null);
          }}
        />
      )}
     

    </AppShell>
  );
}


/* ============================================================
   RECEIPT ROW
============================================================ */

function ReceiptRow({ label, value }) {

  return (

    <div className="flex items-center justify-between border-b border-dashed border-black/30 py-3 last:border-0">

      <span className="text-sm font-semibold">
        {label}
      </span>

      <span className="display-font font-bold">
        {value}
      </span>

    </div>

  );

}


export default App;