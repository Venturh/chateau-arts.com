import { getRequestConfig } from 'next-intl/server'

import { languages } from './sanity/i18n'

export default getRequestConfig(async ({ locale }) => ({
	locales: languages.map(({ id }) => id),
	defaultLocale: 'de',
	messages: (await import(`../messages/${locale}.json`)).default,
}))
