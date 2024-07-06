'use client'

// Tools

// Types
import { ColumnArrayType } from "@/types/arrays/column-array-type"
import { ColumnType } from "@/types/objects/column-type"

import { VideoColumnArrayType } from "@/types/arrays/video-column-array-type"
import { VideoColumnType } from "@/types/objects/video-column-type"

// Components
import SimpleText from "../simple-text"
import SanityImage from "../sanity-image"

interface VideoColumnArrayProps {
  row: VideoColumnArrayType 
}

const VideoArray: React.FC<VideoColumnArrayProps> = ({
  row
}) => {

  const columnLength = row.columns.length

  if (row.columns && row.columns.length > 0) {
    return (
      <div className='w-full flex flex-wrap justify-around gap-y-10 rounded-3xl shadow-white/40 shadow'>
        {row.columns.map((column: VideoColumnType, index) => {

          return (
            <div key={index} className={`mt-10 lg:mt-0 w-full ${columnLength < 3 ? 'max-w-2xl' : 'max-w-sm px-5'} flex flex-col gap-y-8 content items-center`}>
              {column.video && (
                <div className={``}>
                  <video src={column.video.asset.url} preload='auto' controls={true} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return null
}

export default VideoArray
