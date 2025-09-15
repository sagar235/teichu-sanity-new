import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product_faqs_item',
  title: 'Product Faqs Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'np', title: 'Nepali', type: 'string'},
        {name: 'it', title: 'Italian', type: 'string'},
      ],
    }),
    defineField({
      name: 'product_type',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Gas Hob', value: 'gas_hob'},
          {title: 'Chimney', value: 'chimney'},
          {title: 'Oven', value: 'oven'},
        ],
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'array', of: [{type: 'block'}]},
        {name: 'np', title: 'Nepali', type: 'array', of: [{type: 'block'}]},
        {name: 'it', title: 'Italian', type: 'array', of: [{type: 'block'}]},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
