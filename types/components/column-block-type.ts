import { SimpleTextType } from '../objects/simple-text-type'
import { ColumnArrayType } from '../arrays/column-array-type'
import { VideoColumnArrayType } from '../arrays/video-column-array-type'

export type ColumnBlockType = {
	active?: boolean
	componentIndex?: number
	lastComponent?: number
	anchor?: string
	content?: SimpleTextType
  rows?: ColumnArrayType[] | SimpleTextType[] | VideoColumnArrayType[]
}