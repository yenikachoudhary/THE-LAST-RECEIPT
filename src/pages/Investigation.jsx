import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ArrowLeft,
    Search,
    Check,
    X,
    Sparkles,
} from "lucide-react";

import Archivist from "../components/Archivist";
import EvidenceBoard from "../components/EvidenceBoard";
import Reveal from "./Reveal";
import clues from "../data/clues";

function Investigation({ caseData, onBack }) {

    const caseId = caseData?.id || 1;

    const caseClues = clues.filter(
        (clue) => clue.caseId === caseId
    );

    const [selected, setSelected] = useState([]);
    const [solved, setSolved] = useState(false);
    const [showBoard, setShowBoard] = useState(false);
    const [showReveal, setShowReveal] = useState(false);

    const toggleClue = (id) => {
        if (solved) return;

        setSelected((previous) => {
            if (previous.includes(id)) {
                return previous.filter((item) => item !== id);
            }

            if (previous.length >= 2) {
                return [previous[1], id];
            }

            return [...previous, id];
        });
    };


    // ============================================
    // CASE 02
    // ============================================

    const solveCaseTwo = () => {

        const correct =
            selected.includes(201) &&
            selected.includes(202);

        if (correct) {
            setSolved(true);
        }
    };


    // ============================================
    // CASE 03
    // ============================================

    const solveCaseThree = () => {

        const correct =
            selected.length === 4 &&
            [301, 302, 303, 304].every((id) =>
                selected.includes(id)
            );

        if (correct) {
            setSolved(true);
        }
    };


    // ============================================
    // CASE 01
    // ============================================

    if (caseId === 1) {

        return (
            <main className="min-h-screen pb-20">

                <header className="content-width flex items-center justify-between py-6">

                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[3px_3px_0_#171717]"
                    >
                        <ArrowLeft size={18} />
                        ARCHIVE
                    </button>

                    <span className="stamp bg-[var(--color-yellow)]">
                        CASE 01
                    </span>

                </header>

                {!showBoard && !showReveal && (

                    <>

                        <section className="content-width pt-10">

                            <div className="grid gap-10 lg:grid-cols-[1fr_auto]">

                                <div>

                                    <span className="stamp bg-[var(--color-coral)]">
                                        CASE 01 / INVESTIGATION
                                    </span>

                                    <h1 className="display-title mt-6">
                                        THE SUMMER
                                        <br />
                                        EVERYTHING MOVED
                                    </h1>

                                    <p className="mt-5 max-w-2xl text-xl font-bold">
                                        Something changed during the summer of 2023.
                                    </p>

                                    <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
                                        Examine the evidence first.
                                        Then determine what actually changed.
                                    </p>

                                </div>

                                <Archivist message="Look closely. The numbers are trying to tell you something." />

                            </div>

                        </section>


                        <section className="content-width mt-12">

                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                                {caseClues.map((clue) => (

                                    <button
                                        key={clue.id}
                                        onClick={() => toggleClue(clue.id)}
                                        className={`rounded-2xl border-2 border-black p-6 text-left shadow-[4px_4px_0_#171717] ${
                                            selected.includes(clue.id)
                                                ? "bg-[var(--color-yellow)]"
                                                : "bg-white"
                                        }`}
                                    >

                                        <p className="text-xs font-black">
                                            {clue.period}
                                        </p>

                                        <h2 className="display-font mt-2 text-2xl font-black">
                                            {clue.title}
                                        </h2>

                                        <p className="mt-4">
                                            <span className="display-font text-4xl font-black">
                                                {clue.value}
                                            </span>
                                            <span className="ml-2 text-sm font-bold">
                                                {clue.unit}
                                            </span>
                                        </p>

                                    </button>

                                ))}

                            </div>

                            {selected.length === 2 && (

                                <div className="mt-8 text-center">

                                    <button
                                        onClick={() => setShowBoard(true)}
                                        className="rounded-xl border-2 border-black bg-[var(--color-coral)] px-7 py-3 font-black shadow-[4px_4px_0_#171717]"
                                    >
                                        INVESTIGATE THE CONNECTION →
                                    </button>

                                </div>

                            )}

                        </section>

                    </>

                )}


                {showBoard && !showReveal && (

                    <section className="content-width mt-10">

                        <EvidenceBoard
                            onComplete={() => setShowReveal(true)}
                        />

                    </section>

                )}


                {showReveal && (

                    <Reveal
                        onBack={() => setShowReveal(false)}
                        onNextCase={() => {}}
                    />

                )}

            </main>
        );
    }


    // ============================================
    // CASE 02
    // ============================================

    if (caseId === 2) {

        return (
            <main className="min-h-screen pb-20">

                <header className="content-width flex items-center justify-between py-6">

                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[3px_3px_0_#171717]"
                    >
                        <ArrowLeft size={18} />
                        ARCHIVE
                    </button>

                    <span className="stamp bg-[var(--color-coral)]">
                        CASE 02 / OUTLIER
                    </span>

                </header>


                <section className="content-width pt-10">

                    <span className="stamp bg-[var(--color-yellow)]">
                        CASE 02
                    </span>

                    <h1 className="display-title mt-6">
                        THE IMPOSSIBLE
                        <br />
                        DAY
                    </h1>

                    <p className="mt-5 max-w-2xl text-xl font-bold">
                        March 9, 2024 doesn't look like an ordinary day.
                    </p>

                    <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
                        Find the evidence that proves this day is an outlier.
                    </p>

                </section>


                <section className="content-width mt-12">

                    <div className="grid gap-6 md:grid-cols-2">

                        {caseClues.map((clue) => (

                            <button
                                key={clue.id}
                                onClick={() => toggleClue(clue.id)}
                                className={`rounded-3xl border-2 border-black p-7 text-left shadow-[5px_5px_0_#171717] ${
                                    selected.includes(clue.id)
                                        ? "bg-[var(--color-yellow)]"
                                        : "bg-white"
                                }`}
                            >

                                <p className="text-xs font-black tracking-widest">
                                    {clue.period}
                                </p>

                                <h2 className="display-font mt-3 text-3xl font-black">
                                    {clue.title}
                                </h2>

                                <div className="mt-6">

                                    <span className="display-font text-6xl font-black">
                                        {clue.value}
                                    </span>

                                    <span className="ml-2 font-bold">
                                        {clue.unit}
                                    </span>

                                </div>

                                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                                    {clue.observation}
                                </p>

                            </button>

                        ))}

                    </div>


                    {!solved && selected.length === 2 && (

                        <div className="mt-8 text-center">

                            <button
                                onClick={solveCaseTwo}
                                className="rounded-xl border-2 border-black bg-[var(--color-coral)] px-8 py-4 font-black shadow-[4px_4px_0_#171717]"
                            >
                                PROVE THE OUTLIER →
                            </button>

                        </div>

                    )}


                    {solved && (

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-10 rounded-3xl border-2 border-black bg-[var(--color-mint)] p-8 shadow-[6px_6px_0_#171717]"
                        >

                            <Sparkles size={30} />

                            <h2 className="display-font mt-4 text-4xl font-black">
                                YOU FOUND THE IMPOSSIBLE DAY.
                            </h2>

                            <p className="mt-4 max-w-2xl text-lg leading-relaxed">
                                March 9 recorded 61 transactions and
                                200,268 in total amount. Both signals
                                make the day stand out against the normal rhythm.
                            </p>

                            <p className="mt-4 font-bold">
                                We know it was unusual. We don't know why.
                            </p>

                        </motion.div>

                    )}

                </section>

            </main>
        );
    }


    // ============================================
    // CASE 03
    // ============================================

    return (
        <main className="min-h-screen pb-20">

            <header className="content-width flex items-center justify-between py-6">

                <button
                    onClick={onBack}
                    className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[3px_3px_0_#171717]"
                >
                    <ArrowLeft size={18} />
                    ARCHIVE
                </button>

                <span className="stamp bg-[var(--color-purple)] text-white">
                    CASE 03 / PATTERN
                </span>

            </header>


            <section className="content-width pt-10">

                <span className="stamp bg-[var(--color-mint)]">
                    CASE 03
                </span>

                <h1 className="display-title mt-6">
                    THE REPEATING
                    <br />
                    RITUAL
                </h1>

                <p className="mt-5 max-w-2xl text-xl font-bold">
                    Random behavior becomes interesting when it repeats.
                </p>

                <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
                    Find the categories that repeatedly appear in
                    three consecutive positions.
                </p>

            </section>


            <section className="content-width mt-12">

                <div className="grid gap-6 md:grid-cols-2">

                    {caseClues.map((clue) => (

                        <button
                            key={clue.id}
                            onClick={() => toggleClue(clue.id)}
                            className={`rounded-3xl border-2 border-black p-7 text-left shadow-[5px_5px_0_#171717] ${
                                selected.includes(clue.id)
                                    ? "bg-[var(--color-yellow)]"
                                    : "bg-white"
                            }`}
                        >

                            <p className="text-xs font-black tracking-widest">
                                {clue.period}
                            </p>

                            <h2 className="display-font mt-3 text-3xl font-black">
                                {clue.title}
                            </h2>

                            <div className="mt-5">

                                <span className="display-font text-5xl font-black">
                                    {clue.value}
                                </span>

                            </div>

                            <div className="mt-5 flex gap-2">

                                <span className="rounded-lg border-2 border-black bg-white px-3 py-2 font-black">
                                    {clue.category}
                                </span>

                                <span className="rounded-lg border-2 border-black bg-[var(--color-coral)] px-3 py-2 font-black">
                                    ×3
                                </span>

                            </div>

                        </button>

                    ))}

                </div>


                {!solved && selected.length === 4 && (

                    <div className="mt-8 text-center">

                        <button
                            onClick={solveCaseThree}
                            className="rounded-xl border-2 border-black bg-[var(--color-coral)] px-8 py-4 font-black shadow-[4px_4px_0_#171717]"
                        >
                            FIND THE PATTERN →
                        </button>

                    </div>

                )}


                {solved && (

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-10 rounded-3xl border-2 border-black bg-[var(--color-mint)] p-8 shadow-[6px_6px_0_#171717]"
                    >

                        <Sparkles size={30} />

                        <h2 className="display-font mt-4 text-4xl font-black">
                            PATTERN FOUND.
                        </h2>

                        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
                            Online shopping, travel, entertainment,
                            and fitness / medical activity all form
                            repeated three-step sequences.
                        </p>

                        <p className="mt-4 font-bold">
                            The interesting part isn't one category.
                            It's the repetition itself.
                        </p>

                    </motion.div>

                )}

            </section>

        </main>
    );
}

export default Investigation;