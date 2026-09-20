import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Check,
  Lightbulb,
  Link2,
  RotateCcw,
  Search,
  Sparkles,
} from "lucide-react";

import clues from "../data/clues";

const questions = [
  {
    id: 1,
    question: "WHEN DID THE TRAIL FIRST CHANGE?",
    hint: "Compare the quiet beginning with the first obvious jump.",
    correct: [1, 2],
    answer:
      "Activity increased from 382 transactions in May to 575 in June.",
  },
  {
    id: 2,
    question: "WHAT ELSE CHANGED WHEN ACTIVITY SPIKED?",
    hint: "The same month may contain another unusual signal.",
    correct: [2, 3],
    answer:
      "June recorded 575 transactions and approximately 2.85M in total amount.",
  },
  {
    id: 3,
    question: "DID THE JUNE CHANGE LAST?",
    hint: "Compare June with what happened immediately afterward.",
    correct: [2, 5],
    answer:
      "Activity fell from 575 transactions in June to 418 in July.",
  },
  {
    id: 4,
    question: "DID THE TRAIL LOOK THE SAME AFTERWARD?",
    hint: "Look at what became more prominent in August.",
    correct: [5, 6],
    answer:
      "By August, travel represented 35.1% of recorded activity.",
  },
];

const nodePositions = {
  1: "left-[5%] top-[8%]",
  2: "left-[48%] top-[5%]",
  3: "left-[73%] top-[27%]",
  4: "left-[18%] top-[48%]",
  5: "left-[52%] top-[54%]",
  6: "left-[78%] top-[66%]",
  7: "left-[28%] top-[76%]",
};

const noteColors = [
  "#FFC857",
  "#FF8A3D",
  "#42D6A4",
  "#7C5CFC",
  "#FF5A5F",
];

