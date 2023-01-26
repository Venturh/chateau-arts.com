import {defineType} from 'sanity'

const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'de', title: 'German' },
    { id: 'fr', title: 'French' }
]


export default defineType({
    title: 'Localized text',
    name: 'localeText',
    type: 'object',

    fieldsets: [
      {
        title: 'überseztung',
        name: 'translations',
        options: { collapsible: true }
      }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
      type: 'text',
      fieldset: lang.isDefault ? null : 'translations'

    }))
})
