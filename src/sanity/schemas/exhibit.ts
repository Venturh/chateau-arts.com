import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'exhibit',
	title: 'Werke',
	type: 'document',
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
			name: 'dimension',
			title: 'Massangabe',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'other',
			title: 'Sonstiges',
			type: 'text',
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
		},
		prepare(selection) {
			const { title, artist } = selection
			return { title, subtitle: artist, media: selection.images[0] }
		},
	},
})
