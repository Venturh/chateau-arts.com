import createIntlMiddleware from 'next-intl/middleware'

import { languages } from './sanity/i18n'

export default createIntlMiddleware({
	// A list of all locales that are supported
	locales: languages.map(({ id }) => id),

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: 'en',
})

export const config = {
	// Skip all non-content paths
	matcher: ['/((?!api|_next|favicon.ico).*)'],
}
