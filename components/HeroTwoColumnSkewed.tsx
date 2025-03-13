"use client";

import { CaretRight } from "@phosphor-icons/react";
import Button from "./Button";
import Link from "next/link";
import NextVideoPlayer from "./NextVideoPlayer";
import Badge from "./Badge";

export default function HeroTwoColumnSkewed() {
    return (
        <div className="bg-white h-[100vh]">
            <div className="relative flex items-center pl-20 justify-around gap-20 pr-20">
                <div>
                    <div className="items-end justify-around z-10 lg:w-full gap-12">
                        <div className="h-[100vh] relative flex items-center gap-20">
                            <div className="max-w-2xl flex flex-col">
                                <div className="hidden sm:mb-10 sm:flex">
                                    <Badge text="Drive your business growth" />
                                </div>
                                <div>
                                    <h1 className="text-6xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                        AI for Global Trade
                                    </h1>
                                </div>
                                <div className="w-full items-end">
                                    <div>
                                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                            AI-powered that transforms
                                            internation trade into revenue
                                            growth.
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
                            <div className="bg-gray-50 rounded-xl w-[400px] relative">
                                <NextVideoPlayer
                                    autoplay
                                    playbackId="01hfIDB95BuF4xdoix0216Gd67O01D36f8b9UThWDghSOQ"
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
