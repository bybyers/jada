'use client'

// Tools
import Link from 'next/link'
import { inter } from '../../app/fonts'
import { motion } from 'framer-motion'

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
  ctaContent,
  cta
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

              // get first and last of index
              const first = index === 0
              const last = index === columns.length - 1

              return (
                <div key={index} className=' px-5 md:px-16 py-5 md:py-10 first:rounded-tl-3xl md:first:rounded-bl-3xl first:rounded-tr-3xl md:first:rounded-tr-none last:rounded-tr-none md:last:rounded-tr-3xl last:rounded-br-3xl last:rounded-bl-3xl md:last:rounded-bl-none md:last:rounded-bl-0 border-[#c8a7f2]  first:border-t-2 md:border-t-2 border-b-2 first:border-r-2 md:first:border-r-0 border-l-2 last:border-r-2 md:last:border-r-2 shadow shadow-white'>
                  <div className='w-full max-w-md flex flex-col items-center gap-y-2'>
                    <div className='space-y-5'>
                      <p className={`text-3xl font-medium bg-gradient-to-b ${last ? 'from-[#9c83fe]' : 'from-[#d6d5d5]'} ${last ? 'to-[#f6f5f5]' : 'to-white'} text-transparent bg-clip-text`}>{column.title}</p>
                      <h2 className={`text-7xl font-semibold bg-gradient-to-b ${last ? 'from-[#9c83fe]' : 'from-[#d6d5d5]'} ${last ? 'to-[#f6f5f5]' : 'to-white'} ${inter.className} text-transparent bg-clip-text`}>${column.price}</h2>
                      <p>{column.offer}</p>
                    </div>
                    <div className='space-y-5 mt-5'> 
                      {column.perks && column.perks.map((perk, index) => {

                        return (
                          <div key={index} className='flex gap-x-2 text-white'>
                            <div className='border border-[#8669ff] rounded-md p-1 flex justify-center items-center'>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p>{perk}</p>
                          </div>
                        )
                      })}
                    </div>
                    {column.payment && (
                      <div className='mt-16 flex justify-center md:justify-start'>
                        <Link href={column.payment}>
                          <Button variant={`${last ? 'gradient' : 'secondary'}`}>
                            Get Started
                          </Button>
                        </Link>
                      </div>
                    )}
                    {column.book && (
                      <div className='mt-5 text-gray-300 hover:text-white flex justify-center md:justify-start underline'>
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
          <div className='flex flex-col items-center w-full border-[#c8a7f2] border-2 rounded-3xl p-5 lg:p-10'>
            {ctaContent && (
              <div className='content bg-gradient-to-b from-[#d6d5d5] to-white text-transparent bg-clip-text'>
                <SimpleText content={ctaContent} />
              </div>
            )}
            {cta && cta.active && (
              <div className='mt-5 flex justify-center md:justify-start'>
                <Route data={cta.route} className='flex'>
                  <Button variant='secondary' fontSize='lg' size='lg'>
                    {cta.route.title}
                  </Button>
                </Route>
              </div>
            )}
          </div>
        </div>
        {componentIndex !== lastComponent && (
          <motion.div 
            className='w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl rounded-full h-1 bg-gradient-to-r from-[#53546d] to-indigo-950' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            transition={{ delay: 0.25 }}
          />
        )}
      </section>
    )
  }

  return null
}

export default PriceBlock