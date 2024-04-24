import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'exhibit',
	title: 'Werke',
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
			title: 'Link (slug)',
			type: 'slug',
			options: {
				source: 'title.en',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'artist',
			title: 'Künstlername',
			type: 'localeString',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'year',
			title: 'Jahr',
			type: 'localeString',
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
			type: 'localeText',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'images',
			title: 'Bilder',
			type: 'array',
			of: [{ type: 'image' }],
		}),
	],
	orderings: [
		{
			title: 'Title',
			name: 'title',
			by: [{ field: 'title.de', direction: 'asc' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			artist: 'artist',
			images: 'images',
		},
		prepare(selection) {
			const title = selection.title.de ?? 'Kein Titel angegben'
			const subtitle = selection.artist.de ?? 'Kein Künstler angegeben'

			return { title, subtitle, media: selection.images[0] }
		},
	},
})
