import Image from 'next/image'

import { urlFor } from '@/lib/sanity.client'
import { AspectRatio } from './aspect-ratio'

type Props = {
	image: any
	alt: string
	ratio?: number
	width?: number
	height?: number
	className?: string
}

export function SainityImage({ image, alt, ratio = 3 / 4, width, height, className }: Props) {
	return (
		<AspectRatio ratio={ratio}>
			<Image
				className={className}
				src={urlFor(image).url()}
				alt={alt}
				fill={!width}
				height={height}
				width={width}
			/>
		</AspectRatio>
	)
}
