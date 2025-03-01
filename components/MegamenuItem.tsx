// components/navigation/MegaMenuItem.tsx
import { MenuItem } from '@/types/navigation';

interface MegaMenuItemProps {
  item: MenuItem;
}

export function MegaMenuItem({ item: { name, description, href, icon: Icon } }: MegaMenuItemProps) {
  return (
    <div className="group relative flex gap-4 rounded-lg p-3 hover:bg-gray-50">
      {Icon && (
        <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <Icon aria-hidden="true" className="size-5 text-gray-600 group-hover:text-blue-600" />
        </div>
      )}
      <div className="flex flex-col min-w-0">
        <a href={href} className="font-semibold text-gray-900">
          {name}
          <span className="absolute inset-0" />
        </a>
        {description && <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>}
      </div>
    </div>
  );
}