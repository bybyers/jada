import { defineType, defineField } from "sanity";

// Define the schema for the video block
const videoBlock = defineType({
  title: "Video Block",
  name: "videoBlock",
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
    defineField({
      title: "Video URL",
      name: "videoUrl",
      type: "url",
    }),
  ],
});

export default videoBlock;