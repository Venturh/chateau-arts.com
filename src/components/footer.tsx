'use client'

import Link from 'next/link'

import { Collapsible } from '@/components/ui/collapsible'
import { NavItem } from '@/types/nav'

type Props = {
	footer: {
		[key: string]: NavItem[]
	}
}

export function Footer({ footer }: Props) {
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
				<div className="hidden md:grid md:grid-cols-4 md:gap-4">
					{footerItems.map(({ title, content }) => (
						<div className="space-y-2" key={title}>
							<span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
								{title}
							</span>
							<div className="flex flex-col space-y-3 ">{content.map((c, idx) => c)}</div>
						</div>
					))}

					<div className="space-y-2">
						{/* <h3 className="text-secondary text-xs font-semibold uppercase tracking-wider">
							{t('language')}
						</h3>
						<LanguageDropdown display /> */}
					</div>
				</div>
				<div className="space-y-2   md:hidden">
					{footerItems.map(({ title, content }, i) => (
						<Collapsible title={title} content={content} key={i} />
					))}
					{/* <div className="footer-center flex justify-between px-4 py-2">
						<span className="text-sm">{t('language')}</span>
						<LanguageDropdown display />
					</div> */}
				</div>
				{/* <div className="border-accent lg:footer-center border-t pt-8 lg:flex lg:justify-between xl:mt-0">
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							{t('newsletter_title')}
						</h3>
						<p className="mt-2 md:w-3/4">{t('newsletter_description')}</p>
					</div>
					<Newsletter />
				</div> */}
				<div className="flex justify-between border-t py-6">
					<span>© 2021</span>
					<span>Dr. Elisabeth Werpers</span>
				</div>
			</div>
		</div>
	)
}
