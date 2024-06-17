import { defineType, defineField } from "sanity";


const qaBlock = defineType({
  title: "QA Block",
  name: "qaBlock",
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
});


export default qaBlock;