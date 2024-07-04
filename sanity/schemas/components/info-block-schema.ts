import { defineType, defineField } from "sanity";



const infoBlock = defineType({
  title: "Info Block",
  name: "infoBlock",
  type: "object",
  fields: [
    defineField({
			title: 'Active?',
			name: 'active',
			type: 'boolean',
			description:
				'Set to false if you need to remove from page but not delete',
			initialValue: true,
		}),
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
        name: 'title',
        type: 'string',
      }
    ),
    defineField(
      {
        title: "Columns",
        name: "columns",
        type: "array",
        of: [
          {
            type: "column",
          },
        ],
      }
    ),
    defineField(
      {
        name: 'subTitle',
        type: 'string',
      }
    ),
    defineField(
      {
        title: 'Video Columns',
        name: 'videoColumns',
        type: 'array',
        of: [
          {
            type: 'videoColumn',
          },
        ],
      }
    )
  ],
});

export default infoBlock;