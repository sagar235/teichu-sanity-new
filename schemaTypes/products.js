import _ from 'lodash'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
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
          return `/products/${_.kebabCase(input).slice(0, 200)}`
        },
      },
    }),
    defineField({
      name: 'product_type',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Crystal Flame Series', value: 'crystal_flame_series'},
          {title: '3d Flame Series', value: '3d_flame_series  '},
          {title: 'Side Suction Hood', value: 'side_suction_hodd'},
          {title: 'Microwave Oven', value: 'microwave_oven'},
          {title: 'Built in Oven', value: 'built_in_oven'},
          {title: 'Air Fryer', value: 'air_fryer'},
        ],
      },
    }),
    defineField({
      name: 'new',
      title: 'New',
      type: 'boolean',
    }),
    defineField({
      name: 'out_of_stock',
      title: 'Out Of Stock',
      type: 'boolean',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
    defineField({
      name: 'best_selling',
      title: 'Best Selling',
      type: 'boolean',
    }),
    defineField({
      name: 'product_text',
      title: 'Product Text',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text'},
        {name: 'np', title: 'Nepali', type: 'text'},
        {name: 'it', title: 'Italian', type: 'text'},
      ],
    }),
    defineField({
      name: 'thumb_image',
      title: 'Thumb Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'product_image',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image_item'}],
    }),
    defineField({
      name: 'warrenty',
      title: 'Warrenty',
      type: 'array',
      of: [{type: 'title_description_item'}],
    }),
    defineField({
      name: 'spec_benfts',
      title: 'Specification & Benifits',
      type: 'array',
      of: [{type: 'title_description_item'}],
    }),
    defineField({
      name: 'full_width_image',
      title: 'Full Width Images',
      type: 'array',
      of: [{type: 'image_item'}],
    }),
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'thumb_image',
    },
  },
})
