'use client'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { Link } from 'next-intl'

import { SanityImage } from '@/components/ui/sanity-image'
import type { Exhibition } from '@/lib/sanity.queries'

type Props = {
	locale: string
	exhibition: Exhibition
}

export function ExhibitionLandingShowcase({ exhibition, locale }: Props) {
	const { title, slug, images } = exhibition
	const href = `/themes/${slug}`
	return (
		<Link href={href} className="relative h-full w-full ">
			<div className="absolute left-4 top-4 rounded bg-neutral-200 p-2 dark:bg-neutral-800">
				<h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-3xl">
					{title[locale]}
				</h1>
			</div>

			<div>
				<SanityImage
					className="rounded-md shadow-2xl ring-1 ring-neutral-900/10"
					image={images[0]}
				/>
			</div>
		</Link>
	)
}
