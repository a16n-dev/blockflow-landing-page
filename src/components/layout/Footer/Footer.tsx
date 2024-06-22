import Logo from '@/components/common/Logo/Logo';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className={'bg-gray-900 text-white'}>
      <div className={'max-w-[1080px] w-full mx-auto px-4 py-12 flex flex-col'}>
        <div className={'flex gap-2 items-center'}>
          <Logo width={64} />
          <p className={'text-2xl font-medium'}>BlockFlow</p>
        </div>
        <p className={'text-gray-400 pt-2'}>© BlowFlow 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
