'use client'

import { LocalizedLink } from 'next-intl'
import type { LinkProps } from 'next/link'

type Props = {
	children: React.ReactNode
	className?: string
} & LinkProps

export function Link({ children, ...props }: Props) {
	return (
		//@ts-expect-error - next-intl
		<LocalizedLink {...props}>{children}</LocalizedLink>
	)
}
