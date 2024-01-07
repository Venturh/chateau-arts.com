import { Link, useLocale } from 'next-intl'

import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'

interface Props {
	exhibition: Exhibition
}
export function ExhibitionCard({ exhibition }: Props) {
	const locale = useLocale()
	const { slug, title } = exhibition
	return (
		<Link locale={locale} href={`/themes/${slug}`} className="group overflow-hidden" key={slug}>
			<SanityImage className="aspect-square rounded-md" image={exhibition.images[0]} />

			<div className="mt-4">
				<h2 className="relative z-10 text-xl tracking-tight text-zinc-900 dark:text-zinc-100">
					{title[locale]}
				</h2>
			</div>
		</Link>
	)
}
