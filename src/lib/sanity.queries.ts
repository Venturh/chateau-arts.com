import { groq } from 'next-sanity'

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
  mainImage,
  images,
  "slug": slug[$lang],
`

export const exhibitionIndexQuery = groq`
*[_type == "exhibition"] | order(from asc){
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

export const exhibitLatestExceptSlugQuery = groq`
*[_type == "exhibit" && slug[$lang] != $slug] | order(date desc, _updatedAt desc)[0...6] {
  ${exhibitFields}
}`

export const exhibitSlugQuery = groq`
*[_type=='exhibit' && slug[$lang] == $slug][0] {
  ${exhibitFields}
}`

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
	description: LocaleString
	images: SanityImageType[]
	exhibits: Exhibit[]
}
