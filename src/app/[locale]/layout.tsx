import { ReactNode } from 'react'
import { Inter as FontSans } from '@next/font/google'
import { MainLayout } from 'components/main-layout'
import { useLocale, useTranslations } from 'next-intl'

import 'styles/globals.css'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export default async function RootLayout({ children }) {
	const locale = useLocale()

	return (
		<html lang={locale} className={fontSans.className}>
			<head />
			<MainLayout>{children}</MainLayout>
		</html>
	)
}
