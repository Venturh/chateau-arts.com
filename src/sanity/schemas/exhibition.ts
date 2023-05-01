import { defineField, defineType } from 'sanity'

import { toDate, toShortDate } from '@/lib/utils'

export default defineType({
	name: 'exhibition',
	title: 'Austellungen',
	type: 'document',
	options: {
		languageFilter: true,
	},
	fields: [
		defineField({
			name: 'title',
			title: 'Titel',
			type: 'localeString',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title.en',
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
			name: 'description',
			title: 'Beschreibung',
			type: 'localeText',
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
				},
			],
			validation: (Rule) => Rule.required(),
		}),
	],
	orderings: [
		{
			title: 'Title',
			name: 'title',
			by: [{ field: 'title.de', direction: 'asc' }],
		},
		{
			title: 'Zeitraum',
			name: 'from',
			by: [{ field: 'from', direction: 'asc' }],
		},
	],

	preview: {
		select: {
			title: 'title',
			images: 'images',
			from: 'from',
		},
		prepare(selection) {
			const title = selection.title.de ?? 'Kein Titel angegben'
			const subtitle = selection.from ? toShortDate(selection.from) : ''

			return {
				...selection,
				title,
				subtitle,
				media: selection.images?.[0],
			}
		},
	},
})
