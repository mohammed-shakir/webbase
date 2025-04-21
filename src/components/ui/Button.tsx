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
      className={clsx(
        'px-4 py-2 rounded font-medium transition-colors duration-150 disabled:opacity-50',
        variant === 'default' && 'bg-black text-white hover:bg-gray-800',
        variant === 'outline' && 'border border-gray-300 text-black hover:bg-gray-100',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-red-500',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
