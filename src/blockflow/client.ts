import axios, { AxiosInstance } from 'axios';

import { NotionDatabaseDocuments, NotionDocumentDetails } from './types';

/**
 * A thin wrapper around the axios to interact with the Notion CMS API.
 */
export class Client {
  private readonly axios: AxiosInstance;

  constructor(apiKey: string) {
    this.axios = axios.create({
      baseURL: 'https://api.a16n.dev/v1',
      headers: {
        'x-api-key': apiKey,
      },
    } as any);
  }

  async getDocuments(databaseSlug: string): Promise<NotionDatabaseDocuments> {
    console.log(JSON.stringify(this.axios));

    const res = await this.axios.get(`/${databaseSlug}/documents`);

    return res.data;
  }

  async getDocumentBySlug<T = unknown>(
    databaseSlug: string,
    documentSlug: string,
  ): Promise<NotionDocumentDetails<T> | null> {
    console.log(JSON.stringify(this.axios));

    const res = await this.axios.get(
      `/${databaseSlug}/documents/${documentSlug}`,
    );

    return res.data;
  }
}

const client = new Client('YOUR_API_KEY');
