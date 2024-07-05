import { groq } from 'next-sanity'


export const PAGES_QUERY = groq`*[_type == "page" && defined(slug.current)][]`


export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]`