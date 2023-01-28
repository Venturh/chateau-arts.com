import { notFound } from 'next/navigation'
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

async function fetchAPI(query: string, previewData?: {}) {
	const res = await client.fetch(query, previewData)
	if (!res) {
		return notFound()
	}
	return res
}

export async function getAllExhibitions(lang: string): Promise<Exhibition[]> {
	return await fetchAPI(exhibitionIndexQuery, { lang })
}

export async function getExhibitionBySlug(lang: string, slug: string): Promise<Exhibition> {
	return await fetchAPI(exhibitionSlugQuery, { lang, slug })
}

export async function getAllExhibits(lang: string): Promise<Exhibit[]> {
	return await fetchAPI(exhibitIndexQuery, { lang })
}

export async function getExhibitBySlug(lang: string, slug: string): Promise<Exhibit> {
	return await fetchAPI(exhibitSlugQuery, { lang, slug })
}
