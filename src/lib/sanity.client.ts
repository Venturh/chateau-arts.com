import { createClient } from 'next-sanity'

import {
	Exhibit,
	Exhibition,
	exhibitIndexQuery,
	exhibitSlugQuery,
	exhibitionIndexQuery,
	exhibitionSlugQuery,
} from './sanity.queries'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: typeof document !== 'undefined',
})

export async function getAllExhibitions(lang: string): Promise<Exhibition[]> {
	if (client) {
		return (await client.fetch(exhibitionIndexQuery, { lang })) || []
	}
	return []
}

export async function getExhibitionBySlug(slug: string): Promise<Exhibition> {
	if (client) {
		return (await client.fetch(exhibitionSlugQuery, { slug })) || ({} as any)
	}
	return {} as any
}

export async function getAllExhibits(): Promise<Exhibit[]> {
	if (client) {
		return (await client.fetch(exhibitIndexQuery, {})) || []
	}
	return []
}

export async function getExhibitBySlug(slug: string): Promise<Exhibit> {
	if (client) {
		return (await client.fetch(exhibitSlugQuery, { slug })) || ({} as any)
	}
	return {} as any
}
