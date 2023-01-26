import { use } from 'react'
import Layout from 'components/layout'
import { getAllExhibitions } from 'lib/sanity.client'
import { useTranslations } from 'next-intl'

export const revalidate = 60

export default function Home() {
	const exhibitions = use(getAllExhibitions())

	const t = useTranslations()

	return (
		<Layout>
			<h1>{t('exhibitions')}</h1>
			<div className="space-y-4">
				{exhibitions.map((exhibition) => (
					<div key={exhibition.slug}>
						<h1>{exhibition.title.en}</h1>
					</div>
				))}
			</div>
		</Layout>
	)
}
