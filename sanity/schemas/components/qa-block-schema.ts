import { defineType, defineField } from "sanity";
import {TagsIcon} from '@sanity/icons'


const qaBlock = defineType({
  title: "QA Block",
  name: "qaBlock",
  icon: TagsIcon,
  type: "object",
  fields: [
    defineField({
			title: 'Active?',
			name: 'active',
			type: 'boolean',
			description:
				'Set to false if you need to remove from page but not delete',
			initialValue: true,
		}),
    defineField(
      {
        title: "Anchor",
        name: "anchor",
        type: "string",
        description: "The anchor for the section. No hash symbols. Optional.",
      }
    ),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      title: "QA",
      name: "qa",
      type: "array",
      of: [
        {
          type: "qa",
        },
      ],
    }),
    defineField({
      title: "CTA",
      name: "cta",
      type: "cta",
    }),
  ],
  preview: {
    select: {
      title: 'content',
      active: 'active',
    },
    prepare({title, active}) {
      return {
        title: 'QA',
        subtitle: active ? 'Active' : 'Inactive',
      }
    }
  }
});


export default qaBlock;