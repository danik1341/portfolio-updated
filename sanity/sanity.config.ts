import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

const config = defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'jk7pqztf',
  dataset: 'production',
  apiVersion: '2023-10-16',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

  basePath: '/admin',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config
