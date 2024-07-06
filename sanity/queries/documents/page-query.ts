import { groq } from 'next-sanity'
import { pageNavQuery } from '../components/page-nav-query'
import { imageQuery } from '../objects/image-query'
import { routeQuery } from '../objects/route-query'

export const PagesQuery = groq`*[_type == "page" && defined(slug.current)][]`

export const PageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
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
      // Handling all the blocks and their possible fields
      _type == 'ctaBlock' => {
        ...,
        cta {
          ...,
          route {
            ${routeQuery}
          }
        },
        image {
          ${imageQuery}
        },
      },
      _type == 'columnBlock' => {
        ...,
        rows[] {
          ...,
          columns[] {
            ...,
            image {
              ${imageQuery}
            },
            video {
            ${imageQuery}
          },
            content[] {
              ... // Assuming there can be rich text or other fields in content
            }
          }
        }
      },
      _type == 'reviewBlock' => {
        ...,
        reviews[] {
          ... // Assuming there are references or objects within reviews
        },
        titles
      },
      _type == 'priceBlock' => {
        ...,
        columns[] {
          ...,
          image {
            ${imageQuery}
          }
        }
      },
      _type == 'videoColumnArray' => {
        ...,
        columns[] {
          ...,
          video {
            ${imageQuery}
          },
        }
      },
      // Add other block types if needed
    }
  }
`
