import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionRowCard } from '@/components/exhibition/exhibition-row-card'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { Divider } from '@/components/ui/divider'
import { getAllExhibitions, getCurrentExhibitions, getPastExhibitions } from '@/lib/sanity.client'

export default function Home() {
	const t = useTranslations()
	const locale = useLocale()
	const currentExhibitions = use(getCurrentExhibitions(locale))
	const pastExhibitions = use(getPastExhibitions(locale))

	const currentExhibition = currentExhibitions[0]

	const breadcrumbs: Breadcrumb[] = [{ name: t('home'), href: '/' }, { name: t('exhibitions') }]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<ExhibitionRowCard exhibition={currentExhibition} />
			<div className="mt-12">
				<Divider>{t('past')}</Divider>
				<div className="grid gap-x-6 md:grid-cols-3  md:gap-y-6">
					{pastExhibitions.map((exhibition) => (
						<>
							<ExhibitionCard key={exhibition.slug} exhibition={exhibition} />
							<div className="z-10 my-6 h-[1px] w-full bg-zinc-200 md:hidden " />
						</>
					))}
				</div>
			</div>
		</div>
	)
}
