// components/navigation/MegaMenu.tsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { MegaMenuItem } from './MegamenuItem';
import { MegaMenuCTA } from './MegaMenuCTA';
import { INavigation, MenuSectionType, MegaMenuProps } from '@/types/navigation';
import { useRef, useEffect } from 'react';

interface ExtendedMegaMenuProps extends Omit<MegaMenuProps, 'mainItems' | 'navigation'> {
  navigation: INavigation;
}

export function MegaMenu({ buttonText, navigation, callsToAction }: ExtendedMegaMenuProps) {  
  // Calculate the number of items per column
  const keys = Object.keys(navigation);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
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
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton ref={buttonRef} className="ring-0 outline-none border-none inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            {buttonText}
            <ChevronDownIcon 
              aria-hidden="true" 
              className={`size-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
            />
          </PopoverButton>

          {open && (
            <div ref={menuRef}>
              <PopoverPanel static className="absolute left-1/2 z-50 mt-3 w-screen max-w-4xl -translate-x-1/4 transform px-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative bg-white p-7">
                    <div className="gap-x-8 flex justify-between">
                      <div className="grid grid-cols-2 gap-y-4">
                        {keys.map((key) => (
                          <div key={key}>
                           <a href={navigation[key as MenuSectionType]?.link}> <h3 className="text-xl text-blue-600 font-semiboldrounded-lg w-[40%] flex justify-center">{key}</h3></a>
                            <div className="mt-4 space-y-4">
                              {navigation[key as MenuSectionType]?.items.map((item) => (
                                <MegaMenuItem key={item.name} item={item} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-4"> 
                        
                      </div>
                    </div>
                  </div>
                  <MegaMenuCTA items={callsToAction} />
                </div>
              </PopoverPanel>
            </div>
          )}
        </>
      )}
    </Popover>
  );
}