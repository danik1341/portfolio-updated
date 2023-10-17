export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'expArrayField',
      title: 'Experiences Array',
      type: 'array',
      of: [
        {
          name: 'expObject',
          title: 'Experience Object',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'location',
              type: 'string',
              title: 'Location',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'date',
              type: 'string',
              title: 'Date',
            },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon',
              validation: (Rule: any) => Rule.required(),
              options: {
                list: [
                  {title: 'Military', value: 'BsFillAirplaneEnginesFill'},
                  {title: 'Education Cap', value: 'LuGraduationCap'},
                  {title: 'Work', value: 'CgWorkAlt'},
                  {title: 'React Education', value: 'FaReact'},
                ],
              },
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
