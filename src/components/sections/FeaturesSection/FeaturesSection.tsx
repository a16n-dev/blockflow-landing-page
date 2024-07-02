import {
  BookLock,
  BookLockIcon,
  CloudOffIcon,
  ImportIcon,
  MessagesSquareIcon,
  SmartphoneIcon,
  SwatchBookIcon,
} from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section style={{ background: 'url("/bg-dot-04.svg")' }}>
      <div className={'bg-gradient-to-b from-theme-bg h-8'} />
      <div className={'flex flex-col max-w-[932px] px-8 w-full mx-auto'}>
        <h2 className={'text-theme-text text-4xl font-bold text-center'}>
          And more...
        </h2>
        <div
          className={
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16'
          }
        >
          <div className={'flex flex-col'}>
            <div className={'flex gap-2 items-center'}>
              <SmartphoneIcon className={'text-theme-main'} />
              <h3 className={'text-theme-text font-bold text-xl'}>
                Responsive
              </h3>
            </div>
            <p className={'text-theme-text'}>
              Full editing and customization control across your laptop, phone
              and tablet.
            </p>
          </div>
          <div className={'flex flex-col'}>
            <div className={'flex gap-2 items-center'}>
              <BookLockIcon className={'text-theme-main'} />
              <h3 className={'text-theme-text font-bold text-xl'}>
                Data Protection
              </h3>
            </div>
            <p className={'text-theme-text'}>
              We take security seriously, and you retain full control over your
              data.
            </p>
          </div>
          <div className={'flex flex-col'}>
            <div className={'flex gap-2 items-center'}>
              <SwatchBookIcon className={'text-theme-main'} />
              <h3 className={'text-theme-text font-bold text-xl'}>
                Customization Presets
              </h3>
            </div>
            <p className={'text-theme-text'}>
              Get started in minutes with our growing library of themes and
              templates
            </p>
          </div>
          <div className={'flex flex-col'}>
            <div className={'flex gap-2 items-center'}>
              <CloudOffIcon className={'text-theme-main'} />
              <h3 className={'text-theme-text font-bold text-xl'}>
                Offline Mode
              </h3>
            </div>
            <p className={'text-theme-text'}>
              Take your journals wherever you go, knowing you’ll always have
              full access to your data.
            </p>
            <div
              className={
                'bg-theme-main-bg text-theme-main px-2 py-1 text-xs rounded-md font-semibold self-start mt-1'
              }
            >
              Coming soon
            </div>
          </div>
          <div className={'flex flex-col'}>
            <div className={'flex gap-2 items-center'}>
              <MessagesSquareIcon className={'text-theme-main'} />
              <h3 className={'text-theme-text font-bold text-xl'}>
                Collaboration
              </h3>
            </div>
            <p className={'text-theme-text'}>
              We know the best ideas come from collaboration - share a journal
              with your friends or your partner.
            </p>
            <div
              className={
                'bg-theme-main-bg text-theme-main px-2 py-1 text-xs rounded-md font-semibold self-start mt-1'
              }
            >
              Coming soon
            </div>
          </div>
          <div className={'flex flex-col'}>
            <div className={'flex gap-2 items-center'}>
              <ImportIcon className={'text-theme-main'} />
              <h3 className={'text-theme-text font-bold text-xl'}>
                Easy Import
              </h3>
            </div>
            <p className={'text-theme-text'}>
              Easily import all your existing data from Notion and other apps in
              just a few clicks.
            </p>
            <div
              className={
                'bg-theme-main-bg text-theme-main px-2 py-1 text-xs rounded-md font-semibold self-start mt-1'
              }
            >
              Coming soon
            </div>
          </div>
        </div>
      </div>
      <div className={'bg-gradient-to-t from-theme-bg h-8'} />
    </section>
  );
};

export default FeaturesSection;
