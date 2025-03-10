"use client";

import { CaretRight } from "@phosphor-icons/react";
import Button from "./Button";
import Link from "next/link";
import NextVideoPlayer from "./NextVideoPlayer";

export default function HeroTwoColumnSkewed() {
    return (
        <div className="bg-white h-[100vh]">
            <div className="relative flex items-center pl-20 justify-around gap-20 pr-20">
                <div className="max-w-7xl">
                    <div className="items-end justify-around z-10 lg:w-full gap-12">
                        <div className="h-[100vh] relative flex items-center gap-20">
                            <div className="max-w-2xl flex flex-col">
                                <div className="hidden sm:mb-10 sm:flex">
                                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt.{" "}
                                        <a
                                            href="#"
                                            className="font-semibold whitespace-nowrap text-blue-600"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            Read more{" "}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-6xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                        AI for Global Trade
                                    </h1>
                                </div>
                                <div className="w-full items-end">
                                    <div>
                                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                            AI-powered trade engine—fueling
                                            e-commerce growth while creating
                                            breakthrough enterprise efficiencies
                                            with smart systems that transform
                                            international logistics into revenue
                                            multipliers.
                                        </p>
                                        <div className="mt-10  w-full flex items-center gap-x-6">
                                            <Button
                                                variant="primary"
                                                Icon={{
                                                    Icon: CaretRight,
                                                    props: { weight: "bold" },
                                                }}
                                                className="mt-8 py-3.5"
                                            >
                                                <Link href="/get-started/pricing">
                                                    <p>Get started</p>
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl w-[700px] overflow-hidden flex justify-center items-center relative">
                                <NextVideoPlayer
                                    autoplay
                                    playbackId="wstLkZnzpGhQtlvwzCk5aBy2hP4zdIW2cCGnw2GxPb4"
                                    className="w-full h-full relative"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
