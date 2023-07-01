import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { Link, useLocale } from 'next-intl'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 dark:ring-neutral-700 focus:ring-neutral-300 dark:focus:ring-neutral-700 focus:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  data-[state=open]:bg-neutral-100',
	{
		variants: {
			variant: {
				default:
					'bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 text-white dark:hover:bg-neutral-200 hover:bg-neutral-700',
				outline:
					'bg-transparent border border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 hover:bg-neutral-100  ',
				subtle: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200  ',
				ghost:
					'bg-transparent hover:bg-neutral-100 :bg-neutral-800  :text-neutral-100 data-[state=open]:bg-transparent [state=open]:bg-transparent dark:text-neutral-100  dark:hover:bg-neutral-800 dark:[state=open]:bg-neutral-800',

				link: 'bg-transparent underline-offset-4 hover:underline text-neutral-900  hover:bg-transparent :bg-transparent',
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-2 rounded-md',
				lg: 'h-11 px-6 rounded-md',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}
export interface LinkProps
	extends React.LinkHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		)
	}
)
const ButtonLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ className, variant, size, ...props }, ref) => {
		const locale = useLocale()
		return (
			<Link
				locale={locale}
				href={''}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)

Button.displayName = 'Button'
ButtonLink.displayName = 'ButtonLink'

export { Button, ButtonLink, buttonVariants }
