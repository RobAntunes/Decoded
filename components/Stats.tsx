"use client";

import { CaretRight } from "@phosphor-icons/react";
import Button from "./Button";

// TODO: Add stats for the platform
const stats = [
    {
        id: 1,
        name: "Lost to incorrect classification annualy",
        value: "$22 Billion",
    },
    {
        id: 2,
        name: "More efficient than manual classification",
        value: "1000x",
    },
    { id: 3, name: "Reduction in average duty payments", value: "12.3%" },
    {
        id: 4,
        name: "In untapped earnings through relevant insights",
        value: "$66 Billion",
    },
];

export default function Stats() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl sm:px-6 py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle
                            r={512}
                            cx={512}
                            cy={512}
                            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fillOpacity="0.7"
                        />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#0400ff" />
                                <stop offset={1} stopColor="#0095ff" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto lg:mr-0 flex gap-x-12 py-20 items-center justify-between p-8">
                        <div>
                            <div className="w-[32rem]">
                                <h2 className="text-base/8 font-semibold text-blue-600">
                                    Our track record
                                </h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Trusted by
                                    thousands<span className="text-blue-600">
                                        {" "} worldwide
                                    </span>
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    {"We support brand's operations by solving their end-to-end compliance needs."}
                                </p>
                            </div>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Button
                                    className="py-3.5"
                                    variant="primary"
                                    Icon={{
                                        Icon: CaretRight,
                                        props: { weight: "bold" },
                                    }}
                                >
                                    <p>Get started</p>
                                </Button>
                                <a
                                    href="#"
                                    className="text-sm/6 font-semibold text-neutral-500"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.id}
                                        className="flex flex-col gap-3 border-l border-gray-900/10 pl-6 w-[12rem]"
                                    >
                                        <dt className="text-sm/6 text-gray-600">
                                            {stat.name}
                                        </dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
