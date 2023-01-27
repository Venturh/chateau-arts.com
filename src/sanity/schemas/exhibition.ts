import { defineField, defineType } from 'sanity'

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
			of: [{ type: 'reference', to: { type: 'exhibit' } }],
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
			const refCount = selection.refs?.length ?? 0
			const subtitle =
				refCount > 0 ? `${refCount} Übersetzung${refCount > 1 ? 'en' : ''}` : 'Keine Übersetzung'
			return {
				...selection,
				title: selection.title ?? 'Unbenannt',
				subtitle,
			}
		},
	},
})
