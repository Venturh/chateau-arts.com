import { defineType } from 'sanity'

import { languages } from '../i18n'

export default defineType({
	name: 'localeText',
	title: 'Localized text',
	type: 'object',
	fieldsets: [
		{
			title: 'Übersetzungen',
			name: 'translations',
			options: { collapsible: true },
		},
	],
	fields: languages.map((lang) => ({
		title: lang.title,
		name: lang.id,
		type: 'text',
		fieldset: lang.id === 'de' ? undefined : 'translations',
	})),
})
