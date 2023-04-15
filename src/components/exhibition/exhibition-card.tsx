import { useLocale } from 'next-intl'

import { Link } from '@/components/link'
import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

interface Props {
	exhibition: Exhibition
	upcoming?: boolean
}
export function ExhibitionCard({ exhibition, upcoming }: Props) {
	const locale = useLocale()
	const { slug, title } = exhibition
	const Tag = upcoming ? 'div' : Link
	return (
		<Tag
			href={`/exhibitions/${slug}`}
			className="group  overflow-hidden rounded"
			key={slug[locale]}
		>
			{upcoming ? (
				<div className="h-48 w-full bg-neutral-100 dark:bg-neutral-800 lg:h-72" />
			) : (
				<div className="relative h-[250px] w-full">
					<SanityImage fill className="rounde relative mt-1 h-72" image={exhibition.images[0]} />
				</div>
			)}
			<div className="mt-4">
				<h2 className="relative z-10 text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
					{title[locale]}
				</h2>
				<span className="relative z-10 mt-2 block text-sm text-neutral-800 dark:text-neutral-200">
					{toDate(exhibition.from)} - {toDate(exhibition.to)}
				</span>
			</div>
		</Tag>
	)
}
