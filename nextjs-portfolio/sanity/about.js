export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      options: { hotspot: true },
    },
  ],
};
