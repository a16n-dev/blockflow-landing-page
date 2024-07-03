import { LeafIcon } from 'lucide-react';
import { APP_NAME } from '@/utils/constants';

const Header = () => {
  return (
    <header
      className={
        'w-full bg-white z-50 h-12 items-center sticky top-0 flex shadow-xl'
      }
    >
      <div className={'px-4 py-2 flex gap-2'}>
        <LeafIcon className={'text-theme-main'} />
        <div className={'font-bold'}>{APP_NAME}</div>
      </div>
      <div className={'grow'} />
      <div className={'px-4'}>
        <button
          className={
            'bg-theme-main text-sm font-semibold text-theme-bg rounded-md px-2 py-1'
          }
        >
          Get beta access
        </button>
      </div>
    </header>
  );
};

export default Header;
