'use client'

import { Button, ButtonProps } from './button'

type Props = {
	targetId: string
} & ButtonProps

export function ScrollToButton({ targetId, ...rest }: Props) {
	function scrollToId() {
		const target = document.getElementById(targetId)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<Button {...rest} onClick={() => scrollToId()}>
			{rest.children}
		</Button>
	)
}
