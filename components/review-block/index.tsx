'use client'

// Tools
import { ReviewBlockType } from "@/types/components/review-block-type"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { motion } from "framer-motion"

// Types


// Components
import SimpleText from "@/components/simple-text"
import Star from '@/public/star.svg'
import { AiFillStar } from "react-icons/ai";



const ReviewBlock: React.FC<ReviewBlockType> = ({
  active,
  componentIndex,
  lastComponent,
  anchor,
  titles,
  reviews
}) => {

  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'review-block-' + componentIndex}`}
        className={`w-full ${componentIndex !== 0 && 'pt-16 lg:pt-24 xl:pt-36'} flex flex-col items-center`}
      >
        <div className='flex flex-col gap-y-24 text-center items-center w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12 content'>
          {titles && titles.length > 0 && (
            <div className='titles'>
              <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>{titles[0]}</h2>
            </div>
          )}
          <div className='flex flex-wrap gap-y-16 w-full justify-between'>
            {reviews && reviews.map((review, index) => {

              
              return (
                <div key={index} className='review text-balance'>
                  <div className='w-full xl:max-w-sm 2xl:max-w-md flex flex-col items-center gap-y-10'>
                    <div className='space-y-3'>
                      <Avatar>
                        <AvatarImage src={review.image?.asset.url} alt="@shadcn" />
                        <AvatarFallback>{review.name}</AvatarFallback>
                      </Avatar>
                      <div className='flex gap-x-1 text-[#8f80c6]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                    <div className='2xl:text-lg space-y-2'>
                      <SimpleText content={review.content} />
                    </div>
                    <div className='flex flex-col text-center'>
                      <h3 className='2xl:text-2xl font-bold'>{review.name}</h3>
                      <p className='2xl:text-lg'>{review.title}</p>
                    </div>
                  </div>
                </div>
              )
            })}
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

export default ReviewBlock