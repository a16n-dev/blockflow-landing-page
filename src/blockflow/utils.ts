import { NotionRichText } from '@blockflow/notionTypes';

export const notionRichTextToPlainText = (richText: NotionRichText) =>
  richText.map((t) => t.text).join('');
