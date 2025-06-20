import { algoliasearch } from 'algoliasearch';

export function getAlgoliaClient() {
  const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!;
  const algoliaSearchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!;
  return algoliasearch(algoliaAppId, algoliaSearchKey);
}

export async function searchProjects(query: string) {
  const client = getAlgoliaClient();
  const index = client.initIndex('projects');
  return index.search(query);
}
