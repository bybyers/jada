import { groq } from 'next-sanity'
import { pageNavQuery } from '../components/page-nav-query'
import { imageQuery } from '../objects/image-query'
import { routeQuery } from '../objects/route-query'


export const PagesQuery = groq`*[_type == "page" && defined(slug.current)][]`


export const PageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  pageNav {
    ${pageNavQuery}
  },
  seo {
    ...,
    shareGraphic {
      ${imageQuery}
    },
  },
  sections[] {
    ...,
    image {
      ${imageQuery}
    },
    ctaBlock {  
      active,
      route {
        ${routeQuery}
      }
    },
  }
}`