import { use } from 'react'
import { Metadata } from 'next'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionLandingShowcase } from '@/components/exhibition/exhibition-landing-showcase'
import { Divider } from '@/components/ui/divider'
import EmptyState from '@/components/ui/empty-state'
import { getAllExhibitions } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

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
	const allExhibitions = use(getAllExhibitions())

	const currentExhibition = allExhibitions[allExhibitions.length - 1]
	const pastExhibitions = allExhibitions
		.slice(0, allExhibitions.length - 1)
		.filter((exhibition) => new Date(exhibition.from) < new Date())

	return (
		<div>
			<div className="mx-auto max-w-2xl py-12 text-center">
				<h1 className="font-serif text-4xl font-thin uppercase tracking-tight text-neutral-700 underline decoration-1 underline-offset-2  dark:text-neutral-300 sm:text-5xl">
					elisabeth werpers
				</h1>
				<p className="mt-1 font-serif text-4xl font-thin  leading-8 text-neutral-600 dark:text-neutral-400">
					Kunsthandel
				</p>
			</div>
			<div className="mx-auto max-w-5xl">
				<div className="-m-2 rounded-xl bg-neutral-50 p-2 ring-1 ring-inset ring-neutral-300 dark:bg-neutral-800 dark:ring-neutral-700 lg:-m-4 lg:rounded-2xl lg:p-4">
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
