'use client'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'

import clsx from 'clsx'
import { Link } from 'next-intl'

import { SanityImage } from '@/components/ui/sanity-image'
import type { Exhibition } from '@/lib/sanity.queries'

type Props = {
	locale: string
	exhibition: Exhibition
	withAspect?: boolean
}

export function ExhibitionLandingShowcase({ exhibition, locale, withAspect }: Props) {
	const { title, slug, images } = exhibition
	const href = `/themes/${slug}`
	return (
		<Link href={href} className="relative h-full w-full ">
			<div className="absolute left-4 top-4 rounded bg-zinc-200 p-2 dark:bg-zinc-800">
				<h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 lg:text-3xl">
					{title[locale]}
				</h1>
			</div>

			<SanityImage
				className={clsx('rounded-md shadow-2xl ring-1 ring-zinc-900', {
					'aspect-square': withAspect,
				})}
				image={images[0]}
			/>
		</Link>
	)
}
