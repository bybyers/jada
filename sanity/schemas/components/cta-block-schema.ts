import { defineType, defineField } from "sanity";
import {PresentationIcon} from '@sanity/icons'

const ctaBlock = defineType({
  title: "CTA Block",
  name: "ctaBlock",
  type: "object",
  icon: PresentationIcon,
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
    defineField(
      {
        title: "CTA",
        name: "cta",
        type: "cta",
      }
    ),
  ],
  preview: {
    select: {
      title: 'content',
    },
  }
});

export default ctaBlock;