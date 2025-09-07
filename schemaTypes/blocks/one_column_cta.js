import {defineType, defineField} from 'sanity'
import _ from 'lodash'
const documentFields = ['page']

export default defineType({
  name: 'one_column_cta',
  title: 'One Column Cta',
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
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'One Column Cta',
      }
    },
  },
})
