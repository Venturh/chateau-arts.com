import { useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { SainityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

interface Props {
	exhibition: Exhibition
}
export function ExhibitionRowCard({ exhibition }: Props) {
	const t = useTranslations()
	const { slug, title } = exhibition
	return (
		<Link
			href={`/exhibitions/${slug}`}
			className="group items-start overflow-hidden rounded md:flex"
			key={slug}
		>
			<div className="md:w-[50%]">
				<SainityImage
					ratio={4 / 3}
					className="mt-1 rounded"
					image={exhibition.images[0]}
					alt={title}
				/>
			</div>
			<div className="mt-4 self-center md:w-[40%] md:pl-32">
				<h2 className="relative z-10 text-2xl  tracking-tight text-zinc-800">{title}</h2>
				<span className="relative z-10 mt-2 block text-sm text-zinc-800">
					{toDate(exhibition.from)} - {toDate(exhibition.to)}
				</span>
				<span className="mt-4 block  line-clamp-3">{exhibition.description}</span>
				<span className="mt-4 block text-sm">{t('read-more')}</span>
			</div>
		</Link>
	)
}
