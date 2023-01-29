export const languages = [
	{ id: 'de', title: 'Deutsch' },
	{ id: 'en', title: 'English' },
	{ id: 'fr', title: 'Francais' },
]

export const baseLanguage = languages[0]

export function getI18nSubtitle(lang?: string, refs?: { _key: string }[]): string {
	if (!lang) return 'Noch nicht veröffentlicht'

	const locale = languages.find((l) => l.id === lang)?.title || ''
	if (!refs) return locale

	const locales = refs
		.map((ref) => languages.find((l) => l.id === ref._key)?.title)
		.filter(Boolean)
		.join(', ')

	return locales ? `${locale}, ${locales}` : locale
}
