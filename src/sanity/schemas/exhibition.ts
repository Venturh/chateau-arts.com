import { defineField, defineType } from 'sanity'

import { getI18nSubtitle } from '../i18n'

export default defineType({
	name: 'exhibition',
	title: 'Austellungen',
	type: 'document',
	i18n: true,
	fields: [
		defineField({
			name: 'title',
			title: 'Titel',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'from',
			title: 'Von',
			type: 'date',
			options: {
				dateFormat: 'DD.MM.YYYY',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'to',
			title: 'Bis',
			type: 'date',
			options: {
				dateFormat: 'DD.MM.YYYY',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Beschreibung',
			type: 'blockContent',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mainImage',
			title: 'Hauptbild',
			type: 'image',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'images',
			title: 'Bilder',
			type: 'array',
			of: [{ type: 'image' }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'exhibits',
			title: 'Austellungstücke',
			type: 'array',

			of: [
				{
					type: 'reference',
					to: { type: 'exhibit' },
					options: {
						filter: ({ document }) => {
							const locale = document.__i18n_lang

							return {
								filter: `__i18n_lang == $lang`,
								params: { lang: locale },
							}
						},
					},
				},
			],
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
			lang: '__i18n_lang',
			refs: '__i18n_refs',
		},
		prepare(selection) {
			const { lang, refs } = selection
			const refCount = refs?.length ?? 0
			const subtitle = getI18nSubtitle(lang, refCount)
			return {
				...selection,
				title: selection.title ?? 'Unbenannt',
				subtitle,
			}
		},
	},
})
