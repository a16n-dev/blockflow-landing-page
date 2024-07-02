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
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './DatabaseSection.module.css';

const DatabaseSection = () => {
  const [todos, setTodos] = useState<{ label: string; checked: boolean }[]>([
    { label: 'This is some text!', checked: false },
    { label: 'This is some text!', checked: false },
    { label: 'This is some text!', checked: false },
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
      body: 'This is is the  is the  the body of the noteThis is is the  is the  the body of the noteThis is is the  is the  the body of the noteThis is is the  is the  the body of the note',
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
    <section className={'px-8 mx-auto py-16'}>
      <h2
        className={
          'font-theme-display text-theme-text text-4xl font-bold text-center pb-12'
        }
      >
        Databases
      </h2>
      {/* Databases in isolation */}
      <div className={'grid grid-cols-2 mb-16 gap-8'}>
        <div className={'bg-theme-surface p-2 rounded-lg flex flex-col'}>
          <div
            className={
              'flex items-center font-bold gap-1 bg-theme-bg self-start py-1 pl-1 pr-4 rounded-lg'
            }
          >
            <FileIcon />
            Notes
          </div>
        </div>
        <div className={'bg-theme-surface p-2 rounded-lg flex flex-col'}>
          <div
            className={
              'flex items-center font-bold gap-1 bg-theme-bg self-start py-1 pl-1 pr-4 rounded-lg'
            }
          >
            <FileIcon />
            Tasks
          </div>
        </div>
      </div>
      {/* Databases in spread */}
      <div
        className={`${styles.card} w-full rounded-xl flex p-8 gap-8 text-black/5 aspect-[16/10]`}
      >
        <div className={'flex-col gap-4 hidden md:flex'}>
          <SkeletonTopLeft className={'w-full'} />
          <div
            className={
              'grow bg-theme-main-bg border-theme-main border-2 w-[600px] rounded-lg relative right-4 shadow-xl flex flex-col p-4 text-theme-main'
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
                'flex gap-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
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
                    'flex flex-col min-w-40 max-w-28 cursor-pointer hover:brightness-95 transition-all p-2 bg-theme-bg text-theme-text rounded-md'
                  }
                >
                  <p className={'text-sm font-bold font-theme-display'}>
                    {n.title}
                  </p>
                  <p className={'text-xs font-theme'}>{n.body}</p>
                </div>
              ))}
              <div ref={endRef as any} />
            </div>
          </div>
          <SkeletonBottomLeft className={'w-full'} />
        </div>
        <div className={'flex flex-col gap-4'}>
          <SkeletonBottomRight className={'w-full'} />
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
          <SkeletonTopRight className={'w-full'} />
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;
