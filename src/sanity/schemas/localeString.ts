import { defineType } from 'sanity'

import { languages } from '../i18n'

export default defineType({
	title: 'Localized string',
	name: 'localeString',
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
		type: 'string',
		fieldset: lang.id === 'de' ? undefined : 'translations',
	})),
})
