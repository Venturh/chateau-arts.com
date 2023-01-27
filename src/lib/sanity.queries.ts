import { groq } from 'next-sanity'

const exhibitFields = groq`
  _id,
  title,
  artist,
  year,
  dimension,
  other,
  price,
  sold,
  images,
`

const exhibitionFields = groq`
  _id,
  title,
  from,
  to,
  mainImage,
  "slug": slug.current,
  "exhibits": *[_type == "exhibit"] {
    ${exhibitFields}
    }
`

export const exhibitionIndexQuery = groq`
*[_type == "exhibition" && __i18n_lang == $lang] | order(date desc, _updatedAt desc) {
  ${exhibitionFields}
}`

export const exhibitionSlugQuery = groq`
*[_type=='exhibition' && slug.current == $slug][0] {
  ${exhibitionFields}
}`

const exhibitsFields = groq`
  _id,
  title,
  from,
  to,
  mainImage,
  "slug": slug.current,
  "exhibits": *[_type == "exhibit"] {
    ${exhibitFields}
    }
`

export const exhibitIndexQuery = groq`
*[_type == "exhibit"] | order(date desc, _updatedAt desc) {
  ${exhibitsFields}
}`

export const exhibitSlugQuery = groq`
*[_type=='exhibit' && slug.current == $slug][0] {
  ${exhibitsFields}
}`

export interface Exhibit {
	_id: string
	title: string
	slug: string
	artist: string
	year: string
	dimension: string
	other: string
	price: number
	sold: boolean
	images: any
}

export interface Exhibition {
	_id: string
	title: string
	slug: string
	coverImage: any
	from: string
	to: string
	mainImage?: any
}
