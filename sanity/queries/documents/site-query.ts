import { groq } from 'next-sanity'
import { imageQuery } from '../objects/image-query'

export const getSite = groq`*[_type == "site"] {
  _id,
  _createdAt,
  _updatedAt,
  ...,
  seo {
    ...,
    shareGraphic {
      ${imageQuery}
    },
  },
}`