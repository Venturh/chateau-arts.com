/* eslint-disable @next/next/no-img-element */
'use client'

import { Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { useRef, useState } from 'react'
import { PaginationOptions } from 'swiper/types'

import type { SanityImageType } from '@/lib/sanity.queries'
import { ImageModal } from './image-modal'
import { SanityImage } from './sanity-image'

type Props = {
	images: SanityImageType[]
}

export function SanityImagesSlider({ images }: Props) {
	const pagination: PaginationOptions = {
		clickable: true,
	}

	const swiperRef = useRef<any>()

	const [isOpen, setIsOpen] = useState(false)
	const [initialSlide, setInitialSlide] = useState(0)

	function onClick(index: number) {
		setInitialSlide(index)
		setIsOpen(true)
	}

	function onSlide(index: number) {
		setInitialSlide(index)
		if (swiperRef.current) {
			swiperRef.current.swiper.slideTo(index)
		}
	}

	return (
		<div>
			<Swiper ref={swiperRef} pagination={pagination} modules={[Pagination]}>
				{images.map((image, idx) => (
					<SwiperSlide key={idx}>
						<button className="h-full w-full " onClick={() => onClick(idx)}>
							<SanityImage image={image} />
						</button>
					</SwiperSlide>
				))}
			</Swiper>
			<ImageModal isOpen={isOpen} setIsOpen={setIsOpen}>
				<Swiper
					onSlideChange={({ activeIndex }) => onSlide(activeIndex)}
					initialSlide={initialSlide}
					pagination={pagination}
					modules={[Pagination]}
				>
					{images.map((image, i) => (
						<SwiperSlide key={i}>
							<SanityImage image={image} />
						</SwiperSlide>
					))}
				</Swiper>
			</ImageModal>
		</div>
	)
}
