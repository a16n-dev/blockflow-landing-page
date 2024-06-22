import {
  BlockTransformer,
  createBlockTransformer,
  transformBlockFn,
  TransformBlockFnMap,
} from '@blockflow/createBlockTransformer';
import { Fragment, ReactNode } from 'react';
import {
  NotionBlock,
  NotionBlockType,
  NotionColor,
  NotionRichText,
} from '@blockflow/notionTypes';
import Link from 'next/link';
import { twBlockTransformer } from '@/utils/twBlockTransformer';

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
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'brown_background':
      return 'bg-yellow-900 text-white rounded-md px-1 py-0.5';
    case 'orange_background':
      return 'bg-orange-500 text-white rounded-md px-1 py-0.5';
    case 'yellow_background':
      return 'bg-yellow-500 text-white rounded-md px-1 py-0.5';
    case 'green_background':
      return 'bg-lime-600 text-white rounded-md px-1 py-0.5';
    case 'blue_background':
      return 'bg-cyan-600 text-white rounded-md px-1 py-0.5';
    case 'purple_background':
      return 'bg-purple-600 text-white rounded-md px-1 py-0.5';
    case 'pink_background':
      return 'bg-fuchsia-600 text-white rounded-md px-1 py-0.5';
    case 'red_background':
      return 'bg-red-600 text-white rounded-md px-1 py-0.5';
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
    <div className={'flex my-2 flex-col bg-amber-100 p-4 rounded-md gap-2'}>
      <p className={'font-mono text-md text-amber-600'}>
        {`Unsupported block: ${block.type}`}
      </p>
      <p className={'font-mono text-sm text-amber-600'}>Properties</p>
      <p className={'whitespace-pre-wrap text-xs bg-amber-200 p-2 rounded-md'}>
        {JSON.stringify(block.content, null, 2)}
      </p>
      {(block as any).children && (
        <>
          <p className={'font-mono text-sm text-amber-600'}>Children</p>
          <div className={'p-2 bg-amber-200 rounded-md'}>
            {transformChildren((block as any).children)}
          </div>
        </>
      )}
    </div>
  );
};

export const twLandingPageBlockTransformer = createBlockTransformer<ReactNode>({
  extend: twBlockTransformer,
  transformFns: {
    [NotionBlockType.Heading1]: (block, ctx) => (
      <h2 className={'text-center pb-2 text-4xl font-medium'}>
        {ctx.transformRichText(block.content.richText)}
      </h2>
    ),
    [NotionBlockType.Paragraph]: (block, ctx) => {
      // render button IF link, and color is blue background
      // if (
      //   block.content.color?.endsWith('background') &&
      //   block.content.richText.length === 1 &&
      //   block.content.richText[0].href
      // ) {
      //   return (
      //     <button className={'self-center'}>
      //       {block.content.richText[0].text}
      //     </button>
      //   );
      // }

      return (
        <p className={'text-center text-lg font-light max-w-[600px] mx-auto'}>
          {ctx.transformRichText(block.content.richText)}
        </p>
      );
    },
  },
  transformRichText: renderRichText,
  consolidateFn: (result) => <Fragment>{result}</Fragment>,
  defaultTransformFn: defaultTransformFn,
});
