import { CheckIcon, ClipboardListIcon, ListIcon } from 'lucide-react';

const HeroGraphic = () => {
  const TODOS = [
    { label: 'Schedule dinner with friends', checked: false },
    { label: 'Finish writing notes for class', checked: true },
    { label: 'Pick up groceries for dinner', checked: true },
  ];

  return (
    <div
      className={
        'aspect-[12/7] w-full bg-theme-bg max-w-[800px] border rounded-2xl shadow-xl overflow-hidden'
      }
    >
      <div
        className={'grid grid-cols-8 gap-4 p-4'}
        style={{ background: 'var(--theme-bg-texture)', backgroundSize: 12 }}
      >
        <div className={'flex flex-col col-span-5'}>
          <div
            className={
              'font-bold text-xl font-theme-display text-theme-text pt-2 pb-1'
            }
          >
            This is the spread title
          </div>
          <div className={'p-4 bg-theme-main h-[500px]'}>Content</div>
          <div className={'grid grid-cols-2'}></div>
        </div>
        <div className={'flex flex-col col-span-3'}>
          <div className={'aspect-video bg-theme-main-bg rounded-lg'} />
          <div className={'p-2'}>
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
              <div key={i} className={'flex gap-2 items-center'}>
                {item.checked ? (
                  <div
                    className={'w-5 h-5 rounded-md bg-theme-bg text-theme-main'}
                  >
                    <CheckIcon size={20} />
                  </div>
                ) : (
                  <div
                    className={'w-5 h-5 rounded-md border border-theme-bg'}
                  />
                )}
                <div className={'font-theme text-sm text-theme-text'}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphic;
