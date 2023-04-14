import {
	getFilteredDocumentTypeListItems,
	withDocumentI18nPlugin,
} from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { ToolMenu } from '@/components/sanity/toolbar'
import { baseLanguage, languages } from './i18n'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const i18nConfig = {
	languages,
	base: baseLanguage.id,
}

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,

	plugins: withDocumentI18nPlugin(
		[
			deskTool({
				structure: (S, { schema }) => {
					const docTypeListItems = getFilteredDocumentTypeListItems({
						S,
						schema,
						config: i18nConfig,
					})

					return S.list()
						.title('Content')
						.items([
							//anything else
							...docTypeListItems,
							//anything else
						])
				},
			}),
			visionTool(),
		],
		i18nConfig
	),

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
