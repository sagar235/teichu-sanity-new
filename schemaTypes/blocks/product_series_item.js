import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product_series_item',
  title: 'Product Series Item',
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
      name: 'product_model_item',
      title: 'Product Model Item',
      type: 'array',
      of: [{type: 'product_model_item'}],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
