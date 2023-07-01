import { Link, useLocale, useTranslations } from 'next-intl'

import { SanityImage } from '@/components/ui/sanity-image'
import { Exhibition } from '@/lib/sanity.queries'
import { toDate } from '@/lib/utils'

interface Props {
	exhibition: Exhibition
}
export function ExhibitionRowCard({ exhibition }: Props) {
	const t = useTranslations()
	const locale = useLocale()
	const { slug, title } = exhibition
	return (
		<Link
			locale={locale}
			href={`/themes/${slug}`}
			className="group items-start overflow-hidden rounded md:flex"
			key={slug}
		>
			<div className="md:w-[50%]">
				<SanityImage className="mt-1 rounded" image={exhibition.images[0]} />
			</div>
			<div className="mt-4 self-center md:w-[40%] md:pl-32">
				<h2 className="relative z-10 text-2xl  tracking-tight text-zinc-900 dark:text-zinc-100">
					{title[locale]}
				</h2>

				<p className="mt-4 line-clamp-6 ">{exhibition.description[locale]}</p>
				<span className="mt-4 block text-sm">{t('read-more')}</span>
			</div>
		</Link>
	)
}
