import { use } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { ContactForm } from '@/components/contact-form'
import { ExhibitRowCard } from '@/components/exhibits/exhibit-row-card'
import { Breadcrumb, Breadcrumbs } from '@/components/ui/breadcumbs'
import { SectionHeader } from '@/components/ui/section-header'
import { getExhibitBySlug } from '@/lib/sanity.client'

type Props = {
	params: {
		slug: string
	}
}

export default function ExhibitContact({ params: { slug } }: Props) {
	const locale = useLocale()
	const t = useTranslations()
	const exhibit = use(getExhibitBySlug(locale, slug))

	const breadcrumbs: Breadcrumb[] = [
		{ name: t('home'), href: '/' },
		{ name: t('exhibits'), href: '/exhibits' },
		{ name: exhibit.title, href: `/exhibits/${exhibit.slug}` },
		{ name: t('contact') },
	]

	return (
		<div className="h-full">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="flex h-full flex-col justify-center">
				<div className="mx-auto w-full max-w-2xl rounded-lg border border-gray-200 p-6">
					<SectionHeader title={t('contact')} />
					<ExhibitRowCard {...exhibit} />
					<ContactForm
						contactName={t('contact_name')}
						contactEmail={t('contact_email')}
						contactMessage={t('contact_message')}
						contactSend={t('contact_send')}
						successMessage={t('contact_success')}
					/>
				</div>
			</div>
		</div>
	)
}
