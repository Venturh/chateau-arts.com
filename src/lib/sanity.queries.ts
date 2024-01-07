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
  "slug": slug.current,
  _updatedAt
`

const exhibitionFields = groq`
  _id,
  title,
  description,
  from,
  mainImage,
  images,
  "slug": slug.current,
`

export const exhibitionIndexQuery = groq`
*[_type == "exhibition"] | order(from asc){
  ${exhibitionFields}
}`

export const exhibitionIndexPaginationQuery = groq`
*[_type == "exhibition"] | order(date desc, _updatedAt desc)  [$from...$to] {
  ${exhibitionFields}
}`

export const exhibitionIndexCountQuery = groq`count(*[_type == "exhibition"])`

export const exhibitionLatestQuery = groq`
*[_type == "exhibition"] | order(from desc)[0...1] {
  ${exhibitionFields}
}`

export const exhibitionsLatestQuery = groq`
*[_type == "exhibition"] | order(from desc)[0...5] {
  ${exhibitionFields}
}`

export const exhibitionSlugQuery = groq`
*[_type=='exhibition' && slug.current == $slug][0]{
    ${exhibitionFields}
    ${groq`
    exhibits[]->{
        ${exhibitFields}
        }
    `}
}`

export const exhibitIndexPaginationQuery = groq`
*[_type == "exhibit"] | order(date desc, _updatedAt desc)  [$from...$to] {
  ${exhibitFields}
}`

export const exhibitIndexCountQuery = groq`count(*[_type == "exhibit"])`

export const exhibitLatestExceptSlugQuery = groq`
*[_type == "exhibit" && slug != $slug] | order(date desc, _updatedAt desc)[0...6] {
  ${exhibitFields}
}`

export const exhibitSlugQuery = groq`
*[_type=='exhibit' && slug.current == $slug][0] {
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
	slug: string
	artist: LocaleString
	year: LocaleString
	info: LocaleString
	price: number
	sold: boolean
	images: SanityImageType[]
	_updatedAt: string
}

export interface Exhibition {
	_id: string
	title: LocaleString
	slug: string
	from: string
	description: LocaleString
	images: SanityImageType[]
	exhibits: Exhibit[]
}
