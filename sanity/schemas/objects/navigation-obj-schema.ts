import { defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

const navObject = defineType({
	title: 'Navigation',
	name: 'navObject',
	description: 'Navigation. Leave blank to use default navigation.',
	icon: LinkIcon,
	type: 'object',
	options: {
		collapsible: true,
	},
	initialValue: {
		header: {
			_type: 'reference',
			_ref: 'ee13dfbe-8ad7-452e-8c6a-156d2c826eb2',
		},
		footer: {
			_type: 'reference',
			_ref: '86fdfeba-3696-44c9-8267-ac33f3c8c5be',
		},
	},
	fields: [
		{
			name: 'header',
			title: 'Header',
			type: 'reference',
			to: [{ type: 'navigation' }],
		},
		{
			name: 'footer',
			title: 'Footer',
			type: 'reference',
			to: [{ type: 'navigation' }],
		},
	],
})

export default navObject
