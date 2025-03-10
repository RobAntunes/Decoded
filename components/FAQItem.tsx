"use client";

import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
    i: number;
    faq: { question: string; answer: string };
    isOpen: boolean;
    setOpenIndex: Dispatch<SetStateAction<number | null>>;
}

const FAQItem = ({ i, faq, isOpen, setOpenIndex }: FAQItemProps) => {
    const toggleOpen = () => {
        setOpenIndex(isOpen ? null : i);
    };

    return (
        <div className="py-5 group">
            <dt>
                <button
                    onClick={toggleOpen}
                    className="flex w-full items-center justify-between text-left focus:outline-none focus:ring-0"
                >
                    <span className="font-semibold text-xl text-blue-800 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                        {faq.question}
                    </span>
                    <motion.span 
                        className="ml-6 flex-shrink-0 text-blue-500 dark:text-blue-400"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <FaChevronDown className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                </button>
            </dt>
            <AnimatePresence>
                {isOpen && (
                    <motion.dd 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg">
                            <p className="text-blue-700 dark:text-blue-300">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.dd>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQItem;