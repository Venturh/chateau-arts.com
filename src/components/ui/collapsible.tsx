'use client'

import { ReactNode, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import { cn } from '@/lib/utils'

type Props = {
	title: string
	content: (string | ReactNode)[]
}

export function Collapsible({ title, content }: Props) {
	const [open, setOpen] = useState(false)
	return (
		<CollapsiblePrimitive.Root open={open} onOpenChange={setOpen}>
			<CollapsiblePrimitive.Trigger
				className={cn(
					'group flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium'
				)}
			>
				<div>{title}</div>
				<PlusIcon
					className={cn('group-radix-state-open:rotate-90" h-4 w-4 duration-300 ease-in-out')}
				/>
			</CollapsiblePrimitive.Trigger>
			<CollapsiblePrimitive.Content className="mt-4 flex flex-col space-y-4">
				{content.map((c, i) => (
					<div
						key={`collapsible-${title}-${i}`}
						className={cn(
							'group',
							'flex select-none items-center justify-between rounded-md px-4 py-2 text-sm leading-6 text-gray-600 hover:text-gray-900'
						)}
					>
						{c}
					</div>
				))}
			</CollapsiblePrimitive.Content>
		</CollapsiblePrimitive.Root>
	)
}
