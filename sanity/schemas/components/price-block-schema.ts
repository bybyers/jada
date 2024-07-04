import { defineType, defineField } from "sanity";
import {SparklesIcon} from '@sanity/icons'


const priceBlock = defineType({
  title: "Price Block",
  name: "priceBlock",
  icon: SparklesIcon,
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