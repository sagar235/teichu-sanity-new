import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'Teichu CMS',

  projectId: 'z818aexw',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    // documentInternationalization({
    //   supportedLanguages: [
    //     {id: 'en', title: 'English'},
    //     {id: 'np', title: 'Nepali'},
    //     {id: 'it', title: 'Italian'},
    //   ],
    //   schemaTypes: ['products'],
    // }),
  ],

  schema: {
    types: schemaTypes,
  },
})
