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
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'orange_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'yellow_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'green_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'blue_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'purple_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'pink_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
    case 'red_background':
      return 'bg-gray-500 text-white rounded-md px-1 py-0.5';
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

export const twBlockTransformer = createBlockTransformer<ReactNode>({
  transformFns: {
    [NotionBlockType.Paragraph]: (block, ctx) => (
      <p key={ctx.key} className={'my-1'}>
        {ctx.transformRichText(block.content.richText)}
      </p>
    ),
    [NotionBlockType.Heading1]: (block, ctx) => (
      <h2 key={ctx.key} className={'text-3xl font-medium mb-2 mt-6'}>
        {ctx.transformRichText(block.content.richText)}
      </h2>
    ),
    [NotionBlockType.Heading2]: (block, ctx) => (
      <h3 key={ctx.key} className={'text-2xl font-medium mb-1 mt-4'}>
        {ctx.transformRichText(block.content.richText)}
      </h3>
    ),
    [NotionBlockType.Heading3]: (block, ctx) => (
      <h4 key={ctx.key} className={'text-xl font-medium mb-1 mt-2'}>
        {ctx.transformRichText(block.content.richText)}
      </h4>
    ),
    [NotionBlockType.Quote]: (block, ctx) => (
      <blockquote className={'border-l-4 border-gray-400 p-2 bg-gray-50 my-1'}>
        {ctx.transformRichText(block.content.richText)}
      </blockquote>
    ),
    [NotionBlockType.Table]: (block, ctx) => {
      let header = block.content.hasRowHeader ? block.children[0] : null;

      return (
        <table
          rules={'rows'}
          key={ctx.key}
          className={'table-auto my-4 rounded-lg overflow-hidden'}
        >
          {header && (
            <thead>
              <tr className={' bg-gray-100 font-medium'}>
                {header.content.cells.map((cell, index) => (
                  <td
                    key={index}
                    className={`${index === 0 && block.content.hasColumnHeader ? '' : 'border-b'} border-gray-200 px-4 py-2`}
                  >
                    {ctx.transformRichText(cell)}
                  </td>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {block.children.map((c, index) =>
              index === 0 && header ? null : (
                <tr key={index}>
                  {c.content.cells.map((cell, index) => (
                    <td
                      key={index}
                      className={`px-4 py-2 ${index === 0 && block.content.hasColumnHeader ? 'bg-gray-100 font-medium border-r' : 'border-b border-gray-200'}`}
                    >
                      {ctx.transformRichText(cell)}
                    </td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      );
    },
    [NotionBlockType.ColumnList]: (block, ctx) => (
      <div className={'grid grid-flow-col auto-cols-fr\t'}>
        {ctx.transformChildren(block.children)}
      </div>
    ),
    [NotionBlockType.Column]: (block, ctx) => (
      <div className={'flex flex-col px-2'}>
        {ctx.transformChildren(block.children)}
      </div>
    ),
    [NotionBlockType.TableRow]: (block, ctx) => null,
    [NotionBlockType.BulletedListItem]: (block, ctx) => null,
    [NotionBlockType.NumberedListItem]: (block, ctx) => null,
    [NotionBlockType.ToDoListItem]: (block, ctx) => null,
    [NotionBlockType.Divider]: (block, ctx) => <hr className={'my-4'} />,
    [NotionBlockType.BulletedList]: (block, ctx) => (
      <ul key={ctx.key} className={'list-disc list-inside'}>
        {block.children.map((child, index) => (
          <li key={index} className={'my-1'}>
            {ctx.transformRichText(child.content.richText)}
          </li>
        ))}
      </ul>
    ),
    [NotionBlockType.NumberedList]: (block, ctx) => (
      <ol key={ctx.key} className={'list-decimal list-inside'}>
        {block.children.map((child, index) => (
          <li key={index} className={'my-1'}>
            {ctx.transformRichText(child.content.richText)}
          </li>
        ))}
      </ol>
    ),
    [NotionBlockType.Callout]: (block, ctx) => (
      <div key={ctx.key} className={`rounded-lg p-4 bg-gray-100`}>
        {ctx.transformRichText(block.content.richText)}
      </div>
    ),
    [NotionBlockType.Code]: (block, ctx) => (
      <pre key={ctx.key} className={'bg-gray-100 p-4 rounded-md'}>
        {ctx.transformRichText(block.content.richText)}
      </pre>
    ),
  },
  transformRichText: renderRichText,
  consolidateFn: (result) => <Fragment>{result}</Fragment>,
  defaultTransformFn: defaultTransformFn,
});
