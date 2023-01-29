import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitionCard } from '@/components/exhibition/exhibition-card'
import { ExhibitionRowCard } from '@/components/exhibition/exhibition-row-card'
import { Divider } from '@/components/ui/divider'
import { SectionHeader } from '@/components/ui/section-header'
import { getAllExhibitions } from '@/lib/sanity.client'

export default function Home() {
	const t = useTranslations()
	const locale = useLocale()
	const exhibitions = use(getAllExhibitions(locale))

	const currentExhibition = exhibitions[0]
	const pastExhibitions = exhibitions.slice(1)

	return (
		<div>
			<SectionHeader title={t('exhibitions')} description={t('exhibitions_description')} />
			<ExhibitionRowCard key={currentExhibition.slug} exhibition={currentExhibition} />
			<div className="mt-12">
				<Divider>{t('past')}</Divider>
				<div className="grid gap-x-6 md:grid-cols-3  md:gap-y-6">
					{[...pastExhibitions, ...pastExhibitions].map((exhibition) => (
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
