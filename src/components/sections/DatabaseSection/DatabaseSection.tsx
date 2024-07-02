import SkeletonTopLeft from '@/components/sections/DatabaseSection/SkeletonTopLeft';
import SkeletonTopRight from '@/components/sections/DatabaseSection/SkeletonTopRight';
import SkeletonBottomLeft from '@/components/sections/DatabaseSection/SkeletonBottomLeft';
import SkeletonBottomRight from '@/components/sections/DatabaseSection/SkeletonBottomRight';

const DatabaseSection = () => {
  return (
    <section className={' px-8 mx-auto py-16'}>
      <h2
        className={
          'font-theme-display text-theme-text text-4xl font-bold text-center'
        }
      >
        Databases
      </h2>
      <div className={'bg-theme-surface w-full rounded-xl flex p-8 gap-8'}>
        <div className={'flex-col gap-4 hidden md:flex'}>
          <SkeletonTopLeft />
          <div className={'bg-theme-bg rounded-md h-[200px]'} />
          <SkeletonBottomLeft />
        </div>
        <div className={'flex flex-col  gap-4'}>
          <SkeletonTopRight />
          <div className={'bg-theme-bg rounded-md h-[200px]'} />
          <SkeletonBottomRight />
        </div>
      </div>
    </section>
  );
};

export default DatabaseSection;
