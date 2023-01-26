import Layout from 'components/layout'
import { useTranslations } from 'next-intl'

export default function Index() {
	const t = useTranslations()

	return (
		<Layout>
			<p>{t('hero_title')}</p>
		</Layout>
	)
}
