'use client';
import SkeletonTopLeft from '@/components/sections/DatabaseSection/SkeletonTopLeft';
import SkeletonTopRight from '@/components/sections/DatabaseSection/SkeletonTopRight';
import SkeletonBottomLeft from '@/components/sections/DatabaseSection/SkeletonBottomLeft';
import SkeletonBottomRight from '@/components/sections/DatabaseSection/SkeletonBottomRight';
import {
  CheckIcon,
  CheckSquare2Icon,
  FileClockIcon,
  FileIcon,
  Settings2Icon,
  TrashIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './DatabaseSection.module.css';

type Position = [x: number, y: number];

const DatabaseSection = () => {
  const [todos, setTodos] = useState<{ label: string; checked: boolean }[]>([
    // { label: 'Schedule dinner with friends', checked: false },
    // { label: 'Finish writing notes for class', checked: false },
    // { label: 'Pick up groceries for dinner', checked: false },
  ]);

  const [notes, setNotes] = useState<
    { title: string; body: string; timestamp: string }[]
  >([
    {
      title: 'This is a note',
      body: 'This is the is the  body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: 'This is a note',
      body: 'This is the  is the  is the body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: 'This is a note',
      body: 'This is the body of t is the  is the  is the he note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: 'This is a note',
      body: 'This is is the  is the  the body of the noteThe noteThe noteThe noteThe noteThe noteThe noteThe noteThis is is the  is the  the body of the noteThis is is the  is the  the body of the noteThis is is the  is the  the body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: 'This is a note',
      body: 'This is is the  is the  the body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
  ]);

  const { ref: startRef, inView: startInView } = useInView();
  const { ref: endRef, inView: endInView } = useInView();

  return (
    <section className={'px-8 mx-auto py-16 w-full max-w-[932px]'}>
      <h2
        className={
          'font-theme-display text-theme-text text-4xl font-bold text-center pb-12'
        }
      >
        Databases
      </h2>
      {/* Databases in isolation */}
      <div className={'grid grid-cols-2 mb-16 gap-8 w-full'}>
        <div className={'bg-theme-surface p-2 rounded-lg flex flex-col z-10'}>
          <div
            className={
              'flex items-center font-bold gap-1 bg-theme-bg self-start py-1 pl-1 pr-4 rounded-lg '
            }
          >
            <FileIcon />
            Notes Database
          </div>
        </div>
        <div
          className={
            'bg-theme-surface p-2 rounded-lg flex flex-col z-10 min-h-20'
          }
        >
          <div
            className={
              'flex items-center font-bold gap-1 bg-theme-bg self-start py-1 pl-1 pr-4 rounded-lg'
            }
          >
            <FileIcon />
            Tasks Database
          </div>
        </div>
      </div>
      {/* Databases in spread */}
      <div
        className={`${styles.card} max-w-[700px] mx-auto w-full rounded-xl grid grid-col-1 md:grid-cols-3 p-8 gap-8 text-black/5 aspect-[16/10]`}
      >
        <div className={'flex-col hidden md:flex col-span-2'}>
          <SkeletonTopLeft className={'w-full mb-4'} />
          <div className={'h-0 relative flex flex-col items-center'}>
            <svg
              width='272'
              height='181'
              viewBox='0 0 272 181'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={'absolute -bottom-4 '}
            >
              <path
                d='M155 2C154.999 91.6494 22 87.8971 22 179'
                stroke='url(#gradient2)'
                strokeWidth='8'
                strokeLinecap='square'
              />

              <defs>
                <linearGradient
                  id='gradient2'
                  x1='0%'
                  y1='0%'
                  x2='0%'
                  y2='100%'
                >
                  <stop
                    offset='0%'
                    style={{ stopColor: 'var(--theme-main-color)' }}
                  >
                    <animate
                      id={'start'}
                      attributeName='offset'
                      values='0;1'
                      dur='2s'
                      repeatCount='indefinite'
                      begin={'mid.begin+.2s'}
                    />
                  </stop>
                  <stop
                    offset='0%'
                    style={{ stopColor: 'var(--theme-main-color-bg)' }}
                  >
                    <animate
                      id={'mid'}
                      attributeName='offset'
                      values='0;1'
                      dur='2s'
                      repeatCount='indefinite'
                    />
                  </stop>
                  <stop
                    offset='100%'
                    style={{ stopColor: 'var(--theme-main-color)' }}
                  >
                    {/*<animate*/}
                    {/*  id={'end'}*/}
                    {/*  attributeName='offset'*/}
                    {/*  values='0;1'*/}
                    {/*  dur='2s'*/}
                    {/*  repeatCount='indefinite'*/}
                    {/*/>*/}
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            className={
              'grow bg-theme-main-bg border-theme-main border-2 max-w-[500px] rounded-lg relative right-4 shadow-xl flex flex-col p-4 text-theme-main'
            }
          >
            <div className={'flex gap-1 items-center pb-4'}>
              <FileClockIcon />
              <p className={'font-bold font-theme-display grow'}>
                Recent Notes
              </p>
              <button
                className={
                  'hover:bg-theme-main-bg hover:text-theme-main p-1 rounded-lg'
                }
              >
                <Settings2Icon size={18} />
              </button>
            </div>
            <div
              className={
                'flex gap-2 grow overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
              }
              style={{
                maskImage:
                  !startInView && !endInView
                    ? 'linear-gradient(to right, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%)'
                    : startInView && !endInView
                      ? 'linear-gradient(to left, transparent 0%, black 40px)'
                      : !startInView && endInView
                        ? 'linear-gradient(to right, transparent 0%, black 40px)'
                        : undefined,
              }}
            >
              <div ref={startRef as any} />
              {notes.map((n, i) => (
                <div
                  key={i}
                  className={
                    'flex flex-col max-w-40 cursor-pointer hover:brightness-95 transition-all p-2 bg-theme-bg text-theme-text rounded-md'
                  }
                >
                  <p
                    className={
                      'text-sm text-nowrap overflow-x-hidden overflow-ellipsis font-bold font-theme-display'
                    }
                  >
                    {n.title}
                  </p>
                  <p className={'text-xs font-theme h-0 grow'}>{n.body}</p>
                </div>
              ))}
              <div ref={endRef as any} />
            </div>
          </div>
          <SkeletonBottomLeft className={'w-full mt-4'} />
        </div>
        <div className={'flex flex-col'}>
          <SkeletonBottomRight className={'w-full mb-4'} />
          <div className={'relative h-0'}>
            <svg
              width='272'
              height='376'
              viewBox='0 0 272 376'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={'absolute -bottom-4'}
            >
              <path
                d='M22.0696 3C-0.58804 160.989 170.601 181.375 154.992 373'
                stroke='url(#gradient)'
                strokeWidth='8'
                strokeLinecap='square'
              />

              <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                  <stop
                    offset='0%'
                    style={{ stopColor: 'var(--theme-main-color)' }}
                  />
                  <stop
                    offset='0%'
                    style={{ stopColor: 'var(--theme-main-color)' }}
                  >
                    <animate
                      attributeName='offset'
                      values='0;0;1'
                      keyTimes={'0;0.2;1'}
                      dur='1s'
                      repeatCount='indefinite'
                    />
                  </stop>
                  <stop
                    offset='0%'
                    style={{ stopColor: 'var(--theme-main-color-bg)' }}
                  >
                    <animate
                      attributeName='offset'
                      values='0;1;1'
                      key={'0;.1;.9;1'}
                      dur='1s'
                      repeatCount='indefinite'
                    />
                  </stop>
                  <stop
                    offset='0%'
                    style={{ stopColor: 'var(--theme-main-color)' }}
                  >
                    <animate
                      attributeName='offset'
                      values='0;.1;1'
                      keyTimes={'0;0.1;.9'}
                      dur='1s'
                      repeatCount='indefinite'
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            className={
              'bg-theme-bg grow h-0 rounded-lg relative left-4 shadow-xl flex flex-col p-4 text-theme-text'
            }
          >
            <div className={'flex gap-1 items-center'}>
              <CheckSquare2Icon className={'text-theme-main'} />
              <p className={'font-bold font-theme-display grow'}>Tasks</p>
              <button
                className={
                  'hover:bg-theme-main-bg hover:text-theme-main transition-all p-1 rounded-lg'
                }
              >
                <Settings2Icon size={18} />
              </button>
            </div>
            <div className={'overflow-y-auto'}>
              <div className={'flex flex-col gap-1 py-2'}>
                {todos.map((todo, index) => (
                  <div
                    key={index}
                    className={
                      'group relative flex gap-2 items-center p-1 hover:bg-theme-surface  rounded-md'
                    }
                  >
                    <div
                      onClick={() =>
                        setTodos((t) =>
                          t.map((t, i) =>
                            i === index ? { ...t, checked: !t.checked } : t,
                          ),
                        )
                      }
                      className={`${todo.checked ? 'bg-theme-main' : 'bg-theme-main-bg border-theme-text border text-theme-main-bg opacity-20'} w-4 h-4 rounded-md flex cursor-pointer items-center justify-center text-theme-bg`}
                    >
                      <CheckIcon size={14} />
                    </div>
                    <div
                      onInput={(e) => {
                        setTodos((t) =>
                          t.map((t, i) =>
                            i === index
                              ? { ...t, label: (e.target as any).textContent }
                              : t,
                          ),
                        );
                      }}
                      className={'text-sm font-theme'}
                      contentEditable
                    >
                      {todo.label}
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setTodos((t) => t.filter((_, i) => i !== index));
                      }}
                      className={
                        'hidden w-4 h-4 rounded-md group-hover:flex hover:bg-theme-main-bg items-center justify-center bg-white absolute right-2 text-theme-main'
                      }
                    >
                      <TrashIcon size={12} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SkeletonTopRight className={'w-full mt-4'} />
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;
