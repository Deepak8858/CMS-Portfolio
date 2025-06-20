import algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!);
const index = client.initIndex('projects');

export const searchProjects = async (query: string, filters: string[]) => {
  const results = await index.search(query, {
    filters: filters.map(f => `techStack:${f}`).join(' OR '),
    facets: ['techStack', 'category', 'year'],
    hitsPerPage: 12
  });
  return results.hits;
};
