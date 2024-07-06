'use client'

// Tools
import { SanityDocument } from "next-sanity"

// Types


// Components



const TextBlock: React.FC<SanityDocument> = ({
  active,
  componentIndex,
  anchor
}) => {

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'text-block-' + componentIndex}`}
        className='w-full pt-16 lg:pt-24 xl:pt-36 flex justify-center'
      >
        <div className='w-full max-w-6xl xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          Text Block
        </div>
      </section>
    )
  }

  return null
}

export default TextBlock