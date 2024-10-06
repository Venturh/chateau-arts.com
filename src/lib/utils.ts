import { Metadata } from 'next'
import { ClassValue, clsx } from 'clsx'
import { getTranslations } from 'next-intl/server'
import { twMerge } from 'tailwind-merge'

import { urlFor } from './sanity.client'
import { SanityImageType } from './sanity.queries'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function toCurrency(value: number) {
	return value.toLocaleString(undefined, {
		style: 'currency',
		currency: 'EUR',
	})
}

export function toDate(value: string) {
	return new Date(value).toLocaleDateString('de', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	})
}
export function toShortDate(value: string) {
	return new Date(value).toLocaleDateString('de', {
		month: 'numeric',
		day: 'numeric',
	})
}

export function getOgImage(locale: string) {
	return `${process.env.NEXT_PUBLIC_URL}/api/og?locale=${locale}`
}

export async function makeMetaData(
	locale: string,
	{
		optionalTitle,
		optionalTitleKey,
		optionalDescription,
		optionalUrl,
		optionalImage,
	}: {
		optionalTitle?: string
		optionalTitleKey?: string
		optionalDescription?: string
		optionalUrl?: string
		optionalImage?: SanityImageType
	}
): Promise<Metadata> {
	const t = await getTranslations()

	const title = optionalTitle
		? optionalTitle
		: optionalTitleKey
		? t(optionalTitleKey as any)
		: t('og.title')
	const description = optionalDescription ?? t('og.description')
	const url = optionalUrl || process.env.NEXT_PUBLIC_URL
	const ogImage = optionalImage
		? urlFor(optionalImage).width(1200).height(630).url()
		: getOgImage(locale)
	const metadata = {
		title,
		description,
		url,
		openGraph: {
			title: `${title} | A touch of château`,
			description,
			url,
			siteName: 'A touch of château',
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			images: [ogImage],
		},
	}
	return metadata
}
