export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [{ type: 'url' }],
    },
  ],
};
