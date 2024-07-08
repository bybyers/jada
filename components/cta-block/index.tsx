'use client'

// Tools
import { SanityDocument } from "next-sanity"

// Types
import { CtaBlockType } from '@/types/components/cta-block-type'

// Components
import SimpleText from '@/components/simple-text'
import Route from '@/components/route'
import { Button } from "@/components/ui/button"


const CtaBlock: React.FC<CtaBlockType> = ({
  active,
  componentIndex,
  lastComponent,
  anchor,
  content,
  cta
}) => {
  

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'cta-block-' + componentIndex}`}
        className={`w-full ${componentIndex !== 0 && 'pt-16 lg:pt-24 xl:pt-36'} flex flex-col items-center`}
      >
        <div className='flex flex-col text-center items-center w-full max-w-6xl xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          {content && (
            <div className='content'>
              <SimpleText content={content} />
            </div>
          )}
          {cta && cta.active && (
            <div className='mt-5 flex justify-center md:justify-start'>
              <Route data={cta.route} className='flex'>
                <Button variant='default' fontSize='lg' size='lg'>
                  {cta.route.title}
                </Button>
              </Route>
            </div>
          )}
        </div>
        {componentIndex !== lastComponent && (
          <div className='w-full max-w-6xl xl:max-w-8xl rounded-full h-1 bg-gradient-to-r from-indigo-700 to-indigo-950' />
        )}
      </section>
    )
  }

  return null
}

export default CtaBlock