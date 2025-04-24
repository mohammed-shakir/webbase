'use client';

import { useUser } from '@auth0/nextjs-auth0';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/feedback', label: 'Feedback' },
  { href: '/announcements', label: 'Announcements' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, isLoading } = useUser();

  return (
    <nav className="mb-8 border-b border-gray-200 py-4 dark:border-gray-700">
      <div className="container mx-auto flex items-center gap-8 px-4">
        <Link href="/">
          <Image
            src="/assets/images/web-app-manifest-192x192.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        <ul className="flex flex-1 gap-6 text-sm">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'transition-colors duration-150 hover:text-gray-600 dark:hover:text-gray-300',
                  pathname === item.href
                    ? 'font-semibold text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-400',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          {isLoading ? (
            <span className="text-gray-500 dark:text-gray-400">Loading…</span>
          ) : !user ? (
            <a href="/auth/login" className="text-indigo-600 underline dark:text-indigo-400">
              Login
            </a>
          ) : (
            <>
              <span className="mr-4 text-gray-900 dark:text-gray-100">Hello, {user.name}</span>
              <a href="/auth/logout" className="text-indigo-600 underline dark:text-indigo-400">
                Logout
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
