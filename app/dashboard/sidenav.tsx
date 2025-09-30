'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, UserGroupIcon, DocumentDuplicateIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import AcmeLogo from '@/app/ui/acme-logo';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-200 hover:bg-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      <div
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-blue-100 duration-300 md:relative md:translate-x-0',
          { '-translate-x-full': !isOpen, 'translate-x-0': isOpen }
        )}
      >
        <div className="flex items-center justify-center p-6 border-b border-blue-300">
          <AcmeLogo />
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {links.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
                  { 'bg-sky-100 text-blue-600': isActive }
                )}
                onClick={() => setIsOpen(false)}
              >
                <LinkIcon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

    </>
  );
}


