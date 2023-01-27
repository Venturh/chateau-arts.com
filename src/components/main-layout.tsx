import { ReactNode } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Footer } from './footer'
import { MainNavigation } from './main-navigation'

type Props = {
	children: ReactNode
}

export function MainLayout({ children }: Props) {
	const locale = useLocale()
	const t = useTranslations()

	const navigation = [
		{ name: t('home'), href: `/${locale}/` },
		{ name: t('exhibitions'), href: `/${locale}/exhibitions` },
		{ name: t('exhibits'), href: `/${locale}/exhibits` },
	]

	const footer = {
		[t('pages')]: navigation,
		[t('social')]: [
			{
				name: 'Instagram',
				href: 'https://instagram.com',
				external: true,
			},
			{
				name: 'Email',
				href: 'mailto:elisabeth.werpers@gmail.com',
				external: true,
			},
		],
		[t('legal')]: [
			{ name: t('disclosure'), href: `/${locale}/discloser` },
			{ name: t('privacy'), href: `/${locale}/privacy` },
		],
	}

	return (
		<>
			<header>
				<MainNavigation navigation={navigation} />
			</header>
			<main className="mx-auto h-full w-full max-w-5xl px-6 py-3 pt-20 pb-16 lg:px-8">
				{children}
			</main>
			<Footer footer={footer} />
		</>
	)
}
