interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className={'bg-gray-100 mt-24'}>
      <div className={'max-w-[1080px] w-full mx-auto px-4 py-4 flex flex-col'}>
        <div className={'flex items-center'}>
          <p className={'text-xl font-medium'}>BlockFlow</p>
        </div>
        <p className={'text-gray-400'}>© BlowFlow 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
