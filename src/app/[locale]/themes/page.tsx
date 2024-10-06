import { use } from 'react'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionRowCard } from '@/components/exhibition/exhibition-row-card'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { Divider } from '@/components/ui/divider'
import ServerSidePagination from '@/components/ui/server-side-pagination'
import {
	getAllExhibitions,
	getExhibitionsCount,
	getLatestExhibition,
	getPaginatedExhibitions,
} from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'exhibitions',
		optionalUrl: `${process.env.NEXT_PUBLIC_URL}/${locale}/exhibitions`,
	})

	return metaData
}

export default function Exhibitions({ searchParams }) {
	const t = useTranslations()

	const page = searchParams?.page ? Number.parseInt(searchParams.page as string) : 1

	const perPage = 6
	const total = use(getExhibitionsCount())
	const exhibitions = use(getPaginatedExhibitions(perPage, page ? page : undefined))
	const latestExhibition = use(getLatestExhibition())

	const breadcrumbs: Breadcrumb[] = [{ name: t('home'), href: '/' }, { name: t('exhibitions') }]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			{latestExhibition && <ExhibitionRowCard exhibition={latestExhibition} />}
			{exhibitions.length > 0 && (
				<div className="mt-12 space-y-12">
					<Divider>{t('all-exhibitions')}</Divider>
					<div className="grid gap-x-6 md:grid-cols-3 md:gap-y-6">
						{exhibitions.map((exhibition) => (
							<div key={exhibition.slug}>
								<ExhibitionCard exhibition={exhibition} />
								<div className="z-10 my-6 h-[1px] w-full bg-zinc-200 dark:bg-zinc-700 md:hidden " />
							</div>
						))}
					</div>
					<ServerSidePagination path="themes" total={total} perPage={perPage} page={page} />
				</div>
			)}
		</div>
	)
}
