import { defineType, defineField } from "sanity";


const column = defineType({
  title: "Column",
  name: "column",
  type: "object",
  fields: [
    defineField({
      name: 'image',
      type: 'defaultImage',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});

export default column;