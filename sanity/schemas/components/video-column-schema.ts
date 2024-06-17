import { defineType, defineField } from "sanity";

const videoColumn = defineType({
  title: "Video Column",
  name: "videoColumn",
  type: "object",
  fields: [
    defineField({
      title: "Video",
      name: "video",
      type: "defaultVideo",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default videoColumn;