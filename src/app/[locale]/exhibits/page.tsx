import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { getAllExhibits } from '@/lib/sanity.client'

export default function Home() {
	const t = useTranslations()
	const locale = useLocale()
	const exhibits = use(getAllExhibits(locale))

	return (
		<div>
			<ExhibitGrid
				title={t('exhibits')}
				description={t('exhibits_description')}
				exhibits={exhibits}
			/>
		</div>
	)
}
