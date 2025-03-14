// components/navigation/MegaMenu.tsx
import * as Headless from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { MegaMenuCTA } from './MegaMenuCTA';
import { INavigation, BusinessType, MenuItem } from '@/types/navigation';
import { useRef, useEffect } from 'react';
import { Tab } from '@headlessui/react';

interface ExtendedMegaMenuProps {
  buttonText: string;
  navigation: INavigation;
  callsToAction: MenuItem[];
}

export function MegaMenu({ buttonText, navigation, callsToAction }: ExtendedMegaMenuProps) {  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const businessTypes: BusinessType[] = ["Enterprise", "eCommerce"];
  
  const featureTabs = [
    { id: 'commodity-codes', name: 'Commodity Codes' },
    { id: 'landed-cost', name: 'Landed Cost Calculator' },
    { id: 'growth-engine', name: 'Business Growth Engine' }
  ];
  
  // Filter to show only Decoded
  const decodedProduct = navigation.products.find(product => product.name === 'Decoded');
  
  // Set up global click handler to close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Get the path of DOM elements the click went through
      const path = event.composedPath();
      
      // If the click wasn't on any element in our menu or button
      if (menuRef.current && !path.includes(menuRef.current) && 
          buttonRef.current && !path.includes(buttonRef.current)) {
        // Find and click the button to close the menu
        const button = buttonRef.current;
        if (button && button.getAttribute('aria-expanded') === 'true') {
          button.click();
        }
      }
    }
    
    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Headless.Popover className="relative">
      {({ open }) => (
        <>
          <Headless.Popover.Button ref={buttonRef} className="ring-0 outline-none border-none inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            {buttonText}
            <ChevronDownIcon 
              aria-hidden="true" 
              className={`size-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
            />
          </Headless.Popover.Button>

          {open && (
            <div ref={menuRef}>
              <Headless.Popover.Panel static className="absolute left-1/2 z-50 mt-3 w-screen max-w-4xl -translate-x-1/4 transform px-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative bg-white p-7">
                    {decodedProduct && (
                      <div className="tree-menu">
                        {/* Product Title with Icon */}
                        <div className="flex items-center border-b pb-4 mb-4">
                          {decodedProduct.icon && (
                            <decodedProduct.icon aria-hidden="true" className="size-6 text-blue-600 mr-2" />
                          )}
                          <h3 className="text-xl font-medium text-gray-900">{decodedProduct.name}</h3>
                        </div>
                        
                        {/* Tree structure */}
                        <Tab.Group>
                          <div className="flex">
                            {/* Left side: Business Type tabs in column layout */}
                            <div className="w-1/4 border-r pr-4">
                              <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">Business Types</h4>
                              <Tab.List className="flex flex-col space-y-1">
                                {businessTypes.map(type => (
                                  <Tab
                                    key={type}
                                    className={({ selected }) =>
                                      `py-2 px-3 text-left rounded-md focus:outline-none transition-colors ${
                                        selected
                                          ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600'
                                          : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                                      }`
                                    }
                                  >
                                    {type}
                                  </Tab>
                                ))}
                              </Tab.List>
                            </div>
                            
                            {/* Right side: Features and Content */}
                            <div className="w-3/4 pl-6">
                              <Tab.Panels>
                                {businessTypes.map(type => (
                                  <Tab.Panel key={type} className="focus:outline-none">
                                    <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Features</h4>
                                    <Tab.Group>
                                      <Tab.List className="flex flex-col space-y-1">
                                        {featureTabs.map(tab => (
                                          <Tab
                                            key={tab.id}
                                            className={({ selected }) =>
                                              `py-2 px-3 text-left rounded-md focus:outline-none transition-colors ${
                                                selected
                                                  ? 'bg-gray-100 text-gray-900 font-medium border-l-4 border-gray-400'
                                                  : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                                              }`
                                            }
                                          >
                                            {tab.name}
                                          </Tab>
                                        ))}
                                      </Tab.List>
                                      
                                      <Tab.Panels className="mt-4 bg-gray-50 rounded-lg border p-4">
                                        {featureTabs.map(tab => (
                                          <Tab.Panel key={tab.id} className="focus:outline-none">
                                            <h5 className="text-sm font-semibold text-gray-900 mb-2">
                                              {decodedProduct.name}: {tab.name} for {type}
                                            </h5>
                                            <p className="text-sm text-gray-600 mb-3">
                                              {decodedProduct.businessTypes[type]?.description || decodedProduct.description}
                                            </p>
                                            <a 
                                              href={decodedProduct.businessTypes[type]?.href || decodedProduct.href} 
                                              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                                            >
                                              Learn more
                                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                              </svg>
                                            </a>
                                          </Tab.Panel>
                                        ))}
                                      </Tab.Panels>
                                    </Tab.Group>
                                  </Tab.Panel>
                                ))}
                              </Tab.Panels>
                            </div>
                          </div>
                        </Tab.Group>
                      </div>
                    )}
                  </div>
                  <MegaMenuCTA items={callsToAction} />
                </div>
              </Headless.Popover.Panel>
            </div>
          )}
        </>
      )}
    </Headless.Popover>
  );
}