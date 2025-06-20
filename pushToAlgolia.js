const algoliasearch = require('algoliasearch');
const fs = require('fs');

// Load your sample data from the current directory
const data = fs.readFileSync(__dirname + '/sampleData.ndjson', 'utf-8')
  .split('\n')
  .filter(Boolean)
  .map(line => JSON.parse(line));

// Filter only project documents
const projects = data.filter(doc => doc._type === 'project');

// Algolia credentials
const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'OS1QZV2Z3Y';
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_API_KEY || 'YOUR_ADMIN_API_KEY'; // Set your Algolia Admin API Key in env
const ALGOLIA_INDEX = 'projects';

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
const index = client.initIndex(ALGOLIA_INDEX);

// Algolia requires an 'objectID' field
const algoliaProjects = projects.map(p => ({
  ...p,
  objectID: p._id,
}));

index.saveObjects(algoliaProjects)
  .then(({ objectIDs }) => {
    console.log('Uploaded to Algolia:', objectIDs);
  })
  .catch(err => {
    console.error('Algolia upload error:', err);
  });
