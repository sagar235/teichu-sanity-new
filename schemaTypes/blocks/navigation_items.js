import _ from 'lodash'
import {defineType, defineField} from 'sanity'
const documentFields = ['page', 'products']

export default defineType({
  name: 'navigation_items',
  title: 'Navigation Items',
  type: 'object',
  fields: [
    defineField({
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
    }),
    defineField({
      name: 'product_name_item',
      title: 'Product Name Item',
      type: 'array',
      of: [{type: 'product_name_item'}],
    }),
    defineField({
      name: 'links_item',
      title: 'Product Other Links',
      type: 'array',
      of: [{type: 'links_item'}],
    }),
  ],
  preview: {
    select: {
      title: 'page_link.title',
    },
  },
})
