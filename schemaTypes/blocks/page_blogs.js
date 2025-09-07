import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page_blogs',
  title: 'Page Blogs',
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
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'Page Blogs',
      }
    },
  },
})
