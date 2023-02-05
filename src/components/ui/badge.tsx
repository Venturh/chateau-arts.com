import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

interface Props extends React.HtmlHTMLAttributes<HTMLSpanElement>, VariantProps<typeof variants> {}

const variants = cva(
	'inline-flex items-center rounded bg-blue-100 text-sm font-medium text-blue-800',
	{
		variants: {
			size: {
				default: 'px-1 py-[1px] text-[11px]',
				lg: 'px-2.5 py-0.5',
			},
		},
		defaultVariants: {
			size: 'default',
		},
	}
)

export function Badge({ children, size }: Props) {
	return <span className={cn(variants({ size }))}>{children}</span>
}
