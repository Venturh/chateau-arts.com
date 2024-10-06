import { use } from 'react'
import { Metadata } from 'next'
import { Link, useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import ServerSidePagination from '@/components/ui/server-side-pagination'
import { getExhibitsCount, getPaginatedExhibits } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'exhibits',
		optionalUrl: `${process.env.NEXT_PUBLIC_URL}/${locale}/artworks`,
	})

	return metaData
}

export default function Exhibits({ searchParams }) {
	const t = useTranslations()

	const page = searchParams?.page ? Number.parseInt(searchParams.page as string) : 1

	const perPage = 12
	const total = use(getExhibitsCount())
	const exhibits = use(getPaginatedExhibits(perPage, page ? page : undefined))

	const breadcrumbs: Breadcrumb[] = [{ name: t('home'), href: '/' }, { name: t('exhibits') }]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			{exhibits && (
				<div className="space-y-12">
					<ExhibitGrid exhibits={exhibits} />
					<ServerSidePagination path="artworks" total={total} perPage={perPage} page={page} />
				</div>
			)}
		</div>
	)
}
