"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
    {
        question: "What is an AI-powered commodity code classifier?",
        answer:
            "Our classifier uses advanced AI to instantly analyze product descriptions and assign accurate HS/HTS codes, continuously learning from global trade data and customs rulings to eliminate manual research.",
    },
    {
        question: "How accurate is your commodity code classifier?",
        answer:
            "Our AI classifier achieves accuracy rates exceeding 99.5%, virtually eliminating misclassifications while providing confidence scores for complete transparency in edge cases.",
    },
    {
        question: "Can it integrate with our existing systems?",
        answer:
            "Yes, with REST APIs, pre-built connectors for major platforms (Shopify, Magento, SAP), and batch processing capabilities, integration typically takes just days.",
    },
    {
        question: "How does it handle new or unique products?",
        answer:
            "The system analyzes product characteristics, components, and intended use beyond keyword matching, effectively classifying novel items and providing alternative options when needed.",
    },
    {
        question: "What if classifications are challenged by customs?",
        answer:
            "Each classification comes with supporting rationale documentation. Enterprise customers receive our classification guarantee with direct support for any customs inquiries.",
    },
    {
        question: "What's the business impact?",
        answer:
            "Classification time drops from minutes to seconds per product, reducing staff needs by 80%, eliminating customs delays, and optimizing duty payments. Most customers see ROI within 3 months.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100 text-center">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto mb-12 text-center">
                        Everything you need to know about our platform and services
                    </p>
                    
                    <div className="mt-10 rounded-2xl bg-white dark:bg-blue-900/20 shadow-xl dark:shadow-blue-900/10 p-6 md:p-8">
                        <dl className="divide-y divide-blue-100 dark:divide-blue-800/30">
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
        </section>
    );
}