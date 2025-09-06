import _ from 'lodash'
import {defineType, defineField} from 'sanity'

const documentFields = ['page']

export default defineType({
  name: 'category_item',
  title: 'Category Item',
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
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'info',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'page_link',
      title: 'Page Link',
      group: 'info',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'link',
          type: 'reference',
          title: 'Link',
          to: _.map(documentFields, (field) => ({type: field})),
        },
        {
          name: 'link_tag',
          title: 'Link Tag (Anchor/Querystring)',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'image',
    },
  },
})
