import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'warranty_details',
  title: 'Warranty Details',
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
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'array', of: [{type: 'block'}]},
        {name: 'np', title: 'Nepali', type: 'array', of: [{type: 'block'}]},
        {name: 'it', title: 'Italian', type: 'array', of: [{type: 'block'}]},
      ],
    }),
    defineField({
      name: 'terms_conditions',
      title: 'Terms & Conditions',
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
      media: 'image',
    },
  },
})
