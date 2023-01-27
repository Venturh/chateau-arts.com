import type { LinkProps } from 'next/link'
import { LocalizedLink } from 'next-intl'

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
