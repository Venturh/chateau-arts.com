import React from 'react'

type Props = {
	text: string
	icon?: React.ReactElement
}
export default function EmptyState({ text, icon }: Props) {
	return (
		<div className="relative block w-full rounded-lg border-2 p-12 text-center focus:outline-none dark:border-neutral-800">
			{icon && React.cloneElement(icon, { className: 'mx-auto h-10 w-10 text-gray-400' })}
			<span className="mt-2 block text-sm font-medium text-gray-900 dark:text-neutral-100">
				{text}
			</span>
		</div>
	)
}
