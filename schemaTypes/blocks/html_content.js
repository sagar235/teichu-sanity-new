import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'html_content',
  title: 'Html Content',
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
    defineField({
      name: 'text',
      title: 'Text',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'array', of: [{type: 'block'}]},
        {name: 'np', title: 'Nepali', type: 'array', of: [{type: 'block'}]},
        {name: 'it', title: 'Italian', type: 'array', of: [{type: 'block'}]},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Html Content',
      }
    },
  },
})
