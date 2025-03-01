// components/navigation/MegaMenu.tsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { MegaMenuItem } from './MegamenuItem';
import { MegaMenuCTA } from './MegaMenuCTA';
import { MegaMenuProps } from '@/types/navigation';

export function MegaMenu({ buttonText, mainItems, callsToAction }: MegaMenuProps) {
  // Calculate the number of items per column
  const itemsPerColumn = Math.ceil(mainItems.length / 2);
  const firstColumn = mainItems.slice(0, itemsPerColumn);
  const secondColumn = mainItems.slice(itemsPerColumn);

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        {buttonText}
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel className="absolute left-1/2 z-50 mt-3 w-screen max-w-4xl -translate-x-1/4 transform px-4">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative bg-white p-7">
            <div className="grid grid-cols-2 gap-x-8">
              <div className="flex flex-col gap-y-4">
                {firstColumn.map((item) => (
                  <MegaMenuItem key={item.name} item={item} />
                ))}
              </div>
              <div className="flex flex-col gap-y-4">
                {secondColumn.map((item) => (
                  <MegaMenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
          <MegaMenuCTA items={callsToAction} />
        </div>
      </PopoverPanel>
    </Popover>
  );
}