import { SVGProps } from 'react';

const ParagraphConstructionGraphic = (props: SVGProps<any>) => {
  return (
    <svg
      width='704'
      height='112'
      viewBox='0 0 704 112'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path opacity='0.2' d='M16 0V109' stroke='url(#paint0_linear_434_511)' />
      <path
        opacity='0.2'
        d='M3 8L514 8.00004'
        stroke='url(#paint1_linear_434_511)'
      />
      <path
        opacity='0.2'
        d='M6 96L696 96.0001'
        stroke='url(#paint2_linear_434_511)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_434_511'
          x1='16.5'
          y1='0'
          x2='16.5'
          y2='109'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopOpacity='0' />
          <stop offset='0.0568757' />
          <stop offset='0.906593' />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_434_511'
          x1='3'
          y1='7.5'
          x2='514'
          y2='7.50004'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopOpacity='0' />
          <stop offset='0.00983942' />
          <stop offset='0.875' />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_434_511'
          x1='6'
          y1='95.5'
          x2='696'
          y2='95.5001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopOpacity='0' />
          <stop offset='0.0117351' />
          <stop offset='0.875' />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ParagraphConstructionGraphic;
