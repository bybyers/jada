'use client'

// Tools
import { motion } from "framer-motion"

// Types
import { ColumnBlockType } from "@/types/components/column-block-type"
import { ColumnArrayType } from "@/types/arrays/column-array-type"
import { VideoColumnArrayType } from "@/types/arrays/video-column-array-type"

// Components
import SimpleText from "@/components/simple-text"
import ColumnArray from "@/components/column-array"
import ColumnText from "@/components/column-text"
import VideoArray from "@/components/video-array"

const ColumnBlock: React.FC<ColumnBlockType> = ({
  active,
  componentIndex,
  lastComponent,
  anchor,
  content,
  rows
}) => {


  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'column-block-' + componentIndex}`}
        className={`w-full ${componentIndex !== 0 && 'pt-16 lg:pt-24 xl:pt-36'} flex flex-col items-center`}
      >
        <div className='flex flex-col gap-y-16 text-center items-center w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5'>
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
           {rows && rows.map((row, index) => { 
            return (
              <div key={`column-row-${index}`} className='w-full '>
                {row._type === 'columnArray' ? (
                  <ColumnArray row={row as ColumnArrayType} />
                ) : row._type === 'simpleText' ? (
                  <ColumnText row={row as any} />
                ) : (
                  <VideoArray row={row as VideoColumnArrayType} />
                )}
              </div>
            )
           })}
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

export default ColumnBlock
