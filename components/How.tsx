"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import upload from "@/public/upload.svg";

const How = () => {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [resetting, setResetting] = useState(false);

    // Animation duration in milliseconds
    const animationDuration = 3000;

    // Steps data
    const steps = [
        {
            title: "Connect",
            description:
                "Sign up for an account and connect your data sources.",
            img: upload,
        },
        {
            title: "Analyze",
            description:
                "Our AI analyzes your data to provide actionable insights.",
            img: upload,
        },
        {
            title: "Optimize",
            description:
                "Use the insights to make informed business decisions.",
            img: upload,
        },
    ];

    // Set up animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (resetting) return; // Don't update progress while resetting

            setProgress((prevProgress) => {
                if (prevProgress >= 1) {
                    if (step === steps.length - 1) {
                        // We're on the last step, time to reset
                        setResetting(true);
                        return 1; // Keep progress at 100% during reset
                    } else {
                        // Move to next step
                        setStep(step + 1);
                        return 0;
                    }
                }
                // Use smaller increments for smoother animation
                return prevProgress + 0.005;
            });
        }, animationDuration / 100); // More frequent updates

        return () => clearInterval(interval);
    }, [step, steps.length, resetting]);

    // Reset resetting flag after a longer delay and move to step 0
    useEffect(() => {
        if (resetting) {
            const timeout = setTimeout(() => {
                setProgress(0); // Make sure to reset progress to 0
                setStep(0);
                setResetting(false);
            }, 2000); // Extended to 2 seconds
            return () => clearTimeout(timeout);
        }
    }, [resetting]);

    // Style for the progress bar - now shows for all steps
    function getProgressStyle(i: number) {
        if (resetting) {
            // During reset, keep the bars at their final position but invisible
            return {
                width: i < steps.length ? "100%" : "0%",
                height: "3px",
                backgroundColor: "#2563eb",
                position: "absolute" as const,
                bottom: 0,
                left: 0,
                opacity: 0,
            };
        }

        return {
            width: i === step ? `${progress * 100}%` : i < step ? "100%" : "0%",
            height: "3px",
            backgroundColor: "white",
            opacity: 0.6,
            position: "absolute" as const,
            bottom: 0,
            left: 0,
            transition: "width 2000ms forwards",
        };
    }

    return (
        <section className="bg-blue-600 h-screen w-screen flex flex-col items-center pt-16 font-urbanist">
            <div className="flex flex-col items-center w-[75%]">
                <p className="font-bold mb-2 text-orange-500">
                    Amplify Business Growth
                </p>
                <h2 className="text-5xl text-white">3 Simple Steps</h2>
                <div className="flex flex-col w-full mt-12">
                    {/* Progress bars and step titles */}
                    <div className="flex flex-row w-full">
                        {steps.map((stepItem, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-3 w-full items-center justify-center text-white relative mr-2 last:mr-0"
                                onClick={() => setStep(i)}
                            >
                                <div className="w-full col-span-3 bg-blue-600 text-center mb-2 text-xl">
                                    <p>
                                        {stepItem.title}
                                    </p>
                                </div>
                                <div style={getProgressStyle(i)}></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Current step image */}
                    <div className="w-full p-8 flex mt-12 text-xl font-urbanist">
                        <Image
                            src={steps[step].img}
                            alt={steps[step].title}
                            className="w-[42%] h-auto shadow-2xl rounded-[60px] mr-12"
                        />
                        <div className="w-[60%]">
                            <h3 className="text-4xl font-bold text-white">
                                {steps[step].title}
                            </h3>
                            <p className="text-white text-[16px]">
                                {steps[step].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default How;
