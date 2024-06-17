import { defineType, defineField } from "sanity";

const ctaBlock = defineType({
  title: "CTA Block",
  name: "ctaBlock",
  type: "object",
  fields: [
    defineField(
      {
        name: 'content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
        ],
      }
    ),
    defineField(
      {
        title: "CTA",
        name: "cta",
        type: "cta",
      }
    ),
  ],
});

export default ctaBlock;