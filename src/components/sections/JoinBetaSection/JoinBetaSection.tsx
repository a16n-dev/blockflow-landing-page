import { APP_NAME } from '@/utils/constants';

const JoinBetaSection = () => {
  return (
    <section className={'py-16 max-w-[900px] w-full mx-auto'}>
      <div
        className={'bg-theme-main py-8 rounded-xl flex flex-col items-center'}
      >
        <h2 className={'text-theme-bg text-center text-2xl font-bold'}>
          Get Beta Access
        </h2>
        <p className={'mb-4 text-lg text-theme-bg text-center max-w-[600px]'}>
          {`We’re deeply passionate about making journalling a better digital experience, and are building ${APP_NAME} around your experiences and the features you want!`}
          <br />
          <br />
          {`Apply for beta access now and become a part of the journey.`}
        </p>
        <form>
          <input />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default JoinBetaSection;
