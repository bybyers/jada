import { defineType, defineField } from "sanity";
import {PlayIcon} from '@sanity/icons'

// Define a column block with content and column fields. Maximum of 3 columns.
const videoColumnArray = defineType({
  title: "Video Column List",
  name: "videoColumnArray",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'columns',
      type: 'array',
      of: [
        {
          type: 'videoColumn',
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {
      title: 'columns',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Video Column List',
        media: PlayIcon,
      }
    }
  }
});

export default videoColumnArray;