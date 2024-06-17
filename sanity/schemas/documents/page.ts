import { defineType, defineField } from 'sanity'

const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
			name: 'sections',
			type: 'sections',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
		}),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: `${title}`,
      }
    },
  },
})

export default page