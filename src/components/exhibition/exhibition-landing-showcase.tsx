'use client'

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { Link } from 'next-intl'

import { ButtonLink } from '@/components/ui/button'
import { SanityImage } from '@/components/ui/sanity-image'
import { SectionHeader } from '@/components/ui/section-header'
import type { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

type Props = {
	locale: string
	exhibition: Exhibition
	height?: number
	width?: number
}

export function ExhibitionLandingShowcase({ exhibition, locale, height, width }: Props) {
	const { title, from, to, slug, images } = exhibition
	const href = `/exhibitions/${slug}`
	return (
		<Link href={href} className="relative h-full w-full ">
			<div className="absolute left-4 top-4 rounded bg-neutral-200 p-2 dark:bg-neutral-800">
				<h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-3xl">
					{title[locale]}
				</h1>
				<p className="mt-2 max-w-xl text-sm text-neutral-700 dark:text-neutral-200 lg:text-base">
					{`${toDate(from)} - ${toDate(to)}`}
				</p>
			</div>

			<div>
				<SanityImage
					width={width}
					height={height}
					className="rounded-md shadow-2xl ring-1 ring-neutral-900/10"
					image={images[0]}
				/>
			</div>
		</Link>
	)
}
