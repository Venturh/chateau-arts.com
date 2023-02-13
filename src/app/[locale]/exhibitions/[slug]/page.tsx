import { use } from 'react'
import { Metadata } from 'next'
import { getExhibitionBySlug } from 'lib/sanity.client'
import { useLocale, useTranslations } from 'next-intl'

import { ExhibitGrid } from '@/components/exhibits/exhibit-grid'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { ButtonLink } from '@/components/ui/button'
import { ImagesTabs } from '@/components/ui/images-tabs'
import { ScrollToButton } from '@/components/ui/scroll-to-button'
import { SectionHeader } from '@/components/ui/section-header'
import { makeMetaData, toDate } from '@/lib/utils'

type Props = {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale, slug } = params
	const exhibition = await getExhibitionBySlug(locale, slug)

	if (!exhibition) {
		return
	}
	const { description, images, from, to } = exhibition
	const title = `${exhibition.title}, ${toDate(from)} - ${toDate(to)}`
	const url = `https://elisabethwerpers.com/exhibits/${slug}`

	const metaData = await makeMetaData(locale, {
		optionalTitle: title,
		optionalDescription: description,
		optionalUrl: url,
		optionalImage: images[0],
	})

	return metaData
}

export default function Exhibition({ params: { slug } }: Props) {
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

			<div className="mx-auto flex max-w-2xl flex-col-reverse pt-10 pb-16 lg:grid lg:max-w-7xl lg:grid-cols-3  lg:gap-x-8 lg:pt-16 lg:pb-24">
				<div className="mt-6 lg:col-span-2 lg:mt-0 lg:border-r lg:border-neutral-200 lg:pr-8 lg:dark:border-neutral-800">
					<p className="mx-auto max-w-2xl text-base text-neutral-900 dark:text-neutral-100">
						{exhibition.description}
					</p>
				</div>
				<div className="lg:row-span-3">
					<SectionHeader
						title={exhibition.title}
						description={`${toDate(exhibition.from)} - ${toDate(exhibition.to)}`}
					/>
					<div className="mt-6 flex items-center space-x-2">
						<ButtonLink href={`/${locale}/exhibitions/${slug}/virtual`} size="lg">
							{t('to-virtual-exhibition')}
						</ButtonLink>
						<ScrollToButton targetId="exhibits" variant="ghost" size="lg">
							{t('exhibits')}
						</ScrollToButton>
					</div>
				</div>
			</div>
			<div className="pb-12">
				<ImagesTabs images={exhibition.images} />
			</div>
			<div id="exhibits">
				<ExhibitGrid title={t('exhibition-exhibits')} exhibits={exhibition.exhibits} />
			</div>
		</div>
	)
}
