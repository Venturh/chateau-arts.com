import { groq } from 'next-sanity'

const today = new Date().toISOString().slice(0, 10)
const from = '2023-02-01'
const to = '2023-02-12'

const isBetweenFromAndTo = `from <= "${today}" && "${today}" <= to`
const isPastFrom = `from <= "${today}" && to < "${today}"`

const exhibitFields = groq`
  _id,
  title,
  artist,
  year,
  info,
  price,
  sold,
  images,
  "slug": slug.current,
`

const exhibitionFields = groq`
  _id,
  title,
  description,
  from,
  to,
  mainImage,
  images,
  "slug": slug.current,
`

export const exhibitionIndexQuery = groq`
*[_type == "exhibition" && __i18n_lang == $lang] | order(from desc) | order(to desc){
  ${exhibitionFields}
}`

export const exhibitionLatestQuery = groq`
*[_type == "exhibition" && __i18n_lang == $lang] | order(from desc) | order(to desc) [0...3] {
    ${exhibitionFields}
  }`

export const exhibitionCurrentQuery = groq`
*[_type == "exhibition" && __i18n_lang == $lang && from <= "${today}" && "${today}" <= to ] | order(from desc) | order(to desc) [0...3] {
    ${exhibitionFields}
  }`

export const exhibitionPastQuery = groq`
*[_type == "exhibition" && __i18n_lang == $lang && from <= "${today}" && to < "${today}" ] | order(from desc) | order(to desc) [0...3] {
    ${exhibitionFields}
  }`

export const exhibitionSlugQuery = groq`
*[_type=='exhibition' && __i18n_lang == $lang && slug.current == $slug][0]{
    ${exhibitionFields}
    ${groq`
    exhibits[]->{
        ${exhibitFields}
        }
    `}
}`

export const exhibitIndexQuery = groq`
*[_type == "exhibit" && __i18n_lang == $lang] | order(date desc, _updatedAt desc) {
  ${exhibitFields}
}`

export const exhibitLatestQuery = groq`
*[_type == "exhibit" && __i18n_lang == $lang] | order(date desc, _updatedAt desc)[0...6] {
  ${exhibitFields}
}`

export const exhibitLatestExceptSlugQuery = groq`
*[_type == "exhibit" && __i18n_lang == $lang && slug.current != $slug] | order(date desc, _updatedAt desc)[0...6] {
  ${exhibitFields}
}`

export const exhibitSlugQuery = groq`
*[_type=='exhibit' && __i18n_lang == $lang && slug.current == $slug][0] {
  ${exhibitFields}
}`

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
	title: string
	slug: string
	artist: string
	year: string
	info: any
	other: string
	price: number
	sold: boolean
	images: SanityImageType[]
}

export interface Exhibition {
	_id: string
	title: string
	slug: string
	from: string
	to: string
	description?: any
	images: SanityImageType[]
	exhibits: Exhibit[]
}
