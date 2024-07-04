import { defineField } from 'sanity'
import PageBuilderInput from './page-builder-input'

const pageBuilder = defineField({
	title: 'Page sections',
	name: 'sections',
	type: 'array',
	group: 'pagebuilder',
	of: [
		{ type: 'ctaBlock' },
		{ type: 'columnBlock' },
		{ type: 'priceBlock' },
		{ type: 'qaBlock' },
		{ type: 'reviewBlock' },
		{ type: 'videoBlock' },
		{ type: 'textBlock' },
	],
	components: {
		input: PageBuilderInput,
	},
})

export default pageBuilder
