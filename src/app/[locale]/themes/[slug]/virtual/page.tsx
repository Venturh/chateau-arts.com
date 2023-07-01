import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { getExhibitionBySlug } from '@/lib/sanity.client'

type Props = {
	params: {
		slug: string
	}
}

export default function VirtualExhibition({ params: { slug } }: Props) {
	const locale = useLocale()
	const t = useTranslations()
	const exhibition = use(getExhibitionBySlug(slug))

	const breadcrumbs: Breadcrumb[] = [
		{ name: t('home'), href: '/' },
		{ name: t('exhibitions'), href: '/themes' },
		{ name: exhibition.title[locale], href: `/themes/${exhibition.slug}` },
		{ name: 'Virtual Exhibition' },
	]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h1>Virtual Exhibition for {exhibition.title[locale]} </h1>
		</div>
	)
}
