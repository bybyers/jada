'use client'

// Tools
import { SanityDocument } from "next-sanity"

// Types


// Components



const PriceBlock: React.FC<SanityDocument> = ({
  active,
  componentIndex,
  lastComponent,
  anchor
}) => {

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'prices-block-' + componentIndex}`}
        className='w-full pt-16 lg:pt-24 xl:pt-36 flex flex-col items-center'
      >
        <div className='flex flex-col text-center items-center w-full max-w-6xl xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          Price Block
        </div>
      </section>
    )
  }

  return null
}

export default PriceBlock