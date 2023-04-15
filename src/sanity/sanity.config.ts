import { languageFilter } from '@sanity/language-filter'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { ToolMenu } from '@/components/sanity/toolbar'
import { baseLanguage, languages } from './i18n'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const i18nConfig = {
	supportedLanguages: languages,
	defaultLanguages: [baseLanguage.id],
}

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	plugins: [deskTool(), visionTool(), languageFilter(i18nConfig)],
	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			toolMenu: ToolMenu,
		},
	},
	//   theme: myTheme
})
