import { useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { Badge } from '@/components/ui/badge'
import { SainityImage } from '@/components/ui/sanity-image'
import { Exhibit } from '@/lib/sanity.queries'
import { toCurrency } from '@/lib/utils'

export function ExhibitCard(exhibit: Exhibit) {
	const { sold } = exhibit
	const t = useTranslations()
	return (
		<Link className="group  space-y-3" href={`/exhibits/${exhibit.slug}`}>
			<SainityImage
				className="overflow-hidden rounded-md border"
				ratio={3 / 4}
				image={exhibit.images[0]}
				alt={exhibit.title}
			/>

			<div>
				<div className="flex items-start justify-between">
					<h3 className="font-medium leading-none">{exhibit.title}</h3>
					{sold && <Badge>{t('sold')}</Badge>}
				</div>
				<p className="mt-2 text-sm text-zinc-500">{exhibit.artist}</p>
				<p className="mt-1 text-sm text-zinc-500">{exhibit.year}</p>
				<p className="mt-1 text-sm text-zinc-500">{toCurrency(exhibit.price)}</p>
			</div>
		</Link>
	)
}
