import { v1beta } from '@google-cloud/discoveryengine';
import { SearchConfig } from '@/types/search';
import { EmbeddingService } from './embeddingService';

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 100;

export class SearchService {
  private client: v1beta.SearchServiceClient;
  private embeddingService: EmbeddingService;
  private config: SearchConfig;

  constructor(config: SearchConfig) {
    this.client = new v1beta.SearchServiceClient();
    this.embeddingService = new EmbeddingService();
    this.config = config;
  }

  async search(query: string, filter?: string, pageSize: number = PAGE_SIZE) {
    if (!this.config.projectId || !this.config.dataStoreId) {
      throw new Error('Required configuration is missing. Please check PROJECT_ID and DATASTORE_ID.');
    }

    const embedding = await this.embeddingService.getEmbedding(query);
    const servingConfig = `projects/${this.config.projectId}/locations/${this.config.location}/dataStores/${this.config.dataStoreId}/servingConfigs/default_config`;

    const [searchResult] = await this.client.search(
      {
        servingConfig,
        pageSize,
        embeddingSpec: {
          embeddingVectors: [
            {
              fieldPath: 'ml_generate_embedding_result',
              vector: embedding,
            },
          ],
        },
        rankingExpression: '0 * relevance_score + 1 * dotProduct(ml_generate_embedding_result)',
        languageCode: 'ja',
        query,
        queryExpansionSpec: { condition: 'AUTO' },
        filter,
      },
      { autoPaginate: false, maxResults: pageSize }
    );
    return searchResult;
  }
}
