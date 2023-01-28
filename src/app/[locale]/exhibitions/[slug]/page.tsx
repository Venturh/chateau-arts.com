import { getAllExhibitions, getExhibitionBySlug } from 'lib/sanity.client'
import { useLocale } from 'next-intl'

import { ExhibitCard } from '@/components/exhibit-card'

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

export default async function ExhibitionPage({ params: { slug } }: Props) {
	const locale = useLocale()

	const exhibition = await getExhibitionBySlug(locale, slug)

	return (
		<div>
			<h1>{exhibition.title}</h1>
			<div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{exhibition.exhibits.map((exhibit) => (
					<ExhibitCard key={exhibit._id} {...exhibit} />
				))}
			</div>
		</div>
	)
}
