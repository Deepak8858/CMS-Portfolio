export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Image',
      options: { hotspot: true },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
    },
    {
      name: 'link',
      type: 'url',
      title: 'Project Link',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    },
  ],
};
