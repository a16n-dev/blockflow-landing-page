import { APP_NAME } from '@/utils/constants';
import styles from './JoinBetaSection.module.css';
const JoinBetaSection = () => {
  return (
    <section className={'py-16 max-w-[932px] px-4 w-full mx-auto'}>
      <div
        className={`${styles.card} p-8 rounded-xl flex flex-col items-center`}
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
            'mb-4 font-theme  text-lg text-theme-bg text-center max-w-[600px]'
          }
        >
          {`If you want a digital bullet journaling tool with features created around your experiences, apply for beta access! We’ll be in touch!!`}
          <br />
          <br />
          {`Apply for beta access now and become a part of the journey.`}
        </p>
        <form className={'flex gap-2'}>
          <input
            className={'rounded-md p-2 text-theme-text focus:border-none'}
            placeholder={'example@mail.com'}
          />
          <button
            className={
              'bg-theme-bg rounded-md px-4 py-2 font-theme font-medium text-theme-main'
            }
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinBetaSection;
