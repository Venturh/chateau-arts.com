import { use } from 'react'
import { getAllExhibitions } from 'lib/sanity.client'
import { useLocale, useTranslations } from 'next-intl'

export default function Home() {
	const exhibitions = use(getAllExhibitions())
	const t = useTranslations()
	const locale = useLocale()

	return (
		<div>
			<h1>{t('exhibitions')}</h1>
			<div className="space-y-4">
				{exhibitions.map(({ title, slug }) => (
					<div key={slug}>
						<div>{title[locale]}</div>
					</div>
				))}
			</div>
		</div>
	)
}
