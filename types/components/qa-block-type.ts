import { SimpleTextType } from "../objects/simple-text-type"
import { CtaType } from "../objects/cta-type"
import { QaType } from "../objects/qa-type"

export type QaBlockType = {
  active?: boolean
	componentIndex?: number
  lastComponent?: number
	anchor?: string
  content?: SimpleTextType
  qa?: QaType[]
  cta: CtaType
}