import { use } from 'react'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { getAllExhibits } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'exhibits',
		optionalUrl: `https://elisabethwerpers.com/${locale}/artworks`,
	})

	return metaData
}

export default function Exhibits() {
	const t = useTranslations()
	const locale = useLocale()
	const exhibits = use(getAllExhibits(locale))

	const breadcrumbs: Breadcrumb[] = [{ name: t('home'), href: '/' }, { name: t('exhibits') }]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<ExhibitGrid exhibits={exhibits} />
		</div>
	)
}
