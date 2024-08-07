import { APP_NAME } from '@/utils/constants';
import styles from './JoinBetaSection.module.css';
import JoinBetaForm from '@/components/common/JoinBetaForm/JoinBetaForm';
const JoinBetaSection = () => {
  return (
    <section className={'pb-16 pt-8 max-w-[932px] px-4 w-full mx-auto'}>
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
            'mb-4 font-theme text-lg text-theme-bg text-center max-w-[600px]'
          }
        >
          {`If you want a digital journaling tool with features created around your feedback, apply for beta access and we’ll be in touch!`}
          <br />
          <br />
          {`Apply for beta access now and become a part of the journey.`}
        </p>
        <JoinBetaForm />
      </div>
    </section>
  );
};

export default JoinBetaSection;
