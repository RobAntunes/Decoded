"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaDatabase } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";

const HiW: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progressPercentage, setProgressPercentage] = useState(0);
    const [allStepsCompleted, setAllStepsCompleted] = useState(false);
    const [finalPulse, setFinalPulse] = useState(false);

    // Use refs to track intervals and prevent issues with stale state
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const finalPulseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Clear all timeouts and intervals on unmount or when dependencies change
    const clearAllTimers = () => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
        if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
        }
        if (finalPulseTimeoutRef.current) {
            clearTimeout(finalPulseTimeoutRef.current);
            finalPulseTimeoutRef.current = null;
        }
    };

    // Auto-advance through steps
    useEffect(() => {
        // Clear any existing timers when the effect runs
        clearAllTimers();

        if (activeStep === 0) {
            // Start the sequence after initial render
            const timer = setTimeout(() => {
                setActiveStep(1);
                setProgressPercentage(0);
                setAllStepsCompleted(false);
                setFinalPulse(false);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (activeStep >= 1 && activeStep <= 3) {
            // Animate progress within the current step
            const animationDuration = 3000; // 3 seconds per step
            const interval = 50; // Update every 50ms for smooth animation
            const incrementPerInterval = 100 / (animationDuration / interval);

            let currentProgress = 0;
            progressIntervalRef.current = setInterval(() => {
                currentProgress += incrementPerInterval;

                if (currentProgress >= 100) {
                    if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                        progressIntervalRef.current = null;
                    }

                    if (activeStep < 3) {
                        // Move to next step
                        setActiveStep((prev) => prev + 1);
                        setProgressPercentage(0);
                    } else {
                        // Final step completed
                        setProgressPercentage(100);
                        setAllStepsCompleted(true);

                        // Trigger final pulse animation for all boxes
                        setFinalPulse(true);

                        // Reset final pulse after animation completes
                        finalPulseTimeoutRef.current = setTimeout(() => {
                            setFinalPulse(false);

                            // Wait a bit before resetting the entire sequence
                            resetTimeoutRef.current = setTimeout(() => {
                                setActiveStep(1);
                                setProgressPercentage(0);
                                setAllStepsCompleted(false);
                            }, 2000);
                        }, 2000);
                    }
                } else {
                    setProgressPercentage(currentProgress);
                }
            }, interval);
        }

        return clearAllTimers;
    }, [activeStep]);

    const steps = [
        {
            id: 1,
            title: "Connect Data Source",
            description:
                "Seamlessly integrate your existing data sources with our platform, including through AI Vision.",
            icon: <FaDatabase className="text-4xl text-blue-600" />,
            color: "bg-blue-50 dark:bg-blue-900/20",
            borderColor: "border-blue-200 dark:border-blue-700",
        },
        {
            id: 2,
            title: "Sit Back and Relax",
            description:
                "Our AI-powered system analyzes your data. No manual configuration needed - we handle the heavy lifting.",
            icon: <MdOutlineWavingHand className="text-4xl text-blue-600" />,
            color: "bg-blue-100 dark:bg-blue-900/30",
            borderColor: "border-blue-300 dark:border-blue-600",
        },
        {
            id: 3,
            title: "Enhance Your Operations",
            description:
                "Watch as Decoded automatically generates and applies fixes and while providing valuable operational insights.",
            icon: <FaChartLine className="text-4xl text-blue-600" />,
            color: "bg-blue-200 dark:bg-blue-900/40",
            borderColor: "border-blue-400 dark:border-blue-500",
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0.5,
            scale: 0.95,
            transition: {
                duration: 0.3,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    };

    // Calculate progress width for each step
    const getProgressWidth = (stepId: number) => {
        if (stepId < activeStep) return "100%"; // Completed steps are fully filled
        if (stepId === activeStep) return `${progressPercentage}%`; // Current step shows progress
        return "0%"; // Future steps have no progress
    };

    // Get progress color based on state
    const getProgressColor = () => {
        if (finalPulse) return "bg-green-500/50 dark:bg-green-500/60"; // Final pulse - all boxes green
        return "bg-blue-500/30 dark:bg-blue-600/40"; // Default blue color
    };

    // Get box classes based on animation state
    const getBoxClasses = (step: {
        id: number;
        borderColor: string;
        color: string;
    }) => {
        let classes =
            `rounded-xl p-8 border transition-all duration-500 relative overflow-hidden group`;

        // Base color and border
        if (finalPulse) {
            classes +=
                ` border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/20`;
        } else {
            classes += ` ${step.borderColor} ${step.color}`;
        }

        // Active step highlight
        if (activeStep === step.id && !finalPulse) {
            classes += ` ring-4 ring-blue-500 shadow-lg`;
        }

        // Final pulse effect for all boxes
        if (finalPulse) {
            classes += ` final-pulse-box`;
        }

        return classes;
    };

    return (
        <section className="py-16 dark:bg-blue-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100">
                        How It Works
                    </h2>
                    <p className="text-lg text-blue-700 dark:text-blue-300 max-w-3xl mx-auto">
                        Analyze your code classifications to generate actionable
                        insights across your business.
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting lines between boxes (visible on desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-[calc(33.333%-30px)] right-[calc(33.333%-30px)] h-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-y-1/2 z-0">
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className={getBoxClasses(step)}
                                variants={itemVariants}
                                initial="hidden"
                                animate={activeStep >= step.id
                                    ? "visible"
                                    : "hidden"}
                                exit="exit"
                            >
                                {/* Progress bar overlay */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {/* Solid fill that grows from left to right */}
                                    <div
                                        className={`absolute top-0 left-0 h-full ${getProgressColor()}`}
                                        style={{
                                            width: finalPulse
                                                ? "100%"
                                                : getProgressWidth(step.id),
                                            transition:
                                                "width 0.05s linear, background-color 0.5s ease",
                                        }}
                                    />

                                    {/* Leading wave effect at the edge of the progress */}
                                    {activeStep === step.id &&
                                        !allStepsCompleted && !finalPulse && (
                                        <div
                                            className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-blue-400/50 to-blue-500/30 dark:via-blue-500/60 dark:to-blue-600/40"
                                            style={{
                                                left:
                                                    `calc(${progressPercentage}% - 48px)`,
                                                display: progressPercentage > 0
                                                    ? "block"
                                                    : "none",
                                                transition: "left 0.05s linear",
                                                boxShadow:
                                                    "0 0 20px rgba(59, 130, 246, 0.5)",
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div
                                        className={`flex items-center justify-center h-16 w-16 rounded-full shadow-sm mb-6 mx-auto transform transition-transform group-hover:scale-110 duration-300 ${
                                            finalPulse
                                                ? "bg-green-100 dark:bg-green-800"
                                                : "bg-white dark:bg-blue-900"
                                        }`}
                                    >
                                        {step.icon}
                                    </div>
                                    <div className="relative mb-6 flex justify-center">
                                        <span
                                            className={`relative text-white text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center z-10 transition-all duration-300 ${
                                                finalPulse
                                                    ? "bg-green-500 scale-125"
                                                    : activeStep === step.id
                                                    ? "bg-blue-600 scale-125"
                                                    : "bg-blue-400"
                                            }`}
                                        >
                                            {step.id}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center text-blue-900 dark:text-blue-100">
                                        {step.title}
                                    </h3>
                                    <p className="text-blue-700 dark:text-blue-300 text-center">
                                        {step.description}
                                    </p>

                                    {/* Arrow connector (visible on mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="flex justify-center mt-4 md:hidden">
                                            <FaArrowRight
                                                className={`text-xl ${
                                                    finalPulse
                                                        ? "text-green-400 dark:text-green-500"
                                                        : "text-blue-400 dark:text-blue-500"
                                                }`}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Completion checkmark */}
                                {(step.id < activeStep || finalPulse) && (
                                    <motion.div
                                        className={`absolute top-4 right-4 text-white rounded-full h-6 w-6 flex items-center justify-center ${
                                            finalPulse
                                                ? "bg-green-500"
                                                : "bg-blue-600"
                                        }`}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.3,
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: allStepsCompleted ? 1 : 0,
                        y: allStepsCompleted ? 0 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        className={`text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group ${
                            finalPulse
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        <span className="inline-flex items-center">
                            Get Started Today
                            <motion.span
                                className="ml-2"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Add keyframes for pulsing box effects */}
            <style jsx global>
                {`
        .final-pulse-box {
          animation: final-pulse 2s ease-in-out;
          transform-origin: center;
        }
        
        @keyframes final-pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(34, 197, 94, 0.2);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
      `}
            </style>
        </section>
    );
};

export default HiW;
