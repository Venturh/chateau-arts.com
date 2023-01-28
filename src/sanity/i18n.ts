export const languages = [
	{ id: 'de', title: 'Deutsch' },
	{ id: 'en', title: 'English' },
	{ id: 'fr', title: 'Francais' },
]

export const baseLanguage = languages[0]

export function getI18nSubtitle(lang?: string, refCount?: number) {
	if (!lang) return 'Noch nicht veröffentlicht'
	return `${lang} | ${refCount && refCount > 0 ? refCount : 'keine'} Übersetzungen`
}
