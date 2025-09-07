import _ from 'lodash'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc) => doc.title?.en || '',
        slugify: (input) => {
          if (!input) return ''
          return `/blogs/${_.kebabCase(input).slice(0, 200)}`
        },
      },
    }),

    defineField({
      name: 'featured_image',
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'card_case',
      title: 'Card Case',
      type: 'string',
      options: {
        list: [
          {title: 'Full Card', value: 'full_card'},
          {title: 'For Banner', value: 'For Banner'},
        ],
      },
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'np', title: 'Nepali', type: 'string'},
        {name: 'it', title: 'Italian', type: 'string'},
      ],
    }),
    defineField({
      name: 'card_description',
      title: 'Card Description',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'np', title: 'Nepali', type: 'text'},
        {name: 'it', title: 'Italian', type: 'text'},
      ],
    }),
    {
      name: 'thumb_image',
      title: 'Thumb Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
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
    defineField({
      name: 'seo_title',
      title: 'SEO Title',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string'},
        {name: 'np', title: 'Nepali', type: 'string'},
        {name: 'it', title: 'Italian', type: 'string'},
      ],
    }),

    defineField({
      name: 'seo_description',
      title: 'SEO Description',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'np', title: 'Nepali', type: 'text'},
        {name: 'it', title: 'Italian', type: 'text'},
      ],
    }),

    defineField({
      name: 'seo_keywords',
      title: 'SEO Keywords',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'np', title: 'Nepali', type: 'text'},
        {name: 'it', title: 'Italian', type: 'text'},
      ],
    }),
  ],
  preview: {select: {title: 'title.en', media: 'image'}},
})
