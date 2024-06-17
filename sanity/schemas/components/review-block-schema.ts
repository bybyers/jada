import { defineType, defineField } from "sanity";

// Define the review block schema with an array of strings as title and an array of reference to reviews
const reviewBlock = defineType({
  title: "Review Block",
  name: "reviewBlock",
  type: "object",
  fields: [
    defineField(
      {
        name: 'titles',
        type: 'array',
        description: 'Rotating titles for the review block.',
        of: [
          {
            type: 'string',
          },
        ],
      }
    ),
    defineField(
      {
        title: "Reviews",
        name: "reviews",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "review" }],
          },
        ],
      }
    ),
  ],
});

export default reviewBlock;