'use client'

// Tools

// Types
import { ColumnArrayType } from "@/types/arrays/column-array-type"
import { ColumnType } from "@/types/objects/column-type"
import { SimpleTextType } from "@/types/objects/simple-text-type"

// Components
import SimpleText from "../simple-text"
import SanityImage from "../sanity-image"

interface ColumnTextProps {
  row: {
    text: SimpleTextType 
  }
}

const ColumnText: React.FC<ColumnTextProps> = ({
  row
}) => {

  return (
    <div className='w-full flex justify-center text-center content py-16'>
      {row.text && (
        <SimpleText content={row.text} />
      )}
    </div>
  )
}

export default ColumnText