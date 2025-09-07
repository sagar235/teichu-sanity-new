import {defineType, defineField} from 'sanity'
import _ from 'lodash'
const documentFields = ['page']

export default defineType({
  name: 'title_cta_with_cards',
  title: 'Title Cta With Cards',
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
      name: 'page_link',
      title: 'Page Link',
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
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'category_item'}],
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'Title Cta With Cards',
      }
    },
  },
})
