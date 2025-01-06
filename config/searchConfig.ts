import { SearchConfig } from '@/types/search'

if (!process.env.PROJECT_ID || !process.env.DATASTORE_ID) {
  console.error('Required environment variables are not set. Please set PROJECT_ID and DATASTORE_ID.')
}

export const searchConfig: SearchConfig = {
  projectId: process.env.PROJECT_ID || '',
  location: 'global',
  collectionId: 'default_collection',
  dataStoreId: process.env.DATASTORE_ID || '',
}

