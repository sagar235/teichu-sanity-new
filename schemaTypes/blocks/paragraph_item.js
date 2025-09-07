import _ from 'lodash'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'paragraph_item',
  title: 'Paragraph Item',
  type: 'object',
  groups: [
    {
      name: 'info',
      title: 'Info',
    },
  ],
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
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'image',
    },
  },
})
