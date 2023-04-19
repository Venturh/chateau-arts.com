import createIntlMiddleware from 'next-intl/middleware'

import { languages } from './sanity/i18n'

export default createIntlMiddleware({
	locales: languages.map(({ id }) => id),
	defaultLocale: 'de',
})

export const config = {
	matcher: ['/((?!api|studio|_next|.*\\..*).*)'],
}