function EvidenceBoard({ onComplete, onBack }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);
  const [connections, setConnections] = useState([]);
  const [showDiscovery, setShowDiscovery] = useState(false);

  const question = questions[questionIndex];

  const caseClues = useMemo(
    () => clues.filter((clue) => clue.caseId === 1),
    []
  );

  const selectedClues = caseClues.filter((clue) =>
    selected.includes(clue.id)
  );

  const selectClue = (id) => {
    if (result === "correct") return;

    setResult(null);

    setSelected((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      if (current.length >= 2) {
        return [current[1], id];
      }

      return [...current, id];
    });
  };

  const resetDeduction = () => {
    setSelected([]);
    setResult(null);
  };

  const testDeduction = () => {
    if (selected.length !== 2) return;

    const sortedSelected = [...selected].sort();
    const sortedCorrect = [...question.correct].sort();

    const isCorrect =
      sortedSelected[0] === sortedCorrect[0] &&
      sortedSelected[1] === sortedCorrect[1];

    if (!isCorrect) {
      setResult("wrong");
      return;
    }

    setResult("correct");

    const connectionKey = `${question.correct[0]}-${question.correct[1]}`;

    if (!connections.includes(connectionKey)) {
      setConnections((current) => [...current, connectionKey]);
    }

    setShowDiscovery(true);
  };

  const nextQuestion = () => {
    setShowDiscovery(false);
    setSelected([]);
    setResult(null);

    if (questionIndex === questions.length - 1) {
      onComplete?.();
      return;
    }

    setQuestionIndex((current) => current + 1);
  };

  return (
    <section className="min-h-screen bg-[#F2E4CA] px-4 py-5 md:px-8">

      {/* Header */}
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between border-b-2 border-black pb-4">

          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-black"
          >
            <ArrowLeft size={18} />
            BACK
          </button>

          <div className="text-center">
            <p className="display-font text-lg font-black">
              EVIDENCE WALL
            </p>

            <p className="text-[10px] font-black uppercase tracking-[0.2em]">
              CASE 01 / SUMMER 2023
            </p>
          </div>

          <div className="rounded-full border-2 border-black bg-white px-3 py-2 text-xs font-black">
            {connections.length} / 4
          </div>

        </div>

        {/* Question */}
        <div className="mx-auto mt-7 max-w-3xl text-center">

          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border-2 border-black bg-[#FFC857] px-4 py-2 text-xs font-black">
            <Search size={14} />
            DEDUCTION {questionIndex + 1} / {questions.length}
          </div>

          <h1 className="display-font text-3xl font-black leading-tight md:text-5xl">
            {question.question}
          </h1>

          <p className="mt-3 text-sm font-semibold text-gray-600">
            {question.hint}
          </p>

        </div>

        {/* Detective wall */}
        <div className="relative mx-auto mt-8 h-[650px] max-w-7xl overflow-hidden rounded-[2rem] border-[3px] border-black bg-[#D7C39B] shadow-[8px_8px_0_#171717]">

          {/* paper texture */}
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#171717_0.7px,transparent_0.7px)] [background-size:14px_14px]" />

          {/* tape */}
          <div className="absolute left-8 top-5 h-8 w-24 rotate-[-5deg] border border-black/10 bg-[#fff4a3]/80" />
          <div className="absolute right-12 top-12 h-8 w-24 rotate-[6deg] border border-black/10 bg-[#fff4a3]/80" />

          {/* title note */}
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: -15 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            className="absolute left-5 top-5 z-10 hidden w-52 border-2 border-black bg-[#FFF8EE] p-4 shadow-[4px_4px_0_#171717] md:block"
          >
            <p className="text-[10px] font-black uppercase tracking-widest">
              FIELD NOTE
            </p>

            <p className="display-font mt-2 text-xl font-black">
              CONNECT THE DOTS.
            </p>

            <p className="mt-2 text-xs font-bold leading-5">
              Two clues. One deduction.
            </p>
          </motion.div>

          {/* Connection lines */}
          <ConnectionLines
            caseClues={caseClues}
            connections={connections}
          />

          {/* Evidence */}
          {caseClues.map((clue, index) => {

            const isSelected = selected.includes(clue.id);

            return (
              <motion.button
                key={clue.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: index % 2 === 0 ? -3 : 3,
                }}
                animate={{
                  opacity: 1,
                  scale: isSelected ? 1.04 : 1,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                transition={{
                  delay: index * 0.06,
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                }}
                onClick={() => selectClue(clue.id)}
                className={`absolute z-20 ${nodePositions[clue.id]} w-[155px] text-left sm:w-[180px]`}
              >

                <div
                  className="relative border-2 border-black p-4 shadow-[5px_5px_0_#171717]"
                  style={{
                    backgroundColor:
                      noteColors[index % noteColors.length],
                  }}
                >

                  {/* pin */}
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-[#FF5A5F] shadow-sm" />

                  <div className="flex items-start justify-between gap-2">

                    <span className="text-[9px] font-black uppercase">
                      {clue.date}
                    </span>

                    {isSelected && (
                      <div className="rounded-full border-2 border-black bg-white p-1">
                        <Check size={11} strokeWidth={4} />
                      </div>
                    )}

                  </div>

                  <p className="display-font mt-3 text-lg font-black leading-tight">
                    {clue.title}
                  </p>

                  <p className="mt-3 text-2xl font-black">
                    {clue.value}
                  </p>

                  <p className="mt-2 line-clamp-3 text-[10px] font-bold leading-4">
                    {clue.description}
                  </p>

                </div>

              </motion.button>
            );
          })}

          {/* Selection instruction */}
          <div className="absolute bottom-5 left-1/2 z-30 w-[calc(100%-32px)] max-w-md -translate-x-1/2">

            <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[5px_5px_0_#171717]">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-black uppercase">
                    YOUR DEDUCTION
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    {selected.length === 0 &&
                      "Select two clues that belong together."}

                    {selected.length === 1 &&
                      "Choose one more clue."}

                    {selected.length === 2 &&
                      "Ready to test the connection."}
                  </p>
                </div>

                {selected.length > 0 && (
                  <button
                    onClick={resetDeduction}
                    className="rounded-full border-2 border-black p-2"
                    aria-label="Reset selected clues"
                  >
                    <RotateCcw size={15} />
                  </button>
                )}

              </div>

              <button
                onClick={testDeduction}
                disabled={selected.length !== 2}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-4 py-3 text-xs font-black text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                TEST MY DEDUCTION
                <Link2 size={15} />
              </button>

            </div>

          </div>

        </div>

        {/* Wrong answer */}
        <AnimatePresence>
          {result === "wrong" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border-2 border-black bg-[#FF5A5F] p-5 shadow-[5px_5px_0_#171717]"
            >
              <Lightbulb size={22} className="shrink-0" />

              <div>
                <p className="font-black">
                  NOT QUITE.
                </p>

                <p className="mt-1 text-sm font-bold leading-6">
                  These two clues don't give us a strong enough connection.
                  Look at the dates and ask what actually changed together.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discovery */}
        <AnimatePresence>
          {showDiscovery && result === "correct" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5"
            >

              <motion.div
                initial={{ rotate: -4 }}
                animate={{ rotate: 0 }}
                className="relative w-full max-w-xl border-[3px] border-black bg-[#FFF8EE] p-7 shadow-[10px_10px_0_#171717] md:p-10"
              >

                <div className="absolute -right-3 -top-3 rotate-6 border-2 border-black bg-[#FF5A5F] px-4 py-2 text-xs font-black shadow-[3px_3px_0_#171717]">
                  CONNECTION FOUND
                </div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-[#42D6A4]">
                  <Link2 size={35} strokeWidth={3} />
                </div>

                <p className="mt-6 text-center text-xs font-black uppercase tracking-[0.2em]">
                  THE RECEIPTS AGREE
                </p>

                <h2 className="display-font mt-3 text-center text-4xl font-black">
                  You found a connection.
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {selectedClues.map((clue) => (
                    <div
                      key={clue.id}
                      className="border-2 border-black bg-white p-4"
                    >
                      <p className="text-[10px] font-black uppercase">
                        {clue.date}
                      </p>

                      <p className="display-font mt-2 text-xl font-black">
                        {clue.title}
                      </p>

                      <p className="mt-2 text-2xl font-black">
                        {clue.value}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-6 border-2 border-black bg-[#FFC857] p-5">

                  <p className="text-xs font-black uppercase">
                    WHAT WE CAN SAY
                  </p>

                  <p className="mt-2 font-bold leading-7">
                    {question.answer}
                  </p>

                </div>

                <button
                  onClick={nextQuestion}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-black bg-black px-5 py-4 text-sm font-black text-white shadow-[5px_5px_0_#7C5CFC]"
                >
                  {questionIndex === questions.length - 1
                    ? "RECONSTRUCT THE STORY"
                    : "FOLLOW THE TRAIL"}

                  <ArrowLeft
                    size={18}
                    className="rotate-180"
                  />
                </button>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress */}
        <div className="mx-auto mt-8 max-w-3xl">

          <div className="flex items-center justify-between text-xs font-black">
            <span>EVIDENCE CONNECTED</span>
            <span>
              {connections.length} / {questions.length}
            </span>
          </div>

          <div className="mt-2 h-4 overflow-hidden rounded-full border-2 border-black bg-white">

            <motion.div
              animate={{
                width: `${(connections.length / questions.length) * 100}%`,
              }}
              className="h-full bg-[#7C5CFC]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

/* --------------------------------
   SVG CONNECTION LINES
-------------------------------- */

function ConnectionLines({ caseClues, connections }) {
  const positions = {
    1: { x: 13, y: 15 },
    2: { x: 56, y: 12 },
    3: { x: 81, y: 35 },
    4: { x: 26, y: 56 },
    5: { x: 60, y: 61 },
    6: { x: 85, y: 72 },
    7: { x: 36, y: 82 },
  };

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >

      {connections.map((connection) => {

        const [first, second] = connection
          .split("-")
          .map(Number);

        const start = positions[first];
        const end = positions[second];

        if (!start || !end) return null;

        return (
          <motion.line
            key={connection}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            vectorEffect="non-scaling-stroke"
            stroke="#171717"
            strokeWidth="2"
            strokeDasharray="5 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        );
      })}

    </svg>
  );
}

export default EvidenceBoard;