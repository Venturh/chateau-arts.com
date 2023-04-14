import { use } from 'react'
import { Metadata } from 'next'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionLandingShowcase } from '@/components/exhibition/exhibition-landing-showcase'
import { Divider } from '@/components/ui/divider'
import EmptyState from '@/components/ui/empty-state'
import { getCurrentExhibition, getUpcommingExhibitions } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = params

	const currentExhibition = await getCurrentExhibition(locale)

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'home',
		optionalImage: currentExhibition?.images[0] ?? undefined,
	})
	return metaData
}

export default function Landing() {
	const locale = useLocale()
	const t = useTranslations()
	const currentExhibition = use(getCurrentExhibition(locale))
	const upcomingExhibtions = use(getUpcommingExhibitions(locale))

	return (
		<div className="space-y-24">
			<div className="mx-auto max-w-2xl py-12 text-center">
				<h1 className="font-serif text-4xl font-thin uppercase tracking-tight text-neutral-700 underline decoration-1 underline-offset-2  dark:text-neutral-300 sm:text-5xl">
					elisabeth werpers
				</h1>
				<p className="mt-1 font-serif text-4xl font-thin  leading-8 text-neutral-600 dark:text-neutral-400">
					Kunsthandel
				</p>
			</div>
			<div className="mt-16 flow-root sm:mt-24">
				<div className="-m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
					{currentExhibition ? (
						<ExhibitionLandingShowcase
							exhibition={currentExhibition}
							width={2432}
							height={1442}
							locale={locale}
						/>
					) : null}
				</div>
			</div>
			<div className="">
				<Divider>{t('upcoming-exhibitions')}</Divider>
				<div className="grid gap-x-6 md:grid-cols-2  md:gap-y-6">
					{upcomingExhibtions.length > 0 ? (
						upcomingExhibtions.map((exhibition) => (
							<div key={exhibition.slug}>
								<ExhibitionCard exhibition={exhibition} upcoming />
								<div className="z-10 my-6 h-[1px] w-full bg-neutral-200 md:hidden " />
							</div>
						))
					) : (
						<EmptyState text={t('no-upcoming-exhibitions')} icon={<PhotoIcon />} />
					)}
				</div>
			</div>
		</div>
	)
}
