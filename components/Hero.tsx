"use client";

import { CaretRight } from "@phosphor-icons/react";
import Button from "./Button";
import NextVideoPlayer from "./NextVideoPlayer";

export function Hero() {
  return (
    <div className="z-0 flex flex-col items-center justify-center text-center min-h-screen relative">
      {
        /* <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        /> */
      }
      {/* </svg> */}
      {
        /* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 400"
        className="w-screen absolute bottom-0 z-[999]"
      >
        <defs>
          <linearGradient id="fade" x1="1" x2="1" y1="0" y2="1">
            <stop offset="40%" stopColor="white" stopOpacity="0" />
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="950%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#fade)" />
      </svg> */
      }

      <div className="flex flex-col flex-grow justify-start items-center pt-60">
        <span className="group text-[16px] hover:cursor-pointer items-center mb-4 inline-flex rounded-md bg-blue-50 px-[20px] py-[9px] text-xs font-bold text-blue-700">
          {"The  #1 platform in AI for business".toUpperCase()}
        </span>

        <h1 className="font-semibold mx-auto max-w-6xl font-display text-5xl font-urbanist tracking-tight text-slate-800 sm:text-7xl">
          Commodity Codes,{" "}
          <span className="font-bold relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative font-bold">Decoded</span>
          </span>
        </h1>

        <p className="text-slate-800 mx-auto mt-6 max-w-2xl text-lg tracking-tigh font-urbanist font-normal">
          Commodity Codes can be an expensive headache. Simplify and save using
          our AI-driven classification engine.
        </p>

        <Button
          className="py-3.5 mt-8"
          variant="primary"
          Icon={{ Icon: CaretRight, props: { weight: "bold" } }}
        >
          <p>Get started for FREE!</p>
        </Button>
        <div className="flex justify-center pt-2 text-xs text-gray-500">
          <p>No credit card required</p>
        </div>
      </div>
      <NextVideoPlayer
        className="mx-auto !w-[1200px] py-24 rounded-xl"
        autoplay
        playbackId="01hfIDB95BuF4xdoix0216Gd67O01D36f8b9UThWDghSOQ"
      />
    </div>
  );
}
