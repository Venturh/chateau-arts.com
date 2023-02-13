'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { Pagination, Thumbs } from 'swiper'
import { PaginationOptions } from 'swiper/types'

import type { SanityImageType } from '@/lib/sanity.queries'
import { cn } from '@/lib/utils'
import { SanityImage } from './sanity-image'

type Props = {
	images: SanityImageType[]
}

export function ImagesTabs({ images }: Props) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	const pagination: PaginationOptions = {
		clickable: true,
	}

	const heightMap = {
		1: 'h-[100px]',
		2: 'h-[300px]',
		3: 'h-[300px]',
		4: 'h-[300px]',
		5: 'h-[700px]',
	}

	return (
		<div className="h-96 lg:grid lg:h-[650px] lg:grid-cols-12 lg:gap-x-8">
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
						<SanityImage fill image={image} />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				className="h-full w-full rounded-md border dark:border-zinc-800 lg:col-span-8"
				zoom
				speed={900}
				watchSlidesProgress
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				pagination={pagination}
				modules={[Pagination, Thumbs]}
			>
				{images.map((image) => (
					<SwiperSlide key={image._key}>
						<SanityImage fill image={image} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
