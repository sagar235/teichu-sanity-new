import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product_filter',
  title: 'Product Filter',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      title: 'Product Links',
      type: 'array',
      of: [{type: 'links_item'}],
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'Product Filter',
      }
    },
  },
})
