'use client'

// Tools


// Types
import { QaBlockType } from "@/types/components/qa-block-type"

// Components
import SimpleText from '../simple-text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Route from "@/components/route"


const QaBlock: React.FC<QaBlockType> = ({
  active,
  componentIndex,
  lastComponent,
  anchor,
  content,
  qa,
  cta
}) => {

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'qa-block-' + componentIndex}`}
        className={`w-full ${componentIndex !== 0 && 'pt-16 lg:pt-24 xl:pt-36'} flex flex-col items-center`}
      >
        <div className='flex flex-col text-center items-center w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          {content && (
            <div className='content'>
              <SimpleText content={content} />
            </div>
          )}
          <div className='w-full flex flex-wrap mt-10'>
            <div className='w-full lg:w-1/2 text-left'>
              <Accordion type="single" className='space-y-3' collapsible>
                {qa && qa.map((item, index) => {
                  return (
                    <AccordionItem key={`qa-${index}`} value={`qa-${index}`}>
                      <AccordionTrigger className='text-left text-2xl'>{item.question}</AccordionTrigger>
                      <AccordionContent className='content'>
                        <SimpleText content={item.answer} />
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end items-center gap-16'>
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

export default QaBlock