import { defineType, defineField } from "sanity";


const price = defineType({
  title: "Price",
  name: "price",
  type: "object",
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'offer',
      type: 'string',
    }),
    defineField({
      name: 'reason',
      type: 'string',
    }),
    defineField({
      name: 'perks',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      title: "Payment Link",
      name: 'payment',
      type: 'string',
    }),
    defineField({
      title: "Book a Call Link",
      name: 'book',
      type: 'string',
    }),
  ],
});

export default price;