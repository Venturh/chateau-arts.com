'use client'

import Link from 'next/link'

import { Collapsible } from '@/components/ui/collapsible'
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
	const footerItems = Object.entries(footer).map(([title, values]) => ({
		title,
		content: values.map(({ href, name, external }) =>
			external ? (
				<a href={href} key={name} rel="noopener noreferrer" target="_blank">
					{name}
				</a>
			) : (
				<Link href={href} key={name}>
					{name}
				</Link>
			)
		),
	}))
	return (
		<div className="flex w-full flex-col space-y-6 border-t border-gray-900/10 bg-gray-50 pt-6 text-base">
			<div className="mx-auto w-full max-w-5xl px-6 py-3 lg:px-8">
				<div className="hidden pb-4 md:grid md:grid-cols-4 md:gap-4">
					{footerItems.map(({ title, content }) => (
						<div className="space-y-2" key={title}>
							<span className="text-sm font-semibold leading-6 text-gray-900">{title}</span>
							<div className="flex w-min flex-col space-y-3 text-sm leading-6 text-gray-600 hover:text-gray-900 ">
								{content.map((c) => c)}
							</div>
						</div>
					))}

					<div className="space-y-2">
						<h3 className="text-secondary text-xs uppercase tracking-wider">{languageLocale}</h3>
						<LanguageSelect locale={locale} />
					</div>
				</div>
				<div className="space-y-2 md:hidden">
					{footerItems.map(({ title, content }, i) => (
						<Collapsible title={title} content={content} key={i} />
					))}
					<div className=" flex items-center justify-between px-4 pb-4 ">
						<span className="text-sm">{languageLocale}</span>
						<LanguageSelect locale={locale} />
					</div>
				</div>
				<div className="flex items-center justify-between border-t py-6">
					<span>© {new Date().getFullYear()}</span>
					<Logo />
				</div>
			</div>
		</div>
	)
}
