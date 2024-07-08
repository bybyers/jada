import { defineType, defineField } from "sanity";
import {PlayIcon} from '@sanity/icons'

const videoColumn = defineType({
  title: "Video Column",
  name: "videoColumn",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      title: "Video",
      name: "video",
      type: "defaultVideo",
    }),
  ],
  preview: {
    select: {
      title: "video.alt",
      media: "video",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: PlayIcon,
      };
    }
  },
});

export default videoColumn;