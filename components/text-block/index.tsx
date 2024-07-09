'use client'

// Tools
import { SanityDocument } from "next-sanity"

// Types


// Components



const TextBlock: React.FC<SanityDocument> = ({
  active,
  componentIndex,
  anchor,
  lastComponent,
}) => {

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'text-block-' + componentIndex}`}
        className={`w-full ${componentIndex !== 0 && 'pt-16 lg:pt-24 xl:pt-36'} flex flex-col items-center`}
      >
        <div className='w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          Text Block
        </div>
        {componentIndex !== lastComponent && (
          <div className='w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl rounded-full h-1 bg-gradient-to-r from-indigo-700 to-indigo-950' />
        )}
      </section>
    )
  }

  return null
}

export default TextBlock