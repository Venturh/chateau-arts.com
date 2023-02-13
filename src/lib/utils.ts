import { ClassValue, clsx } from 'clsx'
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
		year: '2-digit',
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
	return `https://elisabethwerpers.com/api/og?locale=${locale}`
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
) {
	const messages = await import(`../../messages/${locale}.json`)
	const title = optionalTitle
		? optionalTitle
		: optionalTitleKey
		? messages[optionalTitleKey]
		: messages.og.title
	const description = optionalDescription ?? messages.og.description
	const url = optionalUrl || 'https://elisabethwerpers.com'
	const ogImage = optionalImage
		? urlFor(optionalImage).width(1200).height(630).url()
		: getOgImage(locale)
	const metadata = {
		title,
		description,
		url,
		openGraph: {
			title,
			description,
			url,
			siteName: 'Elisabeth Werpers',
			images: [
				{
					url: ogImage,
					width: 1920,
					height: 1080,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			images: [ogImage],
		},
	}
	console.log(metadata)
	return metadata
}
