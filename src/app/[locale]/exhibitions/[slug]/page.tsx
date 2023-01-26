import { getAllExhibitions, getExhibitionBySlug } from 'lib/sanity.client'

type Props = {
	params: {
		slug: string
	}
}

export const revalidate = 60

export async function generateStaticParams() {
	const exhibitions = await getAllExhibitions()
	return exhibitions.map(({ slug }) => ({ slug }))
}

export default async function ExhibitionPage({ params: { slug } }: Props) {
	const exhibition = await getExhibitionBySlug(slug)
	return <main>{exhibition.title.en}</main>
}
