export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Tags',
    },
    {
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Images',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'githubLink',
      type: 'url',
      title: 'Github Link',
    },
    {
      name: 'demoLink',
      type: 'url',
      title: 'Demo Link',
    },
  ],
}
