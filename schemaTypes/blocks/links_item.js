import _ from 'lodash'
import {defineType, defineField} from 'sanity'

const documentFields = ['page']

export default defineType({
  name: 'links_item',
  title: 'Links Item',
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
  ],
})
