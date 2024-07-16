'use client'

// Tools
import { motion } from "framer-motion"
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from "react";

// Types
import { VideoColumnArrayType } from "@/types/arrays/video-column-array-type"
import { VideoColumnType } from "@/types/objects/video-column-type"

// Components

interface VideoColumnArrayProps {
  row: VideoColumnArrayType 
}

const VideoArray: React.FC<VideoColumnArrayProps> = ({
  row
}) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false)

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [])


  const columnLength = row.columns.length

  if (row.columns && row.columns.length > 0) {
    return (
      <div className='w-full flex flex-wrap py-5 md:py-0 justify-around gap-y-10 rounded-3xl border-white/40 border-2'>
        {row.columns.map((column: VideoColumnType, index) => {

          return (
            <motion.div 
              key={`video-column-${index}`} 
              className={`mt-10 lg:mt-0 w-full ${columnLength < 3 ? 'max-w-xl 2xl:max-w-2xl' : 'max-w-sm px-5'} flex flex-col gap-y-8 content items-center`}
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
                delay: !isMobileView ? 0+index*0.5 : 0,
                type: 'spring',
                duration: 1.5
              }}   
            >
              {column.video && (
                <div>
                  <video src={column.video.asset.url} poster={column.video.poster?.asset.url} preload='auto' controls={true} />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    )
  }

  return null
}

export default VideoArray
