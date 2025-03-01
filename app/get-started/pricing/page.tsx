const Pricing = () => {
    return (
        <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
            <div className="relative  py-10 md:py-20 max-w-7xl mx-auto flex flex-col items-center justify-between">
                <div className="relative">
                    <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white __classNameName_fedf9c">
                        Simple pricing for your ease
                    </h2>
                    <p className="text-center text-sm md:text-base text-neutral-700 dark:text-neutral-400 max-w-2xl mt-4 mx-auto font-normal __classNameName_fedf9c">
                        Every AI offers a wide range of services. You can choose
                        the one that suits your needs. Select from your
                        favourite plan and get started instantly.
                    </p>
                </div>
                <div className="relative">
                    <div className="flex items-center justify-center bg-neutral-100 dark:bg-neutral-800  w-fit mx-auto mt-10 mb-12 rounded-md overflow-hidden">
                        <button className="text-sm font-medium p-4 rounded-md relative text-white dark:text-black">
                            <span
                                className="absolute inset-0 bg-black dark:bg-white"
                                style={{ opacity: 1 }}
                            >
                            </span>
                            <span className="relative z-10">Monthly</span>
                        </button>
                        <button className="text-sm font-medium text-gray-500 dark:text-neutral-400 p-4 rounded-md relative">
                            <span className="relative z-10">Yearly</span>
                        </button>
                    </div>
                    <div className="mx-auto mt-4 md:mt-20 grid relative z-20 grid-cols-1 gap-4 items-center  md:grid-cols-2 xl:grid-cols-4">
                        <div className="bg-neutral-100/60 dark:bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between">
                            <div className="">
                                <h3
                                    id="tier-starter"
                                    className="text-neutral-700 dark:text-neutral-400 text-base font-semibold leading-7"
                                >
                                    Starter
                                </h3>
                                <p className="mt-4">
                                    <span
                                        className="text-4xl font-bold tracking-tight inline-block text-neutral-900 dark:text-neutral-200"
                                        style={{
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            willChange: "auto",
                                            transform: "none",
                                        }}
                                    >
                                        $4/mo
                                    </span>
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-300 mt-6 text-sm leading-7 h-12 md:h-12 xl:h-12">
                                    Best for creators starting out
                                </p>
                                <ul
                                    role="list"
                                    className="text-neutral-600 dark:text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Manage up to 2 channels
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Basic video upload support
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Email support within 48 hours
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Access to community forum
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Monthly performance reports
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button
                                    aria-describedby="tier-starter"
                                    className="mt-8 bg-black text-white hover:ring-2 ring-offset-2 dark:ring-offset-2 transition duration-200 ring-black dark:ring-white dark:text-black dark:bg-white rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                                >
                                    Browse Starter
                                </button>
                            </div>
                        </div>
                        <div className="bg-neutral-100/60 dark:bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between">
                            <div className="">
                                <h3
                                    id="tier-medium"
                                    className="text-neutral-700 dark:text-neutral-400 text-base font-semibold leading-7"
                                >
                                    Medium
                                </h3>
                                <p className="mt-4">
                                    <span
                                        className="text-4xl font-bold tracking-tight inline-block text-neutral-900 dark:text-neutral-200"
                                        style={{
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            willChange: "auto",
                                            transform: "none",
                                        }}
                                    >
                                        $8/mo
                                    </span>
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-300 mt-6 text-sm leading-7 h-12 md:h-12 xl:h-12">
                                    Perfect for creaters between 10k - 100k
                                </p>
                                <ul
                                    role="list"
                                    className="text-neutral-600 dark:text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Everything in Starter, plus
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Manage up to 5 channels
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Priority video upload support
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Email support within 24 hours
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Access to exclusive webinars
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Monthly strategy sessions
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Advanced analytics reports
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button
                                    aria-describedby="tier-medium"
                                    className="mt-8 bg-black text-white hover:ring-2 ring-offset-2 dark:ring-offset-2 transition duration-200 ring-black dark:ring-white dark:text-black dark:bg-white rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <div className="relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#2563eb_0%,#1e40af_48.73%)] shadow-2xl rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between">
                            <div className="">
                                <h3
                                    id="tier-influencer"
                                    className="text-white text-base font-semibold leading-7"
                                >
                                    Influencer
                                </h3>
                                <p className="mt-4">
                                    <span
                                        className="text-4xl font-bold tracking-tight inline-block text-white"
                                        style={{
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            willChange: "auto",
                                            transform: "none",
                                        }}
                                    >
                                        $12/mo
                                    </span>
                                </p>
                                <p className="text-neutral-300 mt-6 text-sm leading-7 h-12 md:h-12 xl:h-12">
                                    Perfect for creaters between 100k - 1m
                                </p>
                                <ul
                                    role="list"
                                    className="text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Everything in Starter, plus
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Manage up to 10 channels
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Priority video upload support
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Email support within 12 hours
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Access to private creator
                                        community
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Monthly strategy sessions
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-white h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Advanced analytics and insights
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button
                                    aria-describedby="tier-influencer"
                                    className="mt-8 hover:ring-2 ring-offset-2 dark:ring-offset-2 transition duration-200 ring-black dark:ring-white dark:text-black rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full bg-white dark:bg-white text-black shadow-sm hover:bg-white/90 focus-visible:outline-white"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <div className="bg-neutral-100/60 dark:bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between">
                            <div className="">
                                <h3
                                    id="tier-celebrity"
                                    className="text-neutral-700 dark:text-neutral-400 text-base font-semibold leading-7"
                                >
                                    Celebrity
                                </h3>
                                <p className="mt-4">
                                    <span
                                        className="text-4xl font-bold tracking-tight inline-block text-neutral-900 dark:text-neutral-200"
                                        style={{
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            willChange: "auto",
                                            transform: "none",
                                        }}
                                    >
                                        Contact Us
                                    </span>
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-300 mt-6 text-sm leading-7 h-12 md:h-12 xl:h-12">
                                    Perfect for creaters between 1m - 100m
                                </p>
                                <ul
                                    role="list"
                                    className="text-neutral-600 dark:text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Everything in Influencer, plus
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Manage unlimited channels
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>24/7 priority support
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Access to VIP creator community
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Weekly strategy sessions
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Comprehensive analytics and
                                        insights
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-neutral-700 dark:text-neutral-400 h-6 w-5 flex-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                fill="currentColor"
                                                strokeWidth="0"
                                            >
                                            </path>
                                        </svg>Custom branding and design
                                        services
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button
                                    aria-describedby="tier-celebrity"
                                    className="mt-8 bg-black text-white hover:ring-2 ring-offset-2 dark:ring-offset-2 transition duration-200 ring-black dark:ring-white dark:text-black dark:bg-white rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
