import { groq } from 'next-sanity'


export const getPagePaths = groq`*[_type == "page" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`


export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current
}`