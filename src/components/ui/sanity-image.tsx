'use client'

import Image, { ImageProps } from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import { client, urlFor } from '@/lib/sanity.client'
import { SanityImageType } from '@/lib/sanity.queries'

type Props = Omit<ImageProps, 'src' | 'alt'> & {
	image: SanityImageType
	maxWidth?: number
}

const DEFAULT_SIZES = '(max-width: 800px) 100vw, 800px'
const DEFAULT_MAX_WIDTH = 1440

const useSanityLoader = (image: SanityImageType, maxWidth: number) =>
	useNextSanityImage(client, image, {
		imageBuilder: (imageUrlBuilder, options) => {
			const { width: imageWidth, croppedImageDimensions: cropped } = options
			const width = Math.round(imageWidth || Math.min(maxWidth, cropped.width))
			const height = Math.round(width * (cropped.height / cropped.width))

			return imageUrlBuilder.width(width).height(height).quality(70)
		},
	})

export function SanityImage({
	image,
	sizes = DEFAULT_SIZES,
	maxWidth = DEFAULT_MAX_WIDTH,
	fill,
	...rest
}: Props) {
	const imageProps = useSanityLoader(image, maxWidth)

	if (!image?.asset) return <></>
	const { width, height, loader } = imageProps

	let props = {}

	if (fill) {
		props = {
			fill,
			style: { objectFit: 'contain' },
		}
	} else {
		props = {
			width,
			height,
			style: { width: '100%', height: 'auto' },
		}
	}

	return (
		<Image
			src={urlFor(image).url() ?? ''}
			alt={image.alt ?? ''}
			sizes={sizes}
			unoptimized
			{...props}
			{...rest}
			loader={loader}
		/>
	)
}
