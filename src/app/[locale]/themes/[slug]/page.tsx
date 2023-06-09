import { use } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
		return notFound()
	}
	const { description, images, from } = exhibition
	const title = `${exhibition.title[locale]}, ${toDate(from)}}`
	const url = `https://elisabethwerpers.com/${locale}/artworks/${slug}`

	const metaData = await makeMetaData(locale, {
		optionalTitle: title,
		optionalDescription: description[locale],
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
		{ name: t('exhibitions'), href: '/themes' },
		{ name: exhibition.title[locale] },
	]

	return (
		<div>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<div className="mx-auto flex max-w-2xl flex-col-reverse pb-16 pt-10 lg:grid lg:max-w-7xl lg:grid-cols-3  lg:gap-x-8 lg:pb-24 lg:pt-16">
				<div className="mt-6 lg:col-span-2 lg:mt-0 lg:border-r lg:border-neutral-200 lg:pr-8 lg:dark:border-neutral-800">
					<p className="mx-auto max-w-2xl text-base text-neutral-900 dark:text-neutral-100">
						{exhibition.description[locale]}
					</p>
				</div>
				<div className="lg:row-span-3">
					<SectionHeader title={exhibition.title[locale]} />
					<div className="mt-6 flex items-center space-x-2">
						{/* <ButtonLink href={`/${locale}/exhibitions/${slug}/virtual`} size="lg">
							{t('to-virtual-exhibition')}
						</ButtonLink> */}
						<ScrollToButton targetId="exhibits" size="lg">
							{t('exhibits')}
						</ScrollToButton>
					</div>
				</div>
			</div>
			<div className="pb-12">
				<ImagesTabs images={exhibition.images} />
			</div>
			<div id="exhibits">
				<ExhibitGrid title={t('exhibits')} exhibits={exhibition.exhibits} />
			</div>
		</div>
	)
}
