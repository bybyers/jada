import { SeoType } from '../components/seo-type'
import { SocialType } from '../components/social-type'

export type SiteType = {
	title: string
	altTitle: string
	foundingYear: string
	addressCountry: string
	social: SocialType
	seo: SeoType
}
