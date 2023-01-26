import {defineType} from 'sanity'

const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'de', title: 'German' },
    { id: 'fr', title: 'French' }
]



export default defineType({
    title: 'Localized text',
    name: 'localeString',
    type: 'object',

    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: { collapsible: true }
      }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations'
    }))
})
