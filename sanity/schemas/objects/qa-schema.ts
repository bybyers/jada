import { defineType, defineField } from "sanity";
import {TagIcon} from '@sanity/icons'


const qa = defineType({
  title: "QA",
  name: "qa",
  type: "object",
  icon: TagIcon,
  fields: [
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});

export default qa;