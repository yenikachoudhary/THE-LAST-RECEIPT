import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Check, X, ArrowRight, Sparkles } from "lucide-react";

import clues from "../data/clues";

const questions = [
    {
        id: 1,
        question: "WHEN DID THE TRAIL FIRST CHANGE?",
        instruction: "Select the two clues that prove when activity first shifted.",
        correct: [1, 2],
        answerTitle: "THE FIRST SHIFT",
        answer:
            "Activity increased from 382 transactions in May to 575 in June.",
    },
    {
        id: 2,
        question: "WHAT ELSE CHANGED WHEN ACTIVITY SPIKED?",
        instruction: "Find the second signal that moved alongside June's activity.",
        correct: [2, 3],
        answerTitle: "TWO SIGNALS MOVED TOGETHER",
        answer:
            "June recorded 575 transactions and approximately 2.85M in total amount.",
    },
    {
        id: 3,
        question: "DID THE JUNE CHANGE LAST?",
        instruction: "Compare the June spike with what happened immediately afterward.",
        correct: [2, 5],
        answerTitle: "THE SURGE FADED",
        answer:
            "Activity fell from 575 transactions in June to 418 in July.",
    },
    {
        id: 4,
        question: "DID THE TRAIL LOOK THE SAME AFTERWARD?",
        instruction: "Find evidence that the composition of activity changed.",
        correct: [5, 6],
        answerTitle: "THE TRAIL CHANGED SHAPE",
        answer:
            "By August, travel represented 35.1% of recorded activity.",
    },
];

