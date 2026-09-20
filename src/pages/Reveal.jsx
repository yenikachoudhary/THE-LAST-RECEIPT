import { motion } from "motion/react";
import {
    ArrowRight,
    Check,
    HelpCircle,
    Sparkles,
} from "lucide-react";

function Reveal({ onNextCase, onBack }) {
    return (
        <main className="min-h-screen overflow-hidden pb-20">

            {/* TOP BAR */}
            <header className="content-width flex items-center justify-between py-6">

                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 font-bold shadow-[3px_3px_0_#171717] hover:-translate-y-1"
                >
                    ← BOARD
                </button>

                <span className="stamp bg-[var(--color-mint)]">
                    CASE 01 / SOLVED
                </span>

            </header>


            {/* HERO */}
            <section className="content-width pt-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >

                    <span className="stamp bg-[var(--color-yellow)]">
                        <Sparkles
                            size={14}
                            className="mr-1 inline"
                        />
                        CASE CLOSED
                    </span>

                    <h1 className="display-title mt-7">
                        YOU FOUND
                        <br />
                        THE SHIFT.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
                        You didn't find a single event.
                        You found a change in the pattern of a digital life.
                    </p>

                </motion.div>

            </section>


            {/* THE STORY */}
            <section className="content-width mt-16">

                <div className="grid gap-7 md:grid-cols-2">

                    {/* MAY */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="paper-card p-7"
                    >

                        <p className="text-xs font-black tracking-widest">
                            MAY 2023
                        </p>

                        <h2 className="display-font mt-3 text-3xl font-black">
                            A QUIET BASELINE
                        </h2>

                        <div className="mt-5">
                            <span className="display-font text-6xl font-black">
                                382
                            </span>

                            <span className="ml-2 font-bold text-[var(--color-text-muted)]">
                                transactions
                            </span>
                        </div>

                        <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                            May gives us the baseline. This is what the
                            trail looked like before the obvious shift.
                        </p>

                    </motion.div>


                    {/* JUNE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-3xl border-2 border-black bg-[var(--color-coral)] p-7 shadow-[6px_6px_0_#171717]"
                    >

                        <p className="text-xs font-black tracking-widest">
                            JUNE 2023
                        </p>

                        <h2 className="display-font mt-3 text-3xl font-black">
                            THE TURNING POINT
                        </h2>

                        <div className="mt-5 flex flex-wrap gap-4">

                            <div className="rounded-xl border-2 border-black bg-white p-4">
                                <span className="display-font text-4xl font-black">
                                    575
                                </span>
                                <p className="text-xs font-bold">
                                    TRANSACTIONS
                                </p>
                            </div>

                            <div className="rounded-xl border-2 border-black bg-white p-4">
                                <span className="display-font text-4xl font-black">
                                    2.85M
                                </span>
                                <p className="text-xs font-bold">
                                    TOTAL AMOUNT
                                </p>
                            </div>

                            <div className="rounded-xl border-2 border-black bg-white p-4">
                                <span className="display-font text-4xl font-black">
                                    72
                                </span>
                                <p className="text-xs font-bold">
                                    ENTITIES
                                </p>
                            </div>

                        </div>

                        <p className="mt-5 leading-relaxed">
                            Activity increased, spending increased, and
                            many entities were active at the same time.
                        </p>

                    </motion.div>


                    {/* JULY */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-3xl border-2 border-black bg-[var(--color-mint)] p-7 shadow-[6px_6px_0_#171717]"
                    >

                        <p className="text-xs font-black tracking-widest">
                            JULY 2023
                        </p>

                        <h2 className="display-font mt-3 text-3xl font-black">
                            THE SURGE FADED
                        </h2>

                        <div className="mt-5">
                            <span className="display-font text-6xl font-black">
                                418
                            </span>

                            <span className="ml-2 font-bold">
                                transactions
                            </span>
                        </div>

                        <p className="mt-4 leading-relaxed">
                            The June increase did not simply continue.
                            Activity fell back to 418 transactions.
                        </p>

                    </motion.div>


                    {/* AUGUST */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="rounded-3xl border-2 border-black bg-[var(--color-purple)] p-7 text-white shadow-[6px_6px_0_#171717]"
                    >

                        <p className="text-xs font-black tracking-widest">
                            AUGUST 2023
                        </p>

                        <h2 className="display-font mt-3 text-3xl font-black">
                            THE TRAIL CHANGED SHAPE
                        </h2>

                        <div className="mt-5 flex gap-4">

                            <div className="rounded-xl border-2 border-black bg-white p-4 text-black">
                                <span className="display-font text-4xl font-black">
                                    35.1%
                                </span>
                                <p className="text-xs font-bold">
                                    TRAVEL
                                </p>
                            </div>

                            <div className="rounded-xl border-2 border-black bg-white p-4 text-black">
                                <span className="display-font text-4xl font-black">
                                    17.0%
                                </span>
                                <p className="text-xs font-bold">
                                    SHOPPING
                                </p>
                            </div>

                        </div>

                        <p className="mt-5 leading-relaxed">
                            By August, the composition of activity looked
                            different from the earlier months.
                        </p>

                    </motion.div>

                </div>

            </section>


            {/* WHAT WE KNOW */}
            <section className="content-width mt-16">

                <div className="grid gap-7 lg:grid-cols-2">

                    <div className="rounded-3xl border-2 border-black bg-white p-7 shadow-[5px_5px_0_#171717]">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black bg-[var(--color-mint)]">
                                <Check size={22} />
                            </div>

                            <h2 className="display-font text-2xl font-black">
                                WHAT WE KNOW
                            </h2>

                        </div>

                        <ul className="mt-6 space-y-4">

                            <li className="flex gap-3">
                                <Check className="mt-1 shrink-0" size={18} />
                                June was the clearest activity shift.
                            </li>

                            <li className="flex gap-3">
                                <Check className="mt-1 shrink-0" size={18} />
                                Spending increased alongside activity.
                            </li>

                            <li className="flex gap-3">
                                <Check className="mt-1 shrink-0" size={18} />
                                The June surge faded in July.
                            </li>

                            <li className="flex gap-3">
                                <Check className="mt-1 shrink-0" size={18} />
                                August had a different activity composition.
                            </li>

                        </ul>

                    </div>


                    <div className="rounded-3xl border-2 border-black bg-[var(--color-yellow)] p-7 shadow-[5px_5px_0_#171717]">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black bg-white">
                                <HelpCircle size={22} />
                            </div>

                            <h2 className="display-font text-2xl font-black">
                                WHAT WE DON'T KNOW
                            </h2>

                        </div>

                        <p className="mt-6 text-lg font-bold leading-relaxed">
                            We don't know why the change happened.
                        </p>

                        <p className="mt-3 leading-relaxed">
                            The evidence shows a shift in the digital
                            trail. It does not prove the real-world reason
                            behind that shift.
                        </p>

                    </div>

                </div>

            </section>


            {/* FINAL LINE */}
            <section className="content-width mt-16">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="rounded-3xl border-2 border-black bg-[var(--color-blue)] p-8 text-center text-white shadow-[7px_7px_0_#171717] md:p-12"
                >

                    <p className="display-font text-2xl font-black md:text-4xl">
                        “A digital life isn't a story
                        until someone connects the dots.”
                    </p>

                    <p className="mt-5 font-bold">
                        — THE ARCHIVIST
                    </p>

                </motion.div>

            </section>


            {/* NEXT CASE */}
            <section className="content-width mt-12 text-center">

                <button
                    type="button"
                    onClick={onNextCase}
                    className="inline-flex items-center gap-3 rounded-2xl border-2 border-black bg-[var(--color-coral)] px-8 py-4 text-lg font-black shadow-[5px_5px_0_#171717] transition-all hover:-translate-y-1"
                >
                    OPEN NEXT CASE
                    <ArrowRight size={22} />
                </button>

            </section>

        </main>
    );
}

export default Reveal;