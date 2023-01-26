

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
*[_type == "exhibition"] | order(date desc, _updatedAt desc) {
  ${exhibitionFields}
}`

export const exhibitionSlugQuery = groq`
*[_type=='exhibition' && slug.current == $slug][0] {
  ${exhibitionFields}
}`


interface localeString {
    _type: string
    en: string
    de: string
    fr: string
}



export interface Exhibit {
    _id: string
    title: string
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
    title: localeString
    coverImage: any
    from: string
    to: string
    mainImage?: any
    slug: string
}
