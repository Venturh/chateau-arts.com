'use client'

import { useRouter } from 'next/navigation'
import { languages } from '@/sanity/i18n'
import { ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import * as SelectPrimitive from '@radix-ui/react-select'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'

type Props = {
	locale: string
}

export function LanguageSelect({ locale }: Props) {
	const { push } = useRouter()
	function onLocaleChange(newLocale: string) {
		push(`/${newLocale}`)
	}

	return (
		<SelectPrimitive.Root defaultValue={locale} onValueChange={onLocaleChange}>
			<SelectPrimitive.Trigger asChild aria-label="languages">
				<Button variant="outline" size="sm">
					<SelectPrimitive.Value />
					<SelectPrimitive.Icon className="ml-2">
						<ChevronUpDownIcon className="h-4 w-4" />
					</SelectPrimitive.Icon>
				</Button>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Content>
				<SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700">
					<ChevronUpIcon />
				</SelectPrimitive.ScrollUpButton>
				<SelectPrimitive.Viewport className="rounded-lg bg-white p-2 shadow-lg dark:bg-zinc-800 ">
					<SelectPrimitive.Group>
						{languages.map(({ id, title }, i) => (
							<SelectPrimitive.Item
								disabled={id === locale}
								key={id}
								value={id}
								className={cn(
									'relative flex items-center rounded-md px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100 dark:text-zinc-200 dark:focus:bg-zinc-700',
									'radix-disabled:opacity-50',
									'select-none focus:outline-none'
								)}
							>
								<SelectPrimitive.ItemText>{title}</SelectPrimitive.ItemText>
							</SelectPrimitive.Item>
						))}
					</SelectPrimitive.Group>
				</SelectPrimitive.Viewport>
				<SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700">
					<ChevronDownIcon className="h-4 w-4" />
				</SelectPrimitive.ScrollDownButton>
			</SelectPrimitive.Content>
		</SelectPrimitive.Root>
	)
}
