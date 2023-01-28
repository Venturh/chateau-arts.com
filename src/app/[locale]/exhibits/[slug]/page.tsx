import { getExhibitBySlug } from 'lib/sanity.client'
import { useLocale } from 'next-intl'

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
	const exhibit = await getExhibitBySlug(locale, slug)

	return <div>{exhibit.title}</div>
}
