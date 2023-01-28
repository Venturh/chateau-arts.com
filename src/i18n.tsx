import { NextIntlConfig } from 'next-intl'

import { languages } from './sanity/i18n'

const i18n: NextIntlConfig = {
	locales: languages.map(({ id }) => id),
	defaultLocale: 'en',
	async getMessages({ locale }) {
		return (await import(`../messages/${locale}.json`)).default
	},
}

export default i18n
