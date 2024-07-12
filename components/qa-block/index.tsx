'use client'

// Tools
import { motion } from "framer-motion"

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
            <motion.div 
              className='content'
              initial={{ 
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1
              }}
              viewport={{ once: true }} 
              transition={{ 
                delay: componentIndex !== 0 ? 0.5 : 0,
                type: 'spring',
                duration: 1.5
              }}
            >
              <SimpleText content={content} />
            </motion.div>
          )}
          <div className='w-full flex flex-wrap mt-10'>
            <motion.div 
              className='w-full lg:w-1/2 text-left'
              initial={{ 
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1
              }}
              viewport={{ once: true }} 
              transition={{ 
                delay: componentIndex !== 0 ? 0.5 : 0,
                type: 'spring',
                duration: 1.5
              }}
            >
              <Accordion type="single" className='space-y-3' collapsible>
                {qa && qa.map((item, index) => {
                  return (
                    <AccordionItem key={`qa-${index}`} value={`qa-${index}`}>
                      <AccordionTrigger className='text-left text-2xl'>{item.question ? item.question : ''}</AccordionTrigger>
                      <AccordionContent className='content'>
                        {item.answer && (
                          <SimpleText content={item.answer} />
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </motion.div>
            <motion.div 
              className='w-full lg:w-1/2 flex justify-center lg:justify-end items-center gap-16'
              initial={{ 
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1
              }}
              viewport={{ once: true }} 
              transition={{ 
                delay: componentIndex !== 0 ? 0.5 : 0,
                type: 'spring',
                duration: 1.5
              }}
            >
              {cta && cta.active && (
                <div className='mt-5 flex justify-center md:justify-start'>
                  <Route data={cta.route} className='flex'>
                    <Button variant='default' fontSize='lg' size='lg'>
                      {cta?.route?.title ? cta?.route?.title : 'Learn More'}
                    </Button>
                  </Route>
                </div>
              )}
            </motion.div>
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

export default QaBlock