import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Search, Sparkles } from "lucide-react";

import Archivist from "../components/Archivist";
import ClueCard from "../components/ClueCard";
import ProgressBar from "../components/ProgressBar";
import EvidenceBoard from "../components/EvidenceBoard";
import Reveal from "./Reveal";

import clues from "../data/clues";

function Investigation({ caseData, onBack }) {
    const [examinedClues, setExaminedClues] = useState([]);
    const [selectedClue, setSelectedClue] = useState(null);
    const [showBoard, setShowBoard] = useState(false);
    const [showReveal, setShowReveal] = useState(false);

    const caseClues = clues.filter(
        (clue) => clue.caseId === 1
    );

    const examineClue = (clue) => {
        setSelectedClue(clue);

        if (!examinedClues.includes(clue.id)) {
            setExaminedClues((previous) => [
                ...previous,
                clue.id,
            ]);
        }
    };

    const allExamined =
        examinedClues.length === caseClues.length;

    return (
        <main className="min-h-screen overflow-hidden pb-20">

            {/* TOP BAR */}
            <header className="content-width flex items-center justify-between py-6">

                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[3px_3px_0_#171717] transition-all hover:-translate-y-1"
                >
                    <ArrowLeft size={18} />
                    ARCHIVE
                </button>

                <span className="stamp bg-[var(--color-yellow)]">
                    CASE 01 / INVESTIGATION
                </span>

            </header>


            {/* INTRODUCTION */}
            <section className="content-width pt-8">

                <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

                    <div>

                        <motion.span
                            className="stamp bg-[var(--color-coral)]"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            CASE 01
                        </motion.span>

                        <motion.h1
                            className="display-title mt-6 max-w-5xl"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            THE SUMMER
                            <br />
                            EVERYTHING MOVED
                        </motion.h1>

                        <motion.p
                            className="display-font mt-6 max-w-2xl text-xl font-semibold md:text-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Something changed during the summer of 2023.
                        </motion.p>

                        <motion.p
                            className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                        >
                            Your job is to find the clues that prove the
                            trail changed. Don't guess the story yet.
                            Start with the evidence.
                        </motion.p>

                    </div>

                    {/* ARCHIVIST */}
                    <Archivist
                        message={
                            examinedClues.length === 0
                                ? "Look closely. The numbers are trying to tell you something."
                                : examinedClues.length < 3
                                    ? "Interesting... keep looking."
                                    : examinedClues.length < 7
                                        ? "You're starting to see the trail."
                                        : "You've examined everything. Now look for connections."
                        }
                    />

                </div>

            </section>


            {/* INVESTIGATION HEADER */}
            <section className="content-width mt-14">

                <div className="paper-card flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">

                    <div>

                        <div className="flex items-center gap-2">

                            <Search
                                size={20}
                                aria-hidden="true"
                            />

                            <h2 className="display-font text-2xl font-bold">
                                THE EVIDENCE TABLE
                            </h2>

                        </div>

                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                            Examine each fragment before deciding what it means.
                        </p>

                    </div>

                    <ProgressBar
                        current={examinedClues.length}
                        total={caseClues.length}
                    />

                </div>

            </section>


            {/* CLUE GRID */}
            <section
                className="content-width mt-10"
                aria-label="Case evidence"
            >

                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {caseClues.map((clue) => (

                        <ClueCard
                            key={clue.id}
                            clue={clue}
                            examined={examinedClues.includes(clue.id)}
                            onExamine={examineClue}
                        />

                    ))}

                </div>

            </section>


            {/* ALL CLUES EXAMINED */}
            <AnimatePresence>

                {allExamined && !showBoard && (

                    <motion.section
                        className="content-width mt-14"
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                    >

                        <div className="rounded-2xl border-2 border-black bg-[var(--color-mint)] p-7 shadow-[6px_6px_0_#171717]">

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-white">
                                    <Sparkles size={22} />
                                </div>

                                <div>

                                    <p className="text-xs font-black tracking-[0.15em]">
                                        ALL CLUES EXAMINED
                                    </p>

                                    <h2 className="display-font mt-1 text-3xl font-black">
                                        You found the evidence.
                                    </h2>

                                    <p className="mt-2 max-w-2xl leading-relaxed">
                                        But evidence alone isn't the story.
                                        Some of these clues belong together.
                                        The next step is discovering which ones.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setShowBoard(true)}
                                        className="mt-6 rounded-xl border-2 border-black bg-white px-6 py-3 font-black shadow-[4px_4px_0_#171717] transition-all hover:-translate-y-1"
                                    >
                                        OPEN THE EVIDENCE BOARD →
                                    </button>

                                </div>

                            </div>

                        </div>

                    </motion.section>

                )}

            </AnimatePresence>


            {/* EVIDENCE BOARD */}
            {showBoard && !showReveal && (
                <section className="content-width mt-14">

                    <EvidenceBoard
                        onComplete={() => setShowReveal(true)}
                    />

                </section>
            )}

            {showReveal && (
                <Reveal
                    onBack={() => setShowReveal(false)}
                    onNextCase={() => {
                        alert("Case 02 coming next!");
                    }}
                />
            )}


            {/* CLUE QUICK VIEW */}
            <AnimatePresence>

                {selectedClue && (

                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedClue(null)}
                    >

                        <motion.div
                            className="paper-card w-full max-w-lg p-7"
                            initial={{
                                opacity: 0,
                                scale: 0.85,
                                rotate: -2,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            onClick={(event) => event.stopPropagation()}
                        >

                            <span className="stamp bg-[var(--color-yellow)]">
                                CLUE {String(selectedClue.id).padStart(2, "0")}
                            </span>

                            <p className="mt-5 text-xs font-black tracking-[0.15em] text-[var(--color-text-muted)]">
                                {selectedClue.period}
                            </p>

                            <h2 className="display-font mt-2 text-3xl font-black">
                                {selectedClue.title}
                            </h2>

                            <div className="mt-6 rounded-xl border-2 border-black bg-white p-5">

                                <span className="display-font text-5xl font-black">
                                    {selectedClue.value}
                                </span>

                                <span className="ml-2 font-bold text-[var(--color-text-muted)]">
                                    {selectedClue.unit}
                                </span>

                            </div>

                            <p className="mt-5 leading-relaxed text-[var(--color-text-muted)]">
                                {selectedClue.observation}
                            </p>

                            <div className="mt-6 rounded-xl border-2 border-dashed border-black p-4">

                                <p className="text-xs font-black tracking-widest">
                                    WHAT THIS TELLS US
                                </p>

                                <p className="mt-2 text-sm leading-relaxed">
                                    {selectedClue.meaning}
                                </p>

                            </div>

                            <div className="mt-4 rounded-xl border-2 border-black bg-[var(--color-yellow)] p-4">

                                <p className="text-xs font-black tracking-widest">
                                    CAREFUL — THIS DOES NOT PROVE
                                </p>

                                <p className="mt-2 text-sm leading-relaxed">
                                    {selectedClue.doesNotProve}
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedClue(null)}
                                className="mt-6 w-full rounded-xl border-2 border-black bg-[var(--color-coral)] px-5 py-3 font-bold shadow-[3px_3px_0_#171717] transition-all hover:-translate-y-1"
                            >
                                BACK TO EVIDENCE
                            </button>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </main>
    );
}

export default Investigation;