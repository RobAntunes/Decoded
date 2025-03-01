"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Transition
} from "@headlessui/react";
import { Minus, Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface FAQItemProps {
    i: number;
    faq: { question: string; answer: string };
    isOpen: boolean;
    setOpenIndex: Dispatch<SetStateAction<number | null>>;
}

const FAQItem = ({ i, faq, isOpen, setOpenIndex }: FAQItemProps) => {
    return (
        <Disclosure
            as="div"
            className="py-6 first:pt-0 last:pb-0"
            defaultOpen={isOpen}
            onChange={() => setOpenIndex(isOpen ? null : i)}
        >
            {({ open }) => (
                <>
                    <dt>
                        <DisclosureButton
                            className="group flex w-full items-start justify-between text-left text-gray-900"
                        >
                            <span className="text-base font-semibold leading-7">
                                {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <Minus className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Plus className="h-6 w-6" aria-hidden="true" />
                                )}
                            </span>
                        </DisclosureButton>
                    </dt>
                    <Transition
                        show={open}
                        enter="transition-all duration-300 ease-out"
                        enterFrom="max-h-0 opacity-0"
                        enterTo="max-h-96 opacity-100"
                        leave="transition-all duration-200 ease-in"
                        leaveFrom="max-h-96 opacity-100"
                        leaveTo="max-h-0 opacity-0"
                    >
                        <DisclosurePanel static as="dd" className="mt-2 pr-12 transition-all">
                            <p className="text-base leading-7 text-gray-600 transition-all duration-500">
                                {faq.answer}
                            </p>
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default FAQItem;