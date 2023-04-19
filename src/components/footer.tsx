'use client'

import { Link } from 'next-intl'

import { NavItem } from '@/types/nav'
import { LanguageSelect } from './language-select'
import { Logo } from './logo'

type Props = {
	locale: string
	languageLocale: string
	footer: {
		[key: string]: NavItem[]
	}
}

export function Footer({ footer, locale, languageLocale }: Props) {
	const className =
		'text-sm leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 '
	const footerItems = Object.entries(footer).map(([title, values]) => ({
		title,
		content: values.map(({ href, name, external }) =>
			external ? (
				<a className={className} href={href} key={name} rel="noopener noreferrer" target="_blank">
					{name}
				</a>
			) : (
				<Link locale={locale} className={className} href={href} key={name}>
					{name}
				</Link>
			)
		),
	}))
	return (
		<div className="flex w-full flex-col space-y-6 border-t border-neutral-900/10 bg-neutral-50 pt-6 text-base dark:border-neutral-800 dark:bg-neutral-900">
			<div className="mx-auto w-full max-w-5xl px-6 py-3 lg:px-8">
				<div className="grid grid-cols-2 gap-8 pb-4 md:grid-cols-4">
					{footerItems.map(({ title, content }) => (
						<div className="space-y-2" key={title}>
							<span className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
								{title}
							</span>
							<div className="flex w-min flex-col space-y-3 ">{content.map((c) => c)}</div>
						</div>
					))}

					<div className="space-y-2">
						<h3 className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
							{languageLocale}
						</h3>
						<LanguageSelect locale={locale} />
					</div>
				</div>

				<div className="flex items-center justify-between border-t py-6 text-sm dark:border-neutral-800">
					<span className="text-neutral-700 dark:text-neutral-300">
						© {new Date().getFullYear()}
					</span>
					<Logo />
				</div>
			</div>
		</div>
	)
}
