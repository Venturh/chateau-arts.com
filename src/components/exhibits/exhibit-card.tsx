import { useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { Badge } from '@/components/ui/badge'
import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibit } from '@/lib/sanity.queries'
import { toCurrency } from '@/lib/utils'

export function ExhibitCard(exhibit: Exhibit) {
	const { sold } = exhibit
	const t = useTranslations()
	return (
		<Link className="group relative space-y-3" href={`/exhibits/${exhibit.slug}`}>
			<div className="relative h-[250px] w-full">
				<SanityImage fill className="rounded-md border bg-zinc-50" image={exhibit.images[0]} />
			</div>

			<div>
				<div className="flex items-start justify-between">
					<h3 className="font-medium leading-none">{exhibit.title}</h3>
					{sold && <Badge>{t('sold')}</Badge>}
				</div>
				<div className="text-sm text-zinc-500 dark:text-zinc-200">
					<p className="mt-2 ">{exhibit.artist}</p>
					<p className="mt-1 ">{exhibit.year}</p>
					<p className="mt-1 ">{toCurrency(exhibit.price)}</p>
				</div>
			</div>
		</Link>
	)
}
