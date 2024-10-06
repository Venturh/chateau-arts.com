import localFont from 'next/font/local'
import Script from 'next/script'
import { useLocale } from 'next-intl'

import { MainLayout } from '@/components/main-layout'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

import { notFound } from 'next/navigation'

const inter = localFont({
	src: '../../../public/fonts/inter-var.woff2',
	variable: '--font-sans',
	display: 'swap',
})

export const metadata = {
	metadataBase: 'https://www.elisabethwerpers.com/',
	title: {
		default: 'A touch of château',
		template: '%s | A touch of château',
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
		title: 'A touch of château',
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
		<html lang={locale} className={cn('h-full', inter.variable)}>
			{process.env.NODE_ENV === 'production' && (
				<Script
					async
					defer
					data-website-id="bf13c4d6-5d27-4b4e-9707-96d3ddac0fc9"
					src="https://umami.werpers.dev/script.js"
				/>
			)}
			<head></head>
			<body className="h-full text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
