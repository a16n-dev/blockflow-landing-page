const HeroSection = () => {
  return (
    <section
      className={
        'pt-24 pb-8 flex flex-col items-center max-w-[900px] w-full mx-auto'
      }
    >
      <div className={'max-w-[650px] mb-14'}>
        <h1 className={'text-6xl text-center font-bold text-theme-text mb-4'}>
          This is the page title
        </h1>
        <p className={'text-2xl text-theme-text text-center'}>
          A unique combination of stylistic freedom and functionality
        </p>
      </div>
      {/* Hero image/svg goes here */}
      <div className={'w-full aspect-video bg-theme-surface rounded-xl'} />
    </section>
  );
};

export default HeroSection;
