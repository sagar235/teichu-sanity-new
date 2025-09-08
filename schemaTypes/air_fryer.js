import _ from 'lodash'
import {defineType, defineField} from 'sanity'
import block_types from './helpers/block_types'

export default defineType({
  name: 'air_fryer',
  title: 'Air Fryer',
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc) => doc.title?.en || '',
        slugify: (input) => {
          if (!input) return ''
          return `air-fryer/${_.kebabCase(input).slice(0, 200)}`
        },
      },
    }),

    defineField({
      name: 'featured_image',
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    }),

    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: _.map(block_types, (type) => ({
        type: type,
      })),
    },

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
  preview: {
    select: {
      title: 'title.en',
      media: 'featured_image',
    },
  },
})
