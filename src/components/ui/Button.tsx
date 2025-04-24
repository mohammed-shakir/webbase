import clsx from 'clsx';

import type { ButtonProps } from '@/types/ui';

export default function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded px-4 py-2 font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50',
        {
          'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100':
            variant === 'default',
          'border border-gray-300 text-black hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800':
            variant === 'outline',
          'bg-red-600 text-white hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400':
            variant === 'danger',
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
