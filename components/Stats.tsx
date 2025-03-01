"use client";

import { CaretRight } from "@phosphor-icons/react";
import Button from "./Button";

// TODO: Add stats for the platform
const stats = [
    { id: 1, name: "Lost to incorrect classification annualy", value: "$22 Billion" },
    { id: 2, name: "More efficient than manual classification", value: "1000x" },
    { id: 3, name: "Reduction in average duty payments", value: "12.3%" },
    { id: 4, name: "In untapped earnings through relevant up and cross sells", value: "$66 Billion" },
];

export default function Example() {
    return (
        <div className="py-12">
            <div className="relative bg-white">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                            <h2 className="text-base/8 font-semibold text-blue-600">
                                Our track record
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Trusted by thousands of users worldwide
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                {"We support brand's operations by solving their end-to-end compliance needs."}
                            </p>
                            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.id}
                                        className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
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
                    <Button
                        variant="primary"
                        Icon={{ Icon: CaretRight, props: { weight: "bold" } }}
                        className="mt-8 py-3.5"
                    >
                        <span>Get Started!</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
