// Example Sanity schema for projects
export default {
  name: 'project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'techStack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}]
    },
    {
      name: 'featured3D',
      type: 'boolean',
      description: 'Show in 3D gallery'
    }
  ]
}
