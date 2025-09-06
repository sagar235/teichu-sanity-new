import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
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
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'np', title: 'Nepali', type: 'text'},
        {name: 'it', title: 'Italian', type: 'text'},
      ],
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
    }),
  ],

  preview: {
    select: {
      title: 'title.en', // 👈 only show English in list
      media: 'image',
    },
  },
})
