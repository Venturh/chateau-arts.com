'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Pagination, Thumbs, Zoom } from 'swiper'
import { PaginationOptions } from 'swiper/types'

import type { SanityImageType } from '@/lib/sanity.queries'
import { cn } from '@/lib/utils'
import { SanityImage } from './sanity-image'

type Props = {
	images: SanityImageType[]
	fill?: boolean
}

export function ImagesTabs({ images, fill }: Props) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	const pagination: PaginationOptions = {
		clickable: true,
	}

	//the more images the more height
	const heightMap = {
		1: 'h-full',
		2: 'h-[40%]',
		3: 'h-[60%]',
		5: 'h-full',
	}
	return (
		<div className="lg:grid lg:grid-cols-12 lg:gap-x-8 ">
			<Swiper
				onSwiper={setThumbsSwiper}
				slidesPerView={images.length}
				spaceBetween={0}
				watchSlidesProgress
				className={cn('tabs-swiper col-span-2 hidden  w-full lg:block', heightMap[images.length])}
				direction="vertical"
			>
				{images.map((image) => (
					<SwiperSlide key={image._key}>
						<SanityImage image={image} />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				className="h-full w-full lg:col-span-10"
				zoom
				watchSlidesProgress
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				pagination={pagination}
				modules={[Zoom, Pagination, Thumbs]}
			>
				{images.map((image) => (
					<SwiperSlide key={image._key}>
						<div className="swiper-zoom-container">
							<SanityImage fill={fill} image={image} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
