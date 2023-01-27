import { useTranslations } from 'next-intl'

export default function Index() {
	const t = useTranslations()

	return (
		<div>
			<p>{t('hero_title')}</p>
		</div>
	)
}
