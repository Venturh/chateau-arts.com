import { use } from 'react'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

import { ContactForm } from '@/components/contact-form'
import { ExhibitRowCard } from '@/components/exhibits/exhibit-row-card'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { SectionHeader } from '@/components/ui/section-header'
import { getExhibitBySlug } from '@/lib/sanity.client'
import { makeMetaData } from '@/lib/utils'

type Props = {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale, slug } = params

	const metaData = await makeMetaData(locale, {
		optionalTitleKey: 'request-exhibit',
		optionalUrl: `${process.env.NEXT_PUBLIC_URL}/${locale}/exhibits/${slug}/contact`,
	})

	return metaData
}

export default function ExhibitContact({ params: { slug } }: Props) {
	const locale = useLocale()
	const t = useTranslations()
	const exhibit = use(getExhibitBySlug(slug))

	const breadcrumbs: Breadcrumb[] = [
		{ name: t('home'), href: '/' },
		{ name: t('exhibits'), href: '/artworks' },
		{ name: exhibit.title[locale], href: `/artworks/${exhibit.slug}` },
		{ name: t('contact') },
	]

	return (
		<div className="h-full">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="mx-auto w-full max-w-2xl space-y-6 rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
				<SectionHeader title={t('contact')} />
				<ExhibitRowCard {...exhibit} />
				<ContactForm
					exhibit={exhibit}
					contactName={t('contact_name')}
					contactEmail={t('contact_email')}
					contactMessage={t('contact_message')}
					contactSend={t('contact_send')}
					successMessage={t('contact_success')}
				/>
			</div>
		</div>
	)
}
