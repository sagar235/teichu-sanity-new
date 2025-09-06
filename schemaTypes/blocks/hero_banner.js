import {defineType, defineField} from 'sanity'
import _ from 'lodash'

const documentFields = ['page']

export default defineType({
  name: 'hero_banner',
  title: 'Hero Banner',
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
      name: 'banner_video',
      title: 'Banner Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
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
      media: 'image',
    },
    prepare() {
      return {
        title: 'Home Banner',
      }
    },
  },
})
