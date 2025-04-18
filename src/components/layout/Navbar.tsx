'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/feedback', label: 'Feedback' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="mb-8 border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center px-4 gap-8">
      <Link href="/">
        <Image
            src="/assets/images/logo.svg"
            alt="Company Logo"
            width={40}
            height={40}
            priority
        />
        </Link>

        <ul className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'hover:text-gray-500 transition-colors duration-100',
                  pathname === item.href && 'font-semibold'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
