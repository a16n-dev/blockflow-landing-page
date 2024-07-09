import styles from './JoinBetaSection.module.css';
import DiscordIcon from '@/components/common/DiscordIcon/DiscordIcon';
import Link from 'next/link';
const JoinBetaCondensedSection = () => {
  return (
    <section className={'pb-16 pt-8 max-w-[932px] px-4 w-full mx-auto'}>
      <div
        className={`${styles.card} pt-4 pb-2 px-4 rounded-xl flex flex-col items-center`}
      >
        <h2
          className={
            'font-theme-display text-theme-bg text-center text-2xl font-bold'
          }
        >
          Get Beta Access
        </h2>
        <p
          className={
            'mb-4 font-theme text-lg text-theme-bg text-center max-w-[600px]'
          }
        >
          {`If you want a digital journaling tool with features created around your feedback, join the Discord to get updates about beta access!`}
        </p>
        {/*<JoinBetaForm />*/}
        <Link
          className={
            'rounded-md gap-2 flex items-center text-white bg-[#5865F2] pl-4 pr-5 py-2 font-bold text-lg'
          }
          href={'/discord'}
          target={'_blank'}
        >
          <DiscordIcon />
          Join Discord
        </Link>
      </div>
    </section>
  );
};

export default JoinBetaCondensedSection;
