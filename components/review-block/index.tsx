'use client'

// Tools
import { ReviewBlockType } from "@/types/components/review-block-type"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

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
        className='w-full pt-16 lg:pt-24 xl:pt-36 flex flex-col items-center gapy'
      >
        <div className='flex flex-col gap-y-24 text-center items-center w-full max-w-6xl xl:max-w-8xl pb-16 lg:pb-24 xl:pb-36 px-5 lg:px-12 content'>
          {titles && titles.length > 0 && (
            <div className='titles'>
              <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold'>{titles[0]}</h2>
            </div>
          )}
          <div className='flex flex-wrap gap-y-16 w-full justify-around'>
            {reviews && reviews.map((review, index) => {

              
              return (
                <div key={index} className='review'>
                  <div className='w-full max-w-md flex flex-col items-center gap-y-10'>
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
                    <div className='space-y-2'>
                      <SimpleText content={review.content} />
                    </div>
                    <div className='flex flex-col text-center'>
                      <h3 className='text-2xl font-bold'>{review.name}</h3>
                      <p className=''>{review.title}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return null
}

export default ReviewBlock