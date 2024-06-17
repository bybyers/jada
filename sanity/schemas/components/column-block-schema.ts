import { defineType, defineField } from "sanity";

// Define a column block with content and column fields. Maximum of 3 columns.
const columnBlock = defineType({
  title: "Column Block",
  name: "columnBlock",
  type: "object",
  fields: [
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
      title: "Columns",
      name: "columns",
      type: "array",
      of: [
        {
          type: "column",
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
});

export default columnBlock;