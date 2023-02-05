import { defineField, defineType } from 'sanity'

import { getI18nSubtitle } from '../i18n'

export default defineType({
	name: 'exhibit',
	title: 'Werke',
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
			name: 'artist',
			title: 'Künstlername',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'year',
			title: 'Jahr',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'price',
			title: 'Preis',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'sold',
			title: 'Verkauft',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'info',
			title: 'Infos',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'images',
			title: 'Bilder',
			type: 'array',
			of: [{ type: 'image' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
			artist: 'artist',
			images: 'images',
			lang: '__i18n_lang',
			refs: '__i18n_refs',
		},
		prepare(selection) {
			const { title, refs, lang } = selection
			const subtitle = getI18nSubtitle(lang, refs)
			return { title, subtitle: subtitle, media: selection.images[0] }
		},
	},
})
