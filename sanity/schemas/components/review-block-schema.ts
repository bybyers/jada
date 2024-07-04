import { defineType, defineField } from "sanity";
import { UsersIcon } from '@sanity/icons';

// Define the review block schema with an array of strings as title and an array of references to reviews
const reviewBlock = defineType({
  title: "Review Block",
  name: "reviewBlock",
  icon: UsersIcon,
  type: "object",
  fields: [
    defineField({
      title: "Anchor",
      name: "anchor",
      type: "string",
      description: "The anchor for the section. No hash symbols. Optional.",
    }),
    defineField({
      name: 'titles',
      type: 'array',
      description: 'Rotating titles for the review block.',
      of: [
        {
          name: 'title',
          type: 'string',
        },
      ],
    }),
    defineField({
      title: "Reviews",
      name: "reviews",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "review" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      titles: 'titles',
    },
    prepare(selection) {
      const { titles } = selection;
      const title = titles && titles.length > 0 ? titles[0] : 'Untitled';
      return {
        title: title,
      };
    }
  }
});

export default reviewBlock;
