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
			<div className="relative overflow-hidden rounded-md border">
				<SainityImage height={250} width={250} image={exhibit.images[0]} alt={exhibit.title} />
				{sold && (
					<div className="absolute bottom-1 left-1">
						<Badge>{t('sold')}</Badge>
					</div>
				)}
			</div>

			<div className="">
				<h3 className="font-medium leading-none">{exhibit.title}</h3>
				<p className="mt-2 text-sm text-zinc-500">{exhibit.artist}</p>
				<p className="mt-1 text-sm text-zinc-500">{exhibit.year}</p>
				<p className="mt-1 text-sm text-zinc-500">{toCurrency(exhibit.price)}</p>
			</div>
		</Link>
	)
}
