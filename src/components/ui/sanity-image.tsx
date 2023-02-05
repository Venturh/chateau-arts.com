'use client'

import Image, { ImageProps } from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import { client } from '@/lib/sanity.client'
import { SanityImageType } from '@/lib/sanity.queries'

type Props = Omit<ImageProps, 'src' | 'alt'> & {
	image: SanityImageType
	maxWidth?: number
	aspectRatio?: Ratios
}

enum Ratios {
	'5:4' = 5 / 4,
	'4:3' = 4 / 3,
	'3:2' = 3 / 2,
	'5:3' = 5 / 3,
	'16:9' = 16 / 9,
	'16:10' = 16 / 10,
	'2.39:1' = 2.39,
	'21:9' = 21 / 9,
	'1:1' = 1,
}

const DEFAULT_SIZES = '(max-width: 800px) 100vw, 800px'
const DEFAULT_MAX_WIDTH = 1440

const useSanityLoader = (
	image: SanityImageType,
	maxWidth: number,
	aspectRatio: number | undefined
) =>
	useNextSanityImage(client, image, {
		imageBuilder: (imageUrlBuilder, options) => {
			const { width: imageWidth, croppedImageDimensions: cropped } = options
			// We do not want to allow gigantic images to exist due to performance
			const width = Math.round(imageWidth || Math.min(maxWidth, cropped.width))
			const height = aspectRatio
				? Math.round(width * aspectRatio)
				: Math.round(width * (cropped.height / cropped.width))

			return imageUrlBuilder.width(width).height(height).quality(70)
		},
	})

export function SanityImage({
	image,
	aspectRatio,
	sizes = DEFAULT_SIZES,
	maxWidth = DEFAULT_MAX_WIDTH,
	fill,
	style,
	...rest
}: Props) {
	const imageProps = useSanityLoader(image, maxWidth, aspectRatio)

	if (!image?.asset) return <></>
	const { width, height, src, loader } = imageProps

	let props = {}

	if (fill) {
		// Layout fill
		props = {
			fill,
			style: { ...style, objectFit: 'cover' },
		}
	} else {
		// Layout responsive
		props = {
			width,
			height,
			style: { ...style, width: '100%', height: 'auto' },
		}
	}

	return (
		<Image
			src={src}
			alt={image.alt ?? ''}
			sizes={sizes}
			unoptimized
			{...props}
			{...rest}
			loader={loader}
		/>
	)
}
