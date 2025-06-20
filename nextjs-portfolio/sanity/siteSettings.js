export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
      title: 'Site Title',
    },
    {
      name: 'siteDescription',
      type: 'text',
      title: 'Site Description',
    },
    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      options: { hotspot: true },
    },
  ],
};
