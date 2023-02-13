'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'

import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types/nav'
import { LanguageSelect } from './language-select'

type Props = {
	navigation: NavItem[]
	locale: string
}

export function MainNavigation({ navigation, locale }: Props) {
	const pathName = usePathname()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	function isActive(href: string) {
		const pathNameWithoutLocale = pathName.replace(`/${locale}`, '')
		const hrefWithoutLocale = href.replace(`/${locale}`, '')

		if (pathNameWithoutLocale === '' && hrefWithoutLocale === '') return true

		return pathNameWithoutLocale.startsWith(hrefWithoutLocale) && hrefWithoutLocale !== ''
	}

	return (
		<div className="border-b border-gray-900/10 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Logo />
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-4">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium',
								isActive(item.href)
									? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-neutral-100'
									: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900  dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
							)}
						>
							{item.name}
						</Link>
					))}
					<LanguageSelect locale={locale} />
				</div>
			</nav>
			<Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
				<Dialog.Content className="absolute inset-x-0 top-0 z-50 origin-top px-2 transition md:hidden">
					<div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
						<div className="flex items-center justify-between border-b  px-4 py-3 ">
							<Logo />
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-2 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={cn(
												'block rounded-md py-2 px-3 text-sm font-medium',
												isActive(item.href)
													? 'bg-gray-100 text-gray-900 dark:text-neutral-100'
													: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-neutral-100'
											)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	)
}
