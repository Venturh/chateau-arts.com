import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { SainityImage } from '@/components/ui/sanity-image'
import { SectionHeader } from '@/components/ui/section-header'
import { getAllExhibitions } from '@/lib/sanity.client'
import { toDate } from '@/lib/utils'

export default function Home() {
	const t = useTranslations()
	const locale = useLocale()
	const exhibitions = use(getAllExhibitions(locale))

	return (
		<div>
			<SectionHeader title={t('exhibitions')} description={t('exhibitions_description')} />

			<div className="divide-y divide-zinc-100">
				{[...exhibitions, ...exhibitions, ...exhibitions].map(
					({ slug, title, ...exhibition }, i) => (
						<Link
							href={`/exhibitions/${slug}`}
							key={slug}
							className="group relative flex flex-col space-y-2 py-6 md:flex-row-reverse md:space-y-0"
						>
							<div className="mx-auto space-y-1 md:max-w-2xl md:px-4 lg:px-8">
								<div className=" absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
								<span className="relative z-10 text-sm text-zinc-800">
									{toDate(exhibition.from)} - {toDate(exhibition.to)}
								</span>
								<h2 className="relative z-10  text-lg font-semibold tracking-tight text-zinc-800">
									{i + 1}: {title}
								</h2>
								<div className="relative text-zinc-600 line-clamp-3 md:line-clamp-4">
									{exhibition.description}
								</div>
							</div>
							<div className="md:w-1/2">
								<SainityImage
									ratio={16 / 9}
									className="rounded-md"
									image={exhibition.mainImage}
									alt={title}
								/>
							</div>
						</Link>
					)
				)}
			</div>
		</div>
	)
}
