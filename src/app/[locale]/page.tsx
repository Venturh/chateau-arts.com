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

	const metaData = await makeMetaData(locale, {})
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
				<h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
					Elisabeth Werpers
				</h1>
				<p className="mt-6 text-4xl leading-8 text-gray-600">{t('art_trade')}</p>
			</div>
			<div className="mt-16 flow-root sm:mt-24">
				<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
					<ExhibitionLandingShowcase
						exhibition={currentExhibition}
						width={2432}
						height={1442}
						locale={locale}
					/>
				</div>
			</div>
			<div className="">
				<Divider>{t('upcoming-exhibitions')}</Divider>
				<div className="grid gap-x-6 md:grid-cols-2  md:gap-y-6">
					{upcomingExhibtions.length > 0 ? (
						upcomingExhibtions.map((exhibition) => (
							<div key={exhibition.slug}>
								<ExhibitionCard exhibition={exhibition} upcoming />
								<div className="z-10 my-6 h-[1px] w-full bg-zinc-200 md:hidden " />
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
