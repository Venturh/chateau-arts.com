'use client'

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import Link from 'next/link'

import { ButtonLink } from '@/components/ui/button'
import { SanityImage } from '@/components/ui/sanity-image'
import { SectionHeader } from '@/components/ui/section-header'
import type { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

type Props = {
	locale: string
	exhibitions: Exhibition[]
}

export function ExhibitionLandingSlider({ exhibitions, locale }: Props) {
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			speed={900}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 3200,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
				waitForTransition: true,
			}}
		>
			{exhibitions.map(({ images, title, slug, from, to }, idx) => {
				const href = `/${locale}/exhibitions/${slug}`
				return (
					<SwiperSlide key={idx}>
						<Link href={href} className="relative h-full w-full ">
							<div className="absolute top-4 left-4">
								<SectionHeader title={title} description={`${toDate(from)} - ${toDate(to)}`} />
								<ButtonLink href={`/${locale}/exhibitions/${slug}`}>Zur Austellung</ButtonLink>
							</div>
							<SanityImage className="rounded" image={images[0]} />
						</Link>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}
