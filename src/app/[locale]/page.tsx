import { use } from 'react'
import { useLocale } from 'next-intl'

import { ExhibitionLandingSlider } from '@/components/exhibition/exhibition-landing-slider'
import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { getLatest3Exhibitions, getLatestExhibits } from '@/lib/sanity.client'

export default function Index() {
	const locale = useLocale()
	const exhibitions = use(getLatest3Exhibitions(locale))
	const latestExhibits = use(getLatestExhibits(locale))

	return (
		<div className="space-y-24">
			<ExhibitionLandingSlider locale={locale} exhibitions={exhibitions} />
			<ExhibitGrid exhibits={latestExhibits} />
		</div>
	)
}
