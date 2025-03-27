// components/navigation/MegaMenu.tsx
import * as Headless from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MegaMenuCTA } from "./MegaMenuCTA";
import { BusinessType, INavigation, MenuItem } from "@/types/navigation";
import { useEffect, useRef } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface ExtendedMegaMenuProps {
  buttonText: string;
  navigation: INavigation;
  callsToAction: MenuItem[];
}

export function MegaMenu(
  { buttonText, callsToAction }: ExtendedMegaMenuProps,
) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const businessTypes: BusinessType[] = ["eCommerce", "Enterprise"];

  const nav = {
    products: [{
      name: "Decoded",

      icon: null,
      features: [
        {
          id: "commodity-codes",
          name: "Commodity Codes",
          description:
            "AI-powered classification of goods for accurate HS/HTS codes and duty calculations.",
          type: "eCommerce",
        },
        {
          id: "landed-cost",
          name: "Landed Cost Calculator",
          type: "eCommerce",
        },
        {
          id: "growth-engine",
          name: "Business Growth Engine",
          type: "eCommerce",
        },
      ],
    }, {
      name: "Decoded",
      features: [
        {
          id: "commodity-codes",
          name: "Commodity Codes",
          description:
            "Calculate complete import costs including duties, taxes, and fees for accurate landed cost estimation.",
          type: "Enterprise",
        },
        {
          id: "sourcing-optimizer",
          name: "Sourcing Optimizer",
          type: "Enterprise",
        },
        {
          id: "enterprise-analytics",
          name: "Enterprise Analytics",
          type: "Enterprise",
        },
      ],
    }],
  };

  // Set up global click handler to close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Get the path of DOM elements the click went through
      const path = event.composedPath();

      // If the click wasn't on any element in our menu or button
      if (
        menuRef.current && !path.includes(menuRef.current) &&
        buttonRef.current && !path.includes(buttonRef.current)
      ) {
        // Find and click the button to close the menu
        const button = buttonRef.current;
        if (button && button.getAttribute("aria-expanded") === "true") {
          button.click();
        }
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Headless.Popover className="relative">
      {({ open }) => {
        return (
          <>
            <Headless.Popover.Button
              ref={buttonRef}
              className="ring-0 outline-none border-none inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
            >
              {buttonText}
              <ChevronDownIcon
                aria-hidden="true"
                className={`size-5 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Headless.Popover.Button>

            {open && (
              <div ref={menuRef}>
                <Headless.Popover.Panel
                  static
                  className="absolute left-1/2 z-50 mt-3 w-screen max-w-4xl -translate-x-1/4 transform px-4"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="relative bg-white p-7">
                      {
                        <div className="tree-menu">
                          {/* Product Title with Icon */}
                          <div className="flex items-center border-b pb-4 mb-4">
                            <h3 className="text-xl font-medium text-gray-900">
                              {nav.products.map((product) => product.name)}
                            </h3>
                          </div>

                          {/* Tree structure */}
                          <Tab.Group>
                            <div className="flex">
                              {/* Left side: Business Type tabs in column layout */}
                              <div className="w-1/4 border-r pr-4">
                                <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                  Business Types
                                </h4>
                                <Tab.List className="flex flex-col space-y-1">
                                  {businessTypes.map((type) => (
                                    <Tab
                                      key={type}
                                      className={({ selected }) =>
                                        `py-2 px-3 text-left rounded-md focus:outline-none transition-colors ${
                                          selected
                                            ? "bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600"
                                            : "text-gray-700 hover:bg-gray-50 border-l-4 border-transparent"
                                        }`}
                                    >
                                      {type}
                                    </Tab>
                                  ))}
                                </Tab.List>
                              </div>

                              {/* Right side: Features and Content */}
                              <div className="w-3/4 pl-6">
                                <Tab.Panels>
                                  {nav.products.map((product, i) => {
                                    return (
                                      <Tab.List key={i}>
                                        <Tab.Panel>
                                          <div className="flex flex-col space-y-4">
                                            {product.features
                                              .map((el, j) => {
                                                return (
                                                  <div key={j}>
                                                    <Link
                                                      className="block py-2 px-3 text-gray-700 hover:bg-gray-100 bg-gray-100 rounded-md border-l-4 border-gray-500"
                                                      href={`/solutions/${product.name.toLowerCase()}/${el.type.toLowerCase()}/${el.id}`}
                                                    >
                                                      <div className="flex items-center justify-between">
                                                        <p className="mb-1">
                                                          {el.name}
                                                        </p>
                                                        <ChevronRightIcon className="w-5 h-5 inline-block" />
                                                      </div>
                                                      <p className="text-sm text-gray-500">
                                                        {el.description}
                                                      </p>
                                                    </Link>
                                                  </div>
                                                );
                                              })}
                                          </div>
                                        </Tab.Panel>
                                      </Tab.List>
                                    );
                                  })}
                                </Tab.Panels>
                              </div>
                            </div>
                          </Tab.Group>
                        </div>
                      }
                    </div>
                    <MegaMenuCTA items={callsToAction} />
                  </div>
                </Headless.Popover.Panel>
              </div>
            )}
          </>
        );
      }}
    </Headless.Popover>
  );
}
