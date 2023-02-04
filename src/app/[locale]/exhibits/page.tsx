import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { getAllExhibits } from '@/lib/sanity.client'

export default function Home() {
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
