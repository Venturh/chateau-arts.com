import { Inter as FontSans } from '@next/font/google'
import { useLocale } from 'next-intl'

import { MainLayout } from '@/components/main-layout'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export default async function RootLayout({ children }) {
	const locale = useLocale()

	return (
		<html
			lang={locale}
			className={cn('h-full scroll-smooth bg-white antialiased', fontSans.className)}
		>
			<head></head>
			<body className="flex h-full flex-col">
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
