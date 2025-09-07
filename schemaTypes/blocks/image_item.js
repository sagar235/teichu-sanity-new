import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'image_item',
  title: 'Image Item',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'Image Item',
      }
    },
  },
})
