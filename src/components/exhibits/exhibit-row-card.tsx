import { useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { Badge } from '@/components/ui/badge'
import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibit } from '@/lib/sanity.queries'
import { toCurrency } from '@/lib/utils'

export function ExhibitRowCard(exhibit: Exhibit) {
	const { sold } = exhibit
	const t = useTranslations()
	return (
		<Link className="grid grid-cols-3 gap-x-6" href={`/exhibits/${exhibit.slug}`}>
			<SanityImage className="overflow-hidden rounded-md border" image={exhibit.images[0]} />
			<div className="col-span-2">
				<div className="flex items-start justify-between">
					<h3 className="font-medium leading-none">{exhibit.title}</h3>
					{sold && <Badge>{t('sold')}</Badge>}
				</div>
				<p className="mt-2 text-sm text-zinc-500">{exhibit.artist}</p>
				<p className="mt-1 text-sm text-zinc-500">{exhibit.year}</p>
				{!sold && <p className="mt-1 text-sm text-zinc-500">{toCurrency(exhibit.price)}</p>}
			</div>
		</Link>
	)
}
