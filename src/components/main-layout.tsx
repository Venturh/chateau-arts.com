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
		{ name: t('about'), href: `/${locale}/about` },
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
				href: 'mailto:info@elisabethwerpers.com',
				external: true,
			},
		],
		[t('legal')]: [
			{ name: t('disclosure'), href: `/${locale}/impressum` },
			{ name: t('privacy'), href: `/${locale}/datenschutz` },
		],
	}

	return (
		<div className="flex min-h-screen flex-col text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
			<MainNavigation navigation={navigation} locale={locale} />
			<main className="mx-auto w-full max-w-7xl grow px-6 pb-24 pt-6 lg:px-8">{children}</main>
			<Footer languageLocale={t('language')} locale={locale} footer={footer} />
		</div>
	)
}
