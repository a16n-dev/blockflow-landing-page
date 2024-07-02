import { SVGProps } from 'react';

const SkeletonTopRight = (props: SVGProps<any>) => {
  return (
    <svg
      viewBox='0 0 237 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='237' height='120' rx='12' fill='currentColor' />
    </svg>
  );
};

export default SkeletonTopRight;
