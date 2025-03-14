// components/Header.tsx
"use client";

import Link from "next/link";
import Button from "./Button";
import { CaretRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { MegaMenu } from "@/components/Megamenu";
import { callsToAction, solutions } from "@/data/solutions";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/get-started/pricing" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [bgOpacity, setBgOpacity] = useState(0);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newOpacity = Math.min(1, scrollPosition / 200);
            setBgOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            ref={headerRef}
            className="flex flex-row fixed justify-between items-right h-[8vh] right-0 left-0 top-0 width-[100vw] z-[9999] px-12"
        >
            {/* Background div with opacity transition */}
            <div
                className="absolute inset-0 transition-colors duration-300 ease-in-out"
                style={{
                    backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
                    boxShadow: bgOpacity > 0
                        ? `0 1px 3px rgba(0, 0, 0, ${bgOpacity * 0.1})`
                        : "none",
                }}
            />

            {/* Main navigation */}
            <nav className="flex h-full px-1 relative z-10 items-center justify-between w-full max-w-7xl mx-auto">
                <div className="flex items-center gap-x-12">
                    {/* Logo */}
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Inopsia</span>
                        {
                            /* <div className="bg-orange-500 p-2 z-50">
                            <div className="bg-black px-2 py-1 flex place-items-center text-orange-500 font-urbanist font-bold">
                            </div>
                            </div> */
                        }
                        <p className="text-orange-500 text-3xl font-bold ">
                            Inopsia
                        </p>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8 items-center">
                        {/* Solutions Mega Menu */}
                        <MegaMenu
                            buttonText="Solutions"
                            navigation={solutions}
                            callsToAction={callsToAction}
                        />

                        {/* Regular Navigation Items */}
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right side buttons/actions */}
                <div className="relative z-10 flex items-center h-full gap-x-6">
                    <Button
                    className="py-3"
                        variant="primary"
                        Icon={{
                            Icon: CaretRight,
                            props: { weight: "bold" },
                        }}
                    >
                        <Link href="/get-started/pricing">
                            <p>Get started</p>
                        </Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
