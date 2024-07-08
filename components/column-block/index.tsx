'use client'

// Tools

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
        <div className='flex flex-col gap-y-16 text-center items-center w-full max-w-6xl xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12'>
          {content && (
            <div className='content'>
              <SimpleText content={content} />
            </div>
          )}
           {rows && rows.map((row, index) => { 
            return (
              <div key={index} className='w-full '>
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
          <div className='w-full max-w-6xl xl:max-w-8xl rounded-full h-1 bg-gradient-to-r from-indigo-700 to-indigo-950' />
        )}
      </section>
    )
  }

  return null
}

export default ColumnBlock
