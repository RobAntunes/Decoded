import { MenuItem } from "@/types/navigation";
import Link from "next/link";

interface MegaMenuCTAProps {
    items: MenuItem[];
}

export function MegaMenuCTA({ items }: MegaMenuCTAProps) {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-x-2.5 p-3 px-6 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0"
                        >
                            {item.icon && (
                                <item.icon
                                    aria-hidden="true"
                                    className="size-5 flex-none text-gray-400"
                                />
                            )}
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
