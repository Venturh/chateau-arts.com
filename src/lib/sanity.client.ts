import { createClient, groq } from 'next-sanity'

import { Exhibition, exhibitionIndexQuery, exhibitionSlugQuery } from './sanity.queries'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: typeof document !== 'undefined',
})

export async function getAllExhibitions(): Promise<Exhibition[]> {
	if (client) {
		return (await client.fetch(exhibitionIndexQuery)) || []
	}
	return []
}

export async function getExhibitionBySlug(slug: string): Promise<Exhibition> {
	if (client) {
		return (await client.fetch(exhibitionSlugQuery, { slug })) || ({} as any)
	}
	return {} as any
}
