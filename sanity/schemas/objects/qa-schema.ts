import { defineType, defineField } from "sanity";


const qa = defineType({
  title: "QA",
  name: "qa",
  type: "object",
  fields: [
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      type: 'string',
    }),
  ],
});

export default qa;