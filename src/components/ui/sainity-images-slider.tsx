/* eslint-disable @next/next/no-img-element */
'use client'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { PaginationOptions } from 'swiper/types'

import type { SanityImage } from '@/lib/sanity.queries'
import { SainityImage } from './sanity-image'

type Props = {
	images: SanityImage[]
}

export function SanityImagesSlider({ images }: Props) {
	const pagination: PaginationOptions = {
		clickable: true,
	}

	return (
		<div>
			<Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]}>
				{images.map((image, i) => (
					<SwiperSlide key={i}>
						<SainityImage ratio={4 / 3} image={image} alt={`exhibition-${i}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
