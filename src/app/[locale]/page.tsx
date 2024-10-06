import { use } from 'react'
import { Metadata } from 'next'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionLandingShowcase } from '@/components/exhibition/exhibition-landing-showcase'
import { Divider } from '@/components/ui/divider'
import EmptyState from '@/components/ui/empty-state'
import { getAllExhibitions, getLatestExhibition, getLatestExhibitions } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'
import { metadata } from './layout'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const allExhibitions = await getAllExhibitions()

	const currentExhibition = allExhibitions[allExhibitions.length - 1]

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'home',
		optionalImage: currentExhibition?.images[0] ?? undefined,
	})
	return metaData
}

export default function Landing() {
	const locale = useLocale()
	const t = useTranslations()

	const latestExhibitions = use(getLatestExhibitions())

	const currentExhibition = latestExhibitions[0]

	const pastExhibitions = latestExhibitions.slice(1)

	return (
		<div>
			<div className="mx-auto max-w-5xl">
				<div className="-m-2 rounded-xl bg-zinc-50 p-2 ring-1 ring-inset ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700 lg:-m-4 lg:rounded-2xl lg:p-4">
					{currentExhibition ? (
						<ExhibitionLandingShowcase exhibition={currentExhibition} locale={locale} />
					) : null}
				</div>
			</div>
			{pastExhibitions.length > 0 && (
				<div className="mx-auto mt-6 max-w-5xl sm:mt-24">
					<Divider>{t('all-exhibitions')}</Divider>
					<div className="grid gap-6 md:grid-cols-2">
						{pastExhibitions.map((exhibition) => (
							<ExhibitionLandingShowcase
								with-aspect
								key={exhibition.slug}
								exhibition={exhibition}
								locale={locale}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
