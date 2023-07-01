import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from 'next-sanity'

import {
	Exhibit,
	Exhibition,
	exhibitIndexCountQuery,
	exhibitIndexPaginationQuery,
	exhibitLatestExceptSlugQuery,
	exhibitSlugQuery,
	exhibitionIndexQuery,
	exhibitionSlugQuery,
} from './sanity.queries'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: typeof document !== 'undefined',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
	return builder.image(source)
}

async function fetchAPI(query: string, previewData?: {}) {
	const res = await client.fetch(query, previewData)
	return res
}

export async function getAllExhibitions(lang: string): Promise<Exhibition[]> {
	return await fetchAPI(exhibitionIndexQuery, { lang })
}

export async function getExhibitionBySlug(lang: string, slug: string): Promise<Exhibition> {
	return await fetchAPI(exhibitionSlugQuery, { lang, slug })
}

export async function getPaginatedExhibits(perPage: number, start?: number): Promise<Exhibit[]> {
	const from = start ? (start - 1) * perPage : 0
	const to = start ? from + perPage : perPage

	return await fetchAPI(exhibitIndexPaginationQuery, { perPage, from, to })
}
export async function getExhibitsCount(): Promise<number> {
	return await fetchAPI(exhibitIndexCountQuery, {})
}

export async function getLatestExceptSlugExhibits(lang: string, slug: string): Promise<Exhibit[]> {
	return await fetchAPI(exhibitLatestExceptSlugQuery, { lang, slug })
}

export async function getExhibitBySlug(lang: string, slug: string): Promise<Exhibit> {
	return await fetchAPI(exhibitSlugQuery, { lang, slug })
}
