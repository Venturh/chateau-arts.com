import { use } from 'react'
import { getExhibitionBySlug } from 'lib/sanity.client'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { ButtonLink } from '@/components/ui/button'
import { ImagesTabs } from '@/components/ui/images-tabs'
import { ScrollToButton } from '@/components/ui/scroll-to-button'
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

	const breadcrumbs: Breadcrumb[] = [
		{ name: t('home'), href: '/' },
		{ name: t('exhibitions'), href: '/exhibitions' },
		{ name: exhibition.title },
	]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<ImagesTabs images={exhibition.images} />
			<div className="mx-auto flex max-w-2xl flex-col-reverse  pt-10 pb-16  lg:grid lg:max-w-7xl lg:grid-cols-3  lg:gap-x-8  lg:pt-16 lg:pb-24">
				<div className="mt-6 lg:col-span-2 lg:mt-0 lg:border-r lg:border-gray-200  lg:pr-8">
					<p className="mx-auto max-w-lg text-base text-gray-900">{exhibition.description}</p>
				</div>
				<div className="lg:row-span-3">
					<SectionHeader
						title={exhibition.title}
						description={`${toDate(exhibition.from)} - ${toDate(exhibition.to)}`}
					/>
					<div className="flex items-center space-x-2">
						<ButtonLink href={`/exhibitions/${slug}/virtual`} size="lg">
							{t('to-virtual-exhibition')}
						</ButtonLink>
						<ScrollToButton targetId="exhibits" variant="subtle" size="lg">
							{t('exhibits')}
						</ScrollToButton>
					</div>
				</div>
			</div>
			<div id="exhibits">
				<ExhibitGrid title={t('exhibition-exhibits')} exhibits={exhibition.exhibits} />
			</div>
		</div>
	)
}
