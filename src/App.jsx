import { useState } from "react";

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

import CaseArchive from "./pages/CaseArchive";
import Investigation from "./pages/Investigation";

function App() {
  const [screen, setScreen] = useState("intro");
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const fragments = [
    {
      label: "Songs",
      icon: Music,
      color: "#FF5A5F",
      rotate: "-rotate-3",
    },
    {
      label: "Places",
      icon: MapPin,
      color: "#3B82F6",
      rotate: "rotate-2",
    },
    {
      label: "Purchases",
      icon: ShoppingBag,
      color: "#FFC857",
      rotate: "-rotate-2",
    },
    {
      label: "Searches",
      icon: Search,
      color: "#7C5CFC",
      rotate: "rotate-3",
    },
    {
      label: "Messages",
      icon: MessageCircle,
      color: "#42D6A4",
      rotate: "-rotate-1",
    },
    {
      label: "Events",
      icon: CalendarDays,
      color: "#FF8A3D",
      rotate: "rotate-2",
    },
  ];

  const enterArchive = () => {
    setArchiveOpen(false);
    setScreen("archive");
  };

  const openInvestigation = (caseData) => {
    setSelectedCase(caseData);
    setScreen("investigation");
  };

  const backToArchive = () => {
    setSelectedCase(null);
    setScreen("archive");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* INTRO */}
      {screen === "intro" && (
        <section className="relative min-h-screen px-6 py-8 md:px-10 lg:px-16">

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FFC857]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#42D6A4]/20 blur-3xl" />

          {/* Top bar */}
          <nav className="relative z-10 flex items-center justify-between border-b-2 border-black pb-5">
            <div className="flex items-center gap-2">
              <Receipt size={22} strokeWidth={2.5} />
              <span className="display-font text-sm font-black tracking-wide">
                THE LAST RECEIPT
              </span>
            </div>

            <span className="hidden text-xs font-bold tracking-widest sm:block">
              ARCHIVE / 001
            </span>
          </nav>

          {/* Hero */}
          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">

            <div>
              <div className="mb-5 inline-flex rotate-[-2deg] rounded-full border-2 border-black bg-[#FFC857] px-4 py-2 text-xs font-black uppercase tracking-wider shadow-[4px_4px_0_#171717]">
                A digital life mystery
              </div>

              <h1 className="display-font max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[7.5rem]">
                THE
                <br />
                LAST
                <br />
                <span className="text-[#FF5A5F]">RECEIPT.</span>
              </h1>

              <p className="display-font mt-7 text-2xl font-black sm:text-3xl">
                Every life leaves a trail.
              </p>

              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[var(--color-text-muted)] sm:text-lg">
                Someone left behind thousands of tiny digital moments.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {fragments.map((fragment) => {
                  const Icon = fragment.icon;

                  return (
                    <div
                      key={fragment.label}
                      className={`flex items-center gap-2 rounded-xl border-2 border-black bg-white px-3 py-2 text-sm font-bold shadow-[3px_3px_0_#171717] ${fragment.rotate}`}
                    >
                      <Icon size={16} />
                      {fragment.label}
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 max-w-xl">
                <p className="text-lg font-bold">
                  Individually, they're meaningless.
                </p>

                <p className="mt-2 text-lg font-bold">
                  Together, they tell a story.
                </p>
              </div>

              <button
                onClick={() => setArchiveOpen(true)}
                className="mt-10 inline-flex items-center gap-3 rounded-xl border-2 border-black bg-black px-6 py-4 text-sm font-black text-white shadow-[5px_5px_0_#FF5A5F] transition-transform hover:-translate-y-1 active:translate-y-0"
              >
                OPEN THE ARCHIVE
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Receipt */}
            <div className="relative hidden justify-center lg:flex">

              <div className="relative w-[390px] rotate-[3deg]">

                <div className="absolute -inset-5 rounded-[2rem] bg-[#7C5CFC]/20 blur-2xl" />

                <div className="relative border-2 border-black bg-white p-7 shadow-[10px_10px_0_#171717]">

                  <div className="border-b-2 border-dashed border-black pb-5 text-center">
                    <p className="display-font text-2xl font-black">
                      DIGITAL LIFE
                    </p>

                    <p className="mt-1 text-xs font-bold">
                      RECEIPT #000001
                    </p>
                  </div>

                  <div className="space-y-5 py-6">

                    <div className="flex justify-between text-sm font-bold">
                      <span>Music</span>
                      <span>1,248</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span>Places</span>
                      <span>382</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span>Purchases</span>
                      <span>575</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span>Searches</span>
                      <span>2,184</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span>Messages</span>
                      <span>913</span>
                    </div>

                    <div className="flex justify-between text-sm font-bold">
                      <span>Events</span>
                      <span>72</span>
                    </div>

                  </div>

                  <div className="border-t-2 border-dashed border-black pt-5">

                    <div className="flex justify-between">
                      <span className="text-sm font-bold">
                        TOTAL MOMENTS
                      </span>

                      <span className="display-font text-xl font-black">
                        5,374
                      </span>
                    </div>

                    <div className="mt-5 rotate-[-2deg] text-center">
                      <span className="inline-block border-2 border-black bg-[#42D6A4] px-4 py-2 text-xs font-black">
                        SOMETHING HAPPENED HERE
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Archive popup */}
          {archiveOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
              onClick={() => setArchiveOpen(false)}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-md rounded-3xl border-2 border-black bg-[#FFF8EE] p-7 shadow-[8px_8px_0_#171717]"
              >
                <div className="mb-5 inline-block rotate-[-2deg] border-2 border-black bg-[#FFC857] px-3 py-2 text-xs font-black">
                  ARCHIVE ACCESS
                </div>

                <h2 className="display-font text-4xl font-black">
                  The evidence is waiting.
                </h2>

                <p className="mt-4 leading-7 text-[var(--color-text-muted)]">
                  Three cases have been reconstructed from a digital trail.
                  Your job is to figure out what the receipts actually say.
                </p>

                <button
                  onClick={enterArchive}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-black bg-black px-5 py-4 text-sm font-black text-white shadow-[4px_4px_0_#FF5A5F]"
                >
                  ENTER ARCHIVE
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ARCHIVE */}
      {screen === "archive" && (
        <CaseArchive onOpenCase={openInvestigation} />
      )}

      {/* INVESTIGATION */}
      {screen === "investigation" && selectedCase && (
        <Investigation
          caseData={selectedCase}
          onBack={backToArchive}
        />
      )}
    </main>
  );
}

export default App;