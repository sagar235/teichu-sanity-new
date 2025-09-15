import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product_faqs',
  title: 'Product Faqs',
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
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'product_faqs_item'}],
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'Product Faqs',
      }
    },
  },
})
