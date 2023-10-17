export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectsArray',
      title: 'Projects Array',
      type: 'array',
      of: [
        {
          name: 'projectObject',
          title: 'Project',
          type: 'object',
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
              validation: (Rule: any) =>
                Rule.max(550).warning('Description should be within 500 characters.'),
            },
            {
              name: 'tags',
              type: 'array',
              validation: (Rule: any) => Rule.required(),

              of: [{type: 'string'}],
              title: 'Tags',
            },
            {
              name: 'images',
              validation: (Rule: any) => Rule.required(),

              type: 'array',
              of: [{type: 'image'}],
              title: 'Images',
            },
            {
              name: 'slug',
              type: 'slug',
              title: 'Slug',
              validation: (Rule: any) => Rule.required(),
              options: {
                source: (doc: any) => {
                  const title = doc.projectsArray[doc.projectsArray.length - 1].title
                  const slug = title.toLowerCase().trim().replace(/\s+/g, '-').slice(0, 200)
                  return slug
                },
                slugify: (input: string) =>
                  input.toLowerCase().trim().replace(/\s+/g, '-').slice(0, 200),
              },
            },
            {
              name: 'githubLink',
              type: 'url',
              title: 'Github Link',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'demoLink',
              type: 'url',
              title: 'Demo Link',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      options: {
        modal: 'popover',
        sortable: true,
      },
    },
  ],
}
