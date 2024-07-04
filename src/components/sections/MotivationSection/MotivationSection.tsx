import { APP_NAME } from '@/utils/constants';
import BackgroundImage from './background.png';
import Image from 'next/image';
import style from './MotivationSection.module.css';
import { LeafIcon } from 'lucide-react';
import Logo from '@/components/common/Logo/Logo';

const MotivationSection = () => {
  return (
    <section className={'max-w-[932px] px-4 w-full mx-auto pt-16 pb-8'}>
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 items-center'}>
        <div className={`${style.card} h-80 rounded-t-2xl py-4`}>
          <div className={'relative h-full'}>
            <Image
              src={BackgroundImage}
              objectFit={'contain'}
              objectPosition={'center'}
              fill
              alt={'Circle of apps'}
            />
            <div
              className={
                'absolute inset-0 flex items-center justify-center flex-col'
              }
            >
              <div
                className={
                  'flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-lg text-theme-main'
                }
              >
                <Logo size={64} />
              </div>
            </div>
          </div>
        </div>
        <div className={'flex flex-col px-4'}>
          <h2
            className={'font-theme-display text-theme-text font-bold text-2xl'}
          >
            {`Why we made ${APP_NAME}`}
          </h2>
          <p
            className={'text-theme-text font-theme'}
          >{`We love the functionality that Notion has, but it lacks the ability to really personalize the style and design.`}</p>
          <br />
          <p
            className={'text-theme-text font-theme'}
          >{`Apps like Zinnia and Goodnotes gave me the customization we wanted for bullet journaling, but lacked the powerful functionality that Notion’s databases offered.`}</p>
          <br />
          <p
            className={'text-theme-text font-theme'}
          >{`So we created BlockFlow so that you can have the best of both worlds!`}</p>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
