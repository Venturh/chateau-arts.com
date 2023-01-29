import { use } from 'react'
import { getExhibitionBySlug } from 'lib/sanity.client'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { SectionHeader } from '@/components/ui/section-header'
import { toDate } from '@/lib/utils'

type Props = {
	params: {
		slug: string
	}
}

//not supported by next-i18n yet, using headers
//export const revalidate = 60
// export async function generateStaticParams() {
// 	const exhibitions = await getAllExhibitions()
// 	return exhibitions.map(({ slug }) => ({ slug }))
// }

export default function ExhibitionPage({ params: { slug } }: Props) {
	const locale = useLocale()
	const t = useTranslations()

	const exhibition = use(getExhibitionBySlug(locale, slug))
	return (
		<div>
			<SectionHeader
				title={exhibition.title}
				description={`${toDate(exhibition.from)} - ${toDate(exhibition.to)}`}
			/>
			<ExhibitGrid
				title={t('exhibits')}
				description={t('exhibition_exhibits_description')}
				exhibits={exhibition.exhibits}
			/>
		</div>
	)
}
