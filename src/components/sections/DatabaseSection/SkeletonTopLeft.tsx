import { SVGProps } from 'react';

const SkeletonTopLeft = (props: SVGProps<any>) => {
  return (
    <svg
      viewBox='0 0 648 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='302' height='32' rx='16' fill='currentColor' />
    </svg>
  );
};

export default SkeletonTopLeft;
