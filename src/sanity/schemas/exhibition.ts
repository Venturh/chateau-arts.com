import { defineField, defineType } from 'sanity'

import { toDate, toShortDate } from '@/lib/utils'
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
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'images',
			title: 'Bilder',
			type: 'array',
			of: [{ type: 'image', options: { hotspot: true, metadata: ['lqip'] } }],
			validation: (Rule) => Rule.required().min(1),
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
								params: { lang: locale ?? 'de' },
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
			images: 'images',
			from: 'from',
			to: 'to',
			lang: '__i18n_lang',
			refs: '__i18n_refs',
		},
		prepare(selection) {
			const { lang, refs, from, to } = selection
			const date = from ? `${toShortDate(from)} - ${toShortDate(to)}` : ''
			const title = selection.title ?? 'Unbenannt'
			const locales = getI18nSubtitle(lang, refs)
			const subtitle = `${date} | ${locales}`
			return {
				...selection,
				title,
				subtitle,
				media: selection.images?.[0],
			}
		},
	},
})
