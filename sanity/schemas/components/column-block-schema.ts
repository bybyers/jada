import { defineType, defineField } from "sanity";
import {InlineIcon} from '@sanity/icons'


// Define a column block with content and column fields. Maximum of 3 columns.
const columnBlock = defineType({
  title: "Column Block",
  name: "columnBlock",
  icon: InlineIcon,
  type: "object",
  fields: [
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
      title: "Rows",
      name: "rows",
      type: "array",
      of: [
        {
          type: "columnArray",
        },
        {
          type: 'simpleText',
        },
        {
          type: "videoColumnArray",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'content',
    },
  }
});

export default columnBlock;