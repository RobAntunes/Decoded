import wave from "../public/blue-wave.jpg";
import Image from "next/image";

export default function Bento() {
  return (
    <div className="bg-white pb-24 sm:pb-32  pt-8 relative">
      <Image
        className="absolute inset-0"
        src={wave.src}
        height={wave.height}
        width={wave.width}
        alt="decoration"
      />
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="z[999] relative font-semibold text-blue-600">
          Solving problems by adding value
        </p>
        <h2 className="relative z-[999] text-6xl font-semibold text-zinc-800">
          Save{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-600">
            Time
          </span>{" "}
          and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-600">
            Money.
          </span>
          <br />
          <p>
            A Comprehensive{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-600">
              Solution.
            </span>
          </p>
        </h2>
        <p className="z-[999] relative mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-blue-600">
                  AI vision
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Instant AI Classification
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Upload products via text, image, or voice for immediate
                  commodity code classification. Our AI understands context and
                  delivers results in seconds with confidence scores to guide
                  your decisions.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-blue-600">
                  Get it done
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Reduce Procedure Duration
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Commodity Code operations in a fraction of the time. What used
                  to take days or weeks now takes minutes.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-blue-600">
                  Work smarter
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Batch Operations and Bulk Processing
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Process thousands of SKUs instantly with automatic error
                  detection and data cleaning.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-blue-600">No sweat</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Real-Time Compliance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Automatic cross-checking against global customs regulations
                  and instant alerts for sanctions.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-blue-600">
                  Got your back
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI-driven Knowledge-Hub & support
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Get instant guidance on complex classifications with our AI
                  chatbot and knowledge hub.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
