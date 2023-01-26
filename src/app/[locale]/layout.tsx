import { ReactNode } from 'react'
import { Inter as FontSans } from '@next/font/google'
import Layout from 'components/layout'
import { useLocale } from 'next-intl'

import 'styles/globals.css'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

type Props = {
	children: ReactNode
}

export default async function RootLayout({ children }) {
	const locale = useLocale()
	return (
		<html lang={locale} className={fontSans.className}>
			<head />
			<body>{children}</body>
		</html>
	)
}
