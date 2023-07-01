import { Link, useLocale, useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibit } from '@/lib/sanity.queries'
import { toCurrency } from '@/lib/utils'

export function ExhibitCard(exhibit: Exhibit) {
	const { sold } = exhibit
	const t = useTranslations()
	const locale = useLocale()

	return (
		<Link locale={locale} className="group relative space-y-3" href={`/artworks/${exhibit.slug}`}>
			<div className="relative h-[250px] w-full">
				<SanityImage
					fill
					className="rounded-md border bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800"
					image={exhibit.images[0]}
				/>
			</div>

			<div>
				<div className="flex items-start justify-between">
					<h3 className="font-medium leading-none">{exhibit.title[locale]}</h3>
					{sold && <Badge>{t('sold')}</Badge>}
				</div>
				<div className="text-zinc-1000 text-sm dark:text-zinc-200">
					<p className="mt-2 ">{exhibit.artist[locale]}</p>
					<p className="mt-1 ">{exhibit.year[locale]}</p>
					<p className="mt-1 ">{toCurrency(exhibit.price)}</p>
				</div>
			</div>
		</Link>
	)
}