function EvidenceBoard({ onComplete }) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selected, setSelected] = useState([]);
    const [result, setResult] = useState(null);
    const [solved, setSolved] = useState([]);

    const question = questions[questionIndex];

    const caseClues = clues.filter(
        (clue) => clue.caseId === 1
    );

    const toggleClue = (id) => {
        if (result === "correct") return;

        setResult(null);

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

    const checkDeduction = () => {
        if (selected.length !== 2) return;

        const correct =
            [...selected].sort().join("-") ===
            [...question.correct].sort().join("-");

        if (correct) {
            setResult("correct");

            setSolved((previous) => [
                ...previous,
                question.id,
            ]);
        } else {
            setResult("wrong");
        }
    };

    const nextQuestion = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex((previous) => previous + 1);
            setSelected([]);
            setResult(null);
        } else {
            onComplete?.();
        }
    };

    return (
        <div className="space-y-8">

            {/* CASE QUESTION */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border-2 border-black bg-white p-6 shadow-[7px_7px_0_#171717] md:p-8"
            >

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>

                        <span className="stamp bg-[var(--color-coral)]">
                            DETECTIVE BOARD
                        </span>

                        <h2 className="display-font mt-5 text-3xl font-black md:text-5xl">
                            WHAT CHANGED
                            <br />
                            DURING SUMMER 2023?
                        </h2>

                        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">
                            Something changed in the trail. Your job is to
                            determine <strong>when it changed</strong>,
                            <strong> what changed</strong>, and
                            <strong> what the evidence actually proves.</strong>
                        </p>

                    </div>

                    <div className="shrink-0 rounded-2xl border-2 border-black bg-[var(--color-yellow)] p-5 text-center">

                        <Search
                            className="mx-auto mb-2"
                            size={28}
                        />

                        <p className="text-xs font-black tracking-widest">
                            DEDUCTIONS
                        </p>

                        <p className="display-font text-3xl font-black">
                            {solved.length} / {questions.length}
                        </p>

                    </div>

                </div>

            </motion.div>


            {/* CURRENT QUESTION */}
            <AnimatePresence mode="wait">

                <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                >

                    <div className="mb-6">

                        <p className="text-xs font-black tracking-[0.2em] text-[var(--color-text-muted)]">
                            QUESTION {question.id} OF {questions.length}
                        </p>

                        <h3 className="display-font mt-2 text-2xl font-black md:text-4xl">
                            {question.question}
                        </h3>

                        <p className="mt-2 text-[var(--color-text-muted)]">
                            {question.instruction}
                        </p>

                    </div>


                    {/* EVIDENCE */}
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                        {caseClues.map((clue) => {

                            const isSelected =
                                selected.includes(clue.id);

                            return (
                                <motion.button
                                    key={clue.id}
                                    type="button"
                                    onClick={() => toggleClue(clue.id)}
                                    whileHover={{ y: -5, rotate: clue.rotate }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`relative text-left rounded-2xl border-2 border-black p-5 shadow-[4px_4px_0_#171717] transition-all ${
                                        isSelected
                                            ? "bg-[var(--color-yellow)] ring-4 ring-black/20"
                                            : "bg-white"
                                    }`}
                                >

                                    {isSelected && (
                                        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-[var(--color-mint)]">
                                            <Check size={16} />
                                        </div>
                                    )}

                                    <p className="text-xs font-black tracking-widest text-[var(--color-text-muted)]">
                                        CLUE {String(clue.id).padStart(2, "0")}
                                    </p>

                                    <p className="mt-2 text-xs font-bold">
                                        {clue.period}
                                    </p>

                                    <h4 className="display-font mt-3 text-xl font-black">
                                        {clue.title}
                                    </h4>

                                    <div className="mt-4">

                                        <span className="display-font text-4xl font-black">
                                            {clue.value}
                                        </span>

                                        <span className="ml-2 text-sm font-bold text-[var(--color-text-muted)]">
                                            {clue.unit}
                                        </span>

                                    </div>

                                </motion.button>
                            );
                        })}

                    </div>


                    {/* CHECK BUTTON */}
                    {!result && (
                        <div className="mt-7 flex justify-center">

                            <button
                                type="button"
                                disabled={selected.length !== 2}
                                onClick={checkDeduction}
                                className={`flex items-center gap-2 rounded-xl border-2 border-black px-7 py-3 font-black shadow-[4px_4px_0_#171717] transition-all ${
                                    selected.length === 2
                                        ? "bg-[var(--color-coral)] hover:-translate-y-1"
                                        : "cursor-not-allowed bg-gray-200 opacity-60"
                                }`}
                            >
                                TEST MY DEDUCTION
                                <ArrowRight size={18} />
                            </button>

                        </div>
                    )}


                    {/* WRONG */}
                    {result === "wrong" && (

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mx-auto mt-7 max-w-2xl rounded-2xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#171717]"
                        >

                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[var(--color-coral)]">
                                    <X size={20} />
                                </div>

                                <div>

                                    <p className="font-black">
                                        NOT ENOUGH EVIDENCE
                                    </p>

                                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                                        Interesting connection, but these two
                                        clues don't strongly establish this
                                        deduction. Look again.
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    )}


                    {/* CORRECT */}
                    {result === "correct" && (

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mx-auto mt-7 max-w-3xl rounded-2xl border-2 border-black bg-[var(--color-mint)] p-6 shadow-[6px_6px_0_#171717]"
                        >

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-white">
                                    <Sparkles size={24} />
                                </div>

                                <div>

                                    <p className="text-xs font-black tracking-widest">
                                        DEDUCTION CONFIRMED
                                    </p>

                                    <h4 className="display-font mt-1 text-2xl font-black">
                                        {question.answerTitle}
                                    </h4>

                                    <p className="mt-2 leading-relaxed">
                                        {question.answer}
                                    </p>

                                </div>

                            </div>

                            <button
                                type="button"
                                onClick={nextQuestion}
                                className="mt-6 flex items-center gap-2 rounded-xl border-2 border-black bg-white px-6 py-3 font-black shadow-[3px_3px_0_#171717] transition-all hover:-translate-y-1"
                            >
                                {questionIndex === questions.length - 1
                                    ? "SOLVE THE CASE"
                                    : "NEXT QUESTION"}

                                <ArrowRight size={18} />
                            </button>

                        </motion.div>

                    )}

                </motion.div>

            </AnimatePresence>


            {/* FINAL INVESTIGATION NOTE */}
            <div className="border-t-2 border-dashed border-black pt-6">

                <div className="flex items-center justify-between text-sm font-bold">

                    <span>
                        Evidence connected
                    </span>

                    <span>
                        {solved.length} / {questions.length}
                    </span>

                </div>

                <div className="mt-3 h-4 overflow-hidden rounded-full border-2 border-black bg-white">

                    <motion.div
                        className="h-full bg-[var(--color-purple)]"
                        animate={{
                            width: `${(solved.length / questions.length) * 100}%`,
                        }}
                    />

                </div>

            </div>

        </div>
    );
}

export default EvidenceBoard;