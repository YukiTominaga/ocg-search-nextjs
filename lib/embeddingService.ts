import { VertexAIEmbeddings } from '@langchain/google-vertexai';

export class EmbeddingService {
  private embeddings: VertexAIEmbeddings;

  constructor(model: string = 'text-multilingual-embedding-002') {
    this.embeddings = new VertexAIEmbeddings({
      model: model,
      location: 'us-central1',
    });
  }

  async getEmbedding(text: string): Promise<number[]> {
    try {
      if (!text || text.trim().length === 0) {
        throw new Error('Empty text input');
      }

      const embedding = await this.embeddings.embedQuery(text);

      if (!embedding || !Array.isArray(embedding) || embedding.length === 0) {
        throw new Error('Invalid embedding result');
      }

      return embedding;
    } catch (error) {
      console.error('Error generating embedding:', error);
      throw new Error(`Failed to generate embedding: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
