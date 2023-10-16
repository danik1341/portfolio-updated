export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
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
}
