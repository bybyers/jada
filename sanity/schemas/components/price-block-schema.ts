import { defineType, defineField } from "sanity";


const priceBlock = defineType({
  title: "Price Block",
  name: "priceBlock",
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
    defineField({
      title: "Price Columns",
      name: "columns",
      type: "array",
      of: [
        {
          type: "price",
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'ctaContent',
      title: 'CTA Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      title: "CTA",
      name: "cta",
      type: "cta",
    })

  ],
});

export default priceBlock;