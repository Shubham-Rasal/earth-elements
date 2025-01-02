'use client';

import { useRouter } from "next/navigation";

export default function Badge({
    variant = 'default',
    className,
    children,
    category,
    ...props
  }: React.ComponentPropsWithoutRef<'button'> & {
    variant?: 'default' | 'outline' | 'secondary'
    category?: string
  }) {
    const variants: Record<typeof variant, string> = {
      default:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-gray-300',
      outline:
        'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-300',
      secondary:
        'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-600',
    }

    const router = useRouter();  
    return (
      <button
      onClick={() => router.push(`?category=${category}`)}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  