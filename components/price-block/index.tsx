'use client'

// Tools
import Link from 'next/link'


// Types
import { PriceBlockType } from '@/types/components/price-block-type'


// Components
import SimpleText from '../simple-text'
import Route from '@/components/route'
import { Button } from "@/components/ui/button"


const PriceBlock: React.FC<PriceBlockType> = ({
  active,
  componentIndex,
  lastComponent,
  anchor,
  content,
  columns,
}) => {



  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'prices-block-' + componentIndex}`}
        className={`w-full ${componentIndex !== 0 && 'pt-16 lg:pt-24 xl:pt-36'} flex flex-col items-center`}
      >
        <div className='flex flex-col gap-y-16 text-center items-center w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          {content && (
            <div className='content'>
              <SimpleText content={content} />
            </div>
          )}
          <div className='flex flex-wrap justify-center'>
            {columns && columns.map((column, index) => {

              return (
                <div key={index} className='p-5 first:rounded-tl-3xl md:first:rounded-bl-3xl first:rounded-tr-3xl md:first:rounded-tr-none last:rounded-tr-none md:last:rounded-tr-3xl last:rounded-br-3xl last:rounded-bl-3xl md:last:rounded-bl-none md:last:rounded-bl-0 shadow-white shadow'>
                  <div className='w-full max-w-md flex flex-col items-center gap-y-10'>
                    <div className='space-y-3'>
                      <p>{column.title}</p>
                      <h2>${column.price}</h2>
                      <p>{column.offer}</p>
                    </div>
                    <div className='space-y-2'> 
                      {column.perks && column.perks.map((perk, index) => {

                        return (
                          <div key={index} className='flex gap-x-1 text-[#8f80c6]'>
                            <div className='border-2 border-[#8f80c6] rounded-md p-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p>{perk}</p>
                          </div>
                        )
                      })}
                    </div>
                    {column.payment && (
                      <div className='mt-5 flex justify-center md:justify-start'>
                        <Link href={column.payment}>
                          <Button variant='secondary'>
                            Get Started
                          </Button>
                        </Link>
                      </div>
                    )}
                    {column.book && (
                      <div className='mt-5 flex justify-center md:justify-start underline'>
                        <Link href={column.book}>
                          Book a Call
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {componentIndex !== lastComponent && (
          <div className='w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl rounded-full h-1 bg-gradient-to-r from-[#53546d] to-indigo-950' />
        )}
      </section>
    )
  }

  return null
}

export default PriceBlock