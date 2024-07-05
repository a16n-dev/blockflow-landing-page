'use client';
import {
  CheckIcon,
  ClipboardListIcon,
  ClockIcon,
  FileTextIcon,
  GripVerticalIcon,
  HandIcon,
  MessageSquareQuote,
  PlusCircle,
} from 'lucide-react';
import { format, add } from 'date-fns';

const HeroGraphic = () => {
  const TODOS = [
    { label: 'Schedule dinner with friends', checked: false },
    { label: 'Finish writing notes for class', checked: true },
    { label: 'Pick up groceries for dinner', checked: true },
  ];

  const notes = [
    {
      title: format(add(new Date(), { days: -5 }), 'EEE do MMM'),
      body: 'This is the is the  body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: format(add(new Date(), { days: -4 }), 'EEE do MMM'),
      body: 'This is the  is the  is the body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: format(add(new Date(), { days: -3 }), 'EEE do MMM'),
      body: 'This is the body of t is the  is the  is the he note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: format(add(new Date(), { days: -2 }), 'EEE do MMM'),
      body: 'This is is the  is the  the body of the noteThe noteThe noteThe noteThe noteThe noteThe noteThe noteThis is is the  is the  the body of the noteThis is is the  is the  the body of the noteThis is is the  is the  the body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
    {
      title: format(add(new Date(), { days: -1 }), 'EEE do MMM'),
      body: 'This is is the  is the  the body of the note',
      timestamp: '2024-07-01T12:12:12Z',
    },
  ];

  return (
    <div className={'flex'}>
      <div
        className={
          'aspect-[16/9] md:aspect-[12/7] w-full bg-theme-bg max-w-[800px] border rounded-2xl shadow-xl pointer-events-none select-none '
        }
      >
        <div
          className={'grid grid-cols-1 md:grid-cols-8 gap-4 p-4 pb-0 h-full'}
          style={{ background: 'var(--theme-bg-texture)', backgroundSize: 12 }}
        >
          <div className={'flex flex-col gap-4 col-span-5'}>
            <div
              className={
                'font-bold text-xl font-theme-display text-theme-text pt-2 px-2'
              }
            >
              {format(new Date(), "MMMM yyyy 'Spread'")}
            </div>
            <div
              className={
                'p-4 hidden bg-theme-main-bg border rounded-lg border-theme-main h-[200px] md:flex flex-col'
              }
            >
              <div className={'flex gap-2 items-center text-theme-main pb-2'}>
                <FileTextIcon size={20} />
                <div className={'font-bold font-theme-display'}>
                  Recent Notes
                </div>
              </div>
              <div
                className={
                  'flex gap-2 grow overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                }
                style={{
                  maskImage:
                    'linear-gradient(to left, transparent 0%, black 40px)',
                }}
              >
                {notes.map((n, i) => (
                  <div
                    key={i}
                    className={
                      'flex border flex-col max-w-40 cursor-pointer hover:brightness-95 transition-all p-2 bg-theme-bg text-theme-text rounded-md'
                    }
                  >
                    <p
                      className={
                        'text-sm text-nowrap overflow-x-hidden overflow-ellipsis font-medium font-theme-display'
                      }
                    >
                      {n.title}
                    </p>
                    <p
                      className={
                        'text-xs font-theme h-0 overflow-y-hidden overflow-ellipsis grow'
                      }
                    >
                      {n.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={'grid grid-cols-2 gap-4 h-0 grow overflow-hidden'}>
              <div className={'p-4 flex flex-col'}>
                <MessageSquareQuote
                  className={'self-center text-theme-main mb-1'}
                />
                <div
                  className={'font-bold font-theme text-theme-text text-center'}
                >
                  Quote of the day
                </div>
                <div
                  className={
                    'italic text-sm font-theme text-theme-text text-center'
                  }
                >
                  {`"It takes courage to grow up and become who you really are".`}
                  <br />
                  <br />
                  {`Your self-worth is determined by you`}
                  <br />
                  <span className={'opacity-50 text-xs'}>
                    {'- Oscar Wilde'}
                  </span>
                </div>
              </div>
              <div className={'p-2 bg-theme-main rounded-lg'}>
                <div className={'text-sm font-bold text-theme-bg'}>
                  Todays Schedule
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={'flex flex-col col-span-3 gap-4'}>
            <div
              className={
                'relative rounded-lg bg-black/5 border border-dashed border-black/10'
              }
            >
              <div className={'relative left-8 -top-6 rotate-2'}>
                <div
                  className={
                    'absolute -left-4 w-3 top-0 bottom-0 bg-black/20 rounded-md flex items-center'
                  }
                >
                  <HandIcon
                    className={'absolute right-0 top-1/2 z-20 -rotate-2'}
                    fill={'white'}
                  />
                  <GripVerticalIcon />
                </div>
                <img
                  src={'/imgBlock.jpg'}
                  alt={'imgBlock'}
                  className={
                    'aspect-video bg-theme-main-bg rounded-lg shadow-lg'
                  }
                />
              </div>
            </div>
            <div>
              <div
                className={
                  'flex gap-2 items-center bg-theme-main-bg p-1 rounded-md'
                }
              >
                <ClipboardListIcon className={'text-theme-main'} size={16} />
                <div className={'font-theme-display font-bold text-theme-text'}>
                  Todo List
                </div>
              </div>
              {TODOS.map((item, i) => (
                <div key={i} className={'flex gap-2 items-center p-2'}>
                  {item.checked ? (
                    <div
                      className={
                        'w-5 h-5 rounded-md bg-theme-main text-theme-bg flex items-center justify-center'
                      }
                    >
                      <CheckIcon size={16} />
                    </div>
                  ) : (
                    <div
                      className={'w-5 h-5 rounded-md border border-theme-main'}
                    />
                  )}
                  <div className={'font-theme text-sm text-theme-text'}>
                    {item.label}
                  </div>
                </div>
              ))}
              <div className={'p-2 flex gap-1 items-center'}>
                <PlusCircle className={'text-theme-text'} size={16} />
                <div className={'text-theme-text text-xs font-theme'}>
                  Add new Item
                </div>
              </div>
            </div>
            <div className={'h-0 grow overflow-hidden flex flex-col'}>
              <div
                className={
                  'border border-theme-main rounded-lg px-8 py-4 flex flex-col'
                }
              >
                <ClockIcon size={24} className={'text-theme-main'} />
                <div className={'flex gap-1 items-end'}>
                  <div
                    className={
                      'text-theme-main text-2xl font-bold font-theme-display'
                    }
                  >
                    {format(new Date(), 'h:MM')}
                  </div>
                  <div
                    className={
                      'text-theme text-sm text-theme-main font-bold font-theme-display'
                    }
                  >
                    {format(new Date(), 'aa')}
                  </div>
                </div>
                <div className={'text-sm font-theme-display text-theme-main'}>
                  {format(new Date(), 'EEEE, MMMM do')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphic;
