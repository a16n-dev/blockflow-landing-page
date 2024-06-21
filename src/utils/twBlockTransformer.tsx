import {
  BlockTransformer,
  createBlockTransformer,
  transformBlockFn,
  TransformBlockFnMap,
} from '@blockflow/createBlockTransformer';
import { Fragment, ReactNode } from 'react';
import {
  NotionBlock,
  NotionColor,
  NotionRichText,
} from '@blockflow/notionTypes';
import Link from 'next/link';

const DOMAIN = 'app.kiki.club';

const mapColorToStyles = (color?: NotionColor) => {
  if (!color) return '';

  switch (color) {
    case 'gray':
      return 'text-gray-500';
    case 'brown':
      return 'text-yellow-900';
    case 'orange':
      return 'text-orange-600';
    case 'yellow':
      return 'text-yellow-500';
    case 'green':
      return 'text-lime-600';
    case 'blue':
      return 'text-cyan-600';
    case 'purple':
      return 'text-purple-600';
    case 'pink':
      return 'text-fuchsia-600';
    case 'red':
      return 'text-red-600';
    case 'gray_background':
      return 'bg-gray-500';
    case 'brown_background':
      break;
    case 'orange_background':
      break;
    case 'yellow_background':
      break;
    case 'green_background':
      break;
    case 'blue_background':
      break;
    case 'purple_background':
      break;
    case 'pink_background':
      break;
    case 'red_background':
      break;
  }
};

export const renderRichText = (richText: NotionRichText) => {
  return richText.map((t, index) => {
    switch (t.type) {
      case 'text':
        // eslint-disable-next-line no-case-declarations
        let content = (
          <>
            <span className={mapColorToStyles(t.annotations.color)}>
              {t.text}
            </span>
          </>
        );
        if (t.annotations.bold) {
          content = <b>{content}</b>;
        }
        if (t.annotations.italic) {
          content = <i>{content}</i>;
        }
        if (t.annotations.strikethrough) {
          content = <s>{content}</s>;
        }
        if (t.annotations.underline) {
          content = <u>{content}</u>;
        }
        if (t.annotations.code) {
          content = <code>{content}</code>;
        }
        if (t.href) {
          const url = t.href.startsWith(`https://${DOMAIN}`)
            ? t.href.replace('https://${DOMAIN}', '/')
            : t.href;
          content = (
            <Link href={url} target={'_blank'}>
              {content}
            </Link>
          );
        }

        return <Fragment key={index}>{content}</Fragment>;
      case 'equation':
        console.warn(`Cannot render unsupported rich text type (equation)`);
        return null;
      case 'mention':
        console.warn(`Cannot render unsupported rich text type (mention)`);
        return null;
    }
  });
};

const defaultTransformFn: transformBlockFn<any, any> = (
  block: NotionBlock,
  { transformChildren },
) => {
  return (
    <div className={'flex my-2 flex-col bg-gray-100 p-4 rounded-md gap-2'}>
      <p className={'font-mono text-md text-gray-600'}>
        {`Unsupported block: ${block.type}`}
      </p>
      <p className={'font-mono text-sm text-gray-600'}>Properties</p>
      <p className={'whitespace-pre-wrap text-xs bg-gray-200 p-2 rounded-md'}>
        {JSON.stringify(block.content, null, 2)}
      </p>
      {(block as any).children && (
        <>
          <p className={'font-mono text-sm text-gray-600'}>Children</p>
          <div className={'p-2 bg-gray-200 rounded-md'}>
            {transformChildren((block as any).children)}
          </div>
        </>
      )}
    </div>
  );
};

export const twBlockTransformer = createBlockTransformer<ReactNode>({
  transformFns: {},
  transformRichText: renderRichText,
  consolidateFn: (result) => <Fragment>{result}</Fragment>,
  defaultTransformFn: defaultTransformFn,
});
