import { ReviewType } from "../documents/review-type"

export type ReviewBlockType = {
  active?: boolean
	componentIndex?: number
  lastComponent?: number
	anchor?: string
  titles?: string[]
  reviews?: ReviewType[]
}