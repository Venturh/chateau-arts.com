import { use } from 'react'
import { getExhibitionBySlug } from 'lib/sanity.client'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { SectionHeader } from '@/components/ui/section-header'
import { toDate } from '@/lib/utils'
import { SainityImage } from '../../../../components/ui/sanity-image'

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
		// <div>
		// 	<SectionHeader
		// 		title={exhibition.title}
		// 		description={`${toDate(exhibition.from)} - ${toDate(exhibition.to)}`}
		// 	/>
		// 	<div className="space-y-12">
		// 		<SainityImage ratio={16 / 9} image={exhibition.mainImage} alt={exhibition.title} />
		// 		<p className="prose prose-sm mx-auto mt-4 max-w-md text-gray-500">
		// 			{exhibition.description}
		// 		</p>
		// 		<ExhibitGrid
		// 			title={t('exhibits')}
		// 			description={t('exhibition_exhibits_description')}
		// 			exhibits={exhibition.exhibits}
		// 		/>
		// 	</div>
		// </div>
		<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
			<div className="lg:col-span-5 lg:col-start-8">
				<div>{exhibition.title}</div>
				<p className="prose  text-gray-500">{exhibition.description}</p>
			</div>
			<div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
					<div className=" lg:col-span-2 lg:row-span-2">
						<SainityImage
							ratio={3 / 4}
							image={exhibition.mainImage}
							alt="Back of women's Basic Tee in black."
							className="rounded-lg lg:col-span-2 lg:row-span-2"
						/>
					</div>
					{exhibition.images.map((image, idx) => (
						<SainityImage className="hidden rounded-lg lg:block" key={idx} image={image} alt="" />
					))}
				</div>
			</div>
		</div>
	)
}
