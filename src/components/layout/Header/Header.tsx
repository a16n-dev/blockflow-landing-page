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
        <LeafIcon />
        <div className={'font-bold'}>{APP_NAME}</div>
      </div>
    </header>
  );
};

export default Header;
