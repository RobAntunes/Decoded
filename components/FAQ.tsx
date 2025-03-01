"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:px-8 lg:pb-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-6xl font-semibold tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={faq.question + i}
                                i={i}
                                setOpenIndex={setOpenIndex}
                                isOpen={openIndex === i}
                                faq={faq}
                            />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}