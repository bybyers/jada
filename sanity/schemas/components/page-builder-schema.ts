import { defineField } from 'sanity'
import PageBuilderInput from './page-builder-input'

const pageBuilder = defineField({
	title: 'Page sections',
	name: 'sections',
	type: 'array',
	group: 'pagebuilder',
	of: [
		//{ type: 'hero' },
	],
	components: {
		input: PageBuilderInput,
	},
})

export default pageBuilder
