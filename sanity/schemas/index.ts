// arrays
import columnArray from './arrays/column-array-schema'
import videoColumnArray from './arrays/video-column-array-schema'

// documents
import page from './documents/page'
import site from './documents/site-schema'
import navigation from './documents/navigation-schema'
import review from './documents/review-schema'
import infoBlock from './components/info-block-schema'

// components
import sections from './components/page-builder-schema'
import seo from './components/seo-schema'
import social from './components/social-schema'
import columnBlock from './components/column-block-schema'
import reviewBlock from './components/review-block-schema'
import qaBlock from './components/qa-block-schema'
import ctaBlock from './components/cta-block-schema'
import videoBlock from './components/video-block-schema'
import priceBlock from './components/price-block-schema'

// objects
import defaultImage from './objects/default-img-schema'
import defaultVideo from './objects/default-video-schema'
import cta from './objects/cta-schema'
import route from './objects/route-schema'
import column from './objects/column-schema'
import price from './objects/price-schema'
import qa from './objects/qa-schema'
import videoColumn from './objects/video-column-schema'
import simpleText from './objects/simple-text-schema'

const schemas = [
  //arrays
  columnArray,
  videoColumnArray,

  // documents
  page,
  site,
  navigation,
  review,

  // components
  sections,
  seo,
  social,
  columnBlock,
  reviewBlock,
  infoBlock,
  qaBlock,
  ctaBlock,
  videoBlock,
  priceBlock,

  // objects
  defaultImage,
  defaultVideo,
  cta,
  route,
  column,
  videoColumn,
  price,
  qa,
  simpleText,
]

export default schemas
