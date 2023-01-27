import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { getAllExhibitions } from '@/lib/sanity.client'

export default function Home() {
	const t = useTranslations()
	const locale = useLocale()
	const exhibitions = use(getAllExhibitions(locale))

	return (
		<div>
			<h1>{t('exhibitions')}</h1>
			<div className="space-y-4">
				{exhibitions.map(({ title, slug }) => (
					<Link href={`/exhibitions/${slug}`} key={slug}>
						<div>{title}</div>
					</Link>
				))}
			</div>
		</div>
	)
}
