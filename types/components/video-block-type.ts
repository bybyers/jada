import { DefaultVideoType } from '../objects/default-video-type'

export type VideoBlockType = {
	active: boolean
	componentIndex?: number
	lastComponent?: number
	anchor: string
	video: DefaultVideoType
}
