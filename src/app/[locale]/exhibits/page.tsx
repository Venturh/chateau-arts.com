import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/components/link'
import { getAllExhibits } from '@/lib/sanity.client'

export default function Home() {
	const t = useTranslations()
	const locale = useLocale()
	const exhibits = use(getAllExhibits(locale))

	return (
		<div>
			<h1>{t('exhibits')}</h1>
			<div className="space-y-4">
				{exhibits.map(({ title, slug }) => (
					<Link href={`/exhibits/${slug}`} key={slug}>
						<div>{title}</div>
					</Link>
				))}
			</div>
		</div>
	)
}
