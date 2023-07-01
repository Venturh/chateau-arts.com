import { Link, useLocale } from 'next-intl'

import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

interface Props {
	exhibition: Exhibition
}
export function ExhibitionCard({ exhibition }: Props) {
	const locale = useLocale()
	const { slug, title } = exhibition
	return (
		<Link
			locale={locale}
			href={`/themes/${slug}`}
			className="group  overflow-hidden rounded"
			key={slug}
		>
			<div className="relative  w-full">
				<SanityImage image={exhibition.images[0]} />
			</div>

			<div className="mt-4">
				<h2 className="relative z-10 text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
					{title[locale]}
				</h2>
			</div>
		</Link>
	)
}
