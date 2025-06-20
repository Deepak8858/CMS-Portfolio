import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // ensure correct API version is used
  useCdn: false, // must be false to use a token
  token: process.env.SANITY_API_TOKEN,
});
