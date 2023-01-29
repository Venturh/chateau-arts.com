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
		{ name: t('home'), href: `/${locale}` },
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
			{ name: t('privacy'), href: `/${locale}/privacy` },
			{ name: t('disclosure'), href: `/${locale}/discloser` },
		],
	}

	return (
		<div className="flex h-screen flex-col">
			<MainNavigation navigation={navigation} locale={locale} />

			<main className="mx-auto w-full max-w-5xl grow px-6 py-12 lg:px-8">{children}</main>
			<Footer languageLocale={t('language')} locale={locale} footer={footer} />
		</div>
	)
}
