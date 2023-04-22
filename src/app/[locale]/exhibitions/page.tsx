import { use } from 'react'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionRowCard } from '@/components/exhibition/exhibition-row-card'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { Divider } from '@/components/ui/divider'
import { getAllExhibitions } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'exhibitions',
		optionalUrl: `https://elisabethwerpers.com/${locale}/exhibitions`,
	})

	return metaData
}

export default function Exhibitions() {
	const t = useTranslations()
	const locale = useLocale()
	const allExhibitions = use(getAllExhibitions(locale))

	const currentExhibition = allExhibitions[allExhibitions.length - 1]
	const pastExhibitions = allExhibitions
		.slice(0, allExhibitions.length - 1)
		.filter((exhibition) => new Date(exhibition.from) < new Date())

	const breadcrumbs: Breadcrumb[] = [{ name: t('home'), href: '/' }, { name: t('exhibitions') }]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			{currentExhibition && <ExhibitionRowCard exhibition={currentExhibition} />}
			{pastExhibitions.length > 0 && (
				<div className="mt-12">
					<Divider>{t('all-exhibitions')}</Divider>
					<div className="grid gap-x-6 md:grid-cols-3 md:gap-y-6">
						{pastExhibitions.map((exhibition) => (
							<div key={exhibition.slug[locale]}>
								<ExhibitionCard exhibition={exhibition} />
								<div className="z-10 my-6 h-[1px] w-full bg-neutral-200 dark:bg-neutral-700 md:hidden " />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
