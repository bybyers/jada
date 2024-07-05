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
        className='py-10 lg:py-24 xl:py-36 flex justify-center'
      >
        <div className='w-full max-w-6xl xl:max-w-8xl px-12'>
          Text Block
        </div>
      </section>
    )
  }

  return null
}

export default TextBlock