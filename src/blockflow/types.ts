import { NotionIcon, NotionTopLevelBlock } from './notionTypes';

export interface NotionDocumentSummary<T = Record<string, any>> {
  slug: string;
  name: string;
  cover?: string;
  icon?: NotionIcon;
  properties: T;
}

export interface NotionDocumentDetails<T = Record<string, any>> {
  slug: string;
  name: string;
  cover?: string;
  icon?: NotionIcon;
  properties: T;
  blocks: NotionTopLevelBlock[];
}

export interface NotionDatabaseDocuments<T = Record<string, any>> {
  results: NotionDocumentSummary<T>[];
}
