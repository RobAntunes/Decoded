"use client";

import { CaretRight } from "@phosphor-icons/react";
import Button from "./Button";
import Link from "next/link";
import NextVideoPlayer from "./NextVideoPlayer";
import Badge from "./Badge";

export default function HeroTwoColumnSkewed() {
    return (
        <div className="bg-white h-[100vh]">
            <div className="relative flex items-center justify-around px-14">
                <div>
                    <div className="items-end justify-around z-10 lg:w-full gap-12">
                        <div className="h-[100vh] relative flex items-center gap-12">
                            <div className="max-w-2xl flex flex-col">
                                <div className="hidden sm:mb-2 sm:flex">
                                    <Badge text="The #1 platform in AI for global trade" />
                                </div>
                                <div>
                                    <h1 className="!text-[68px] font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                        AI for Global Trade
                                    </h1>
                                </div>
                                <div className="w-full items-end">
                                    <div>
                                        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                                            AI that transforms international
                                            trade into revenue growth <br /> for
                                            eCommerce and the enterprise.
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
                            <div className="bg-gray-50 rounded-xl w-[650px] relative left-4">
                                <NextVideoPlayer
                                    autoplay
                                    playbackId="CmW402WaE9P00ep6pGDXL00C3DCO4n01HmAvV2wBHqjC00mc"
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
