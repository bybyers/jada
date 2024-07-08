'use client'

// Tools

// Types
import { ColumnArrayType } from "@/types/arrays/column-array-type"
import { ColumnType } from "@/types/objects/column-type"

// Components
import SimpleText from "../simple-text"
import SanityImage from "../sanity-image"

interface ColumnArrayProps {
  row: ColumnArrayType 
}

const ColumnArray: React.FC<ColumnArrayProps> = ({
  row
}) => {

  const columnLength = row.columns.length

  if (row.columns && row.columns.length > 0) {
    return (
      <div className='w-full flex flex-wrap justify-between gap-y-16'>
        {row.columns.map((column: ColumnType, index) => {

          return (
            <div key={index} className='mt-10 lg:mt-0 w-full max-w-md flex flex-col gap-y-8 content items-center '>
              {column.image && (
                <div className={`${columnLength > 2 ? 'w-24' : 'w-28'} mb-5 p-4 rounded-3xl shadow-white/40 shadow`}>
                  <SanityImage
                    source={column.image}
                    alt={column.image.alt}
                    className={`w-full`}
                    sizes={`(min-width: 1920px) 1920px, 100vw `}
                    width={100}
                    height={100}
                    componentIndex={1}
                  />
                </div>
              )}
              {column.content && (
                <SimpleText content={column.content} />
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return null
}

export default ColumnArray
