import { Inter as FontSans } from 'next/font/google'
import Script from 'next/script'
import { useLocale } from 'next-intl'

import { MainLayout } from '@/components/main-layout'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { notFound } from 'next/navigation'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata = {
	title: {
		default: 'Kunsthandel Elisabeth Werpers',
		template: '%s | Kunsthandel Elisabeth Werpers',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Elisabeth Werpers',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
}

export default async function RootLayout({ children, params }) {
	const locale = useLocale()

	if (params.locale !== locale) {
		notFound()
	}

	return (
		<html lang={locale} className={cn('h-full', fontSans.variable)}>
			<Script
				async
				defer
				data-website-id="c73161e2-5632-42ac-a5e6-2b0b8e746b89"
				src="umami-analytics-sage.vercel.app/umami.js"
			/>
			<head></head>
			<body className="h-full">
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
