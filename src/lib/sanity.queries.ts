import { languageIds } from '@/sanity/i18n'
import { groq } from 'next-sanity'

const today = new Date().toISOString().slice(0, 10)

const exhibitFields = groq`
  _id,
  title,
  artist,
  year,
  info,
  price,
  sold,
  images,
  slug,
`

const exhibitionFields = groq`
  _id,
  title,
  description,
  from,
  to,
  mainImage,
  images,
  "slug": slug[$lang],
`

export const exhibitionIndexQuery = groq`
*[_type == "exhibition"] | order(from desc) | order(to desc){
  ${exhibitionFields}
}`

export const exhibitionLatestQuery = groq`
*[_type == "exhibition"] | order(from desc) | order(to desc) [0...3] {
    ${exhibitionFields}
  }`

export const exhibitionCurrentQuery = groq`
*[_type == "exhibition" && from <= "${today}" && "${today}" <= to ] | order(from desc) | order(to desc) [0] {
    ${exhibitionFields}
  }`

export const exhibitionPastQuery = groq`
*[_type == "exhibition" && from <= "${today}" && to < "${today}" ] | order(from desc) | order(to desc) [0...3] {
    ${exhibitionFields}
  }`

export const exhibitionUpcomingQuery = groq`
*[_type == "exhibition" && from > "${today}"] | order(from desc) | order(to desc) [0...3] {
    ${exhibitionFields}
  }`

export const exhibitionSlugQuery = groq`
*[_type=='exhibition' && slug[$lang] == $slug][0]{
    ${exhibitionFields}
    ${groq`
    exhibits[]->{
        ${exhibitFields}
        }
    `}
}`

export const exhibitIndexQuery = groq`
*[_type == "exhibit"] | order(date desc, _updatedAt desc) {
  ${exhibitFields}
}`

export const exhibitLatestQuery = groq`
*[_type == "exhibit"] | order(date desc, _updatedAt desc)[0...6] {
  ${exhibitFields}
}`

export const exhibitLatestExceptSlugQuery = groq`
*[_type == "exhibit" && slug[$lang] != $slug] | order(date desc, _updatedAt desc)[0...6] {
  ${exhibitFields}
}`

export const exhibitSlugQuery = groq`
*[_type=='exhibit' && slug[$lang] == $slug][0] {
  ${exhibitFields}
}`

interface LocaleText {
	_type: string
	de: string
	en: string
	fr: string
}

interface LocaleString {
	_type: string
	de: string
	en: string
	fr: string
}

export interface SanityImageType {
	_key: string
	alt?: string
	hotspot?: {
		x: number
		y: number
		height: number
		width: number
	}
	asset: {
		_ref: string
		_type: string
	}
}

export interface Exhibit {
	_id: string
	title: LocaleString
	slug: LocaleString
	artist: LocaleString
	year: LocaleString
	info: LocaleString
	price: number
	sold: boolean
	images: SanityImageType[]
}

export interface Exhibition {
	_id: string
	title: LocaleString
	slug: LocaleString
	from: string
	to: string
	description: LocaleString
	images: SanityImageType[]
	exhibits: Exhibit[]
}
