import {defineType, defineField} from 'sanity'
import _ from 'lodash'

export default defineType({
  name: 'text_content_with_bg_image',
  title: 'Text Content With Bg Image',
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
    defineField({
      name: 'text',
      title: 'Text',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'np', title: 'Nepali', type: 'text'},
        {name: 'it', title: 'Italian', type: 'text'},
      ],
    }),
    defineField({
      name: 'bg_image',
      title: 'Bg Image',
      type: 'image',
      group: 'info',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'items',
      title: 'Items',
      group: 'info',
      type: 'array',
      of: [{type: 'paragraph_item'}],
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'Text Content With Bg Image',
      }
    },
  },
})
