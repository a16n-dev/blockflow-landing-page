import Marquee from 'react-fast-marquee';
import {
  AlignRightIcon,
  DraftingCompassIcon,
  LayoutDashboard,
  LayoutDashboardIcon,
  LigatureIcon,
  LucideIcon,
  PaintbrushIcon,
  PaintBucketIcon,
  PaintRollerIcon,
  Palette,
  PaletteIcon,
  Rows3Icon,
  RulerIcon,
  SparklesIcon,
  SquareIcon,
} from 'lucide-react';

function shuffle(arr: any[]) {
  const array = [...arr];
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const FEATURES: { icon: LucideIcon; title: string }[] = [
  {
    icon: AlignRightIcon,
    title: 'Text Alignment',
  },
  {
    icon: PaintBucketIcon,
    title: 'Custom colors',
  },
  {
    icon: LigatureIcon,
    title: 'Custom Fonts',
  },
  {
    icon: LayoutDashboardIcon,
    title: 'Flexible Layouts',
  },
  {
    icon: SparklesIcon,
    title: 'Gradient Backgrounds',
  },
  {
    icon: RulerIcon,
    title: 'Adjustable Spacing',
  },
  {
    icon: Rows3Icon,
    title: 'Content containers',
  },
  {
    icon: DraftingCompassIcon,
    title: 'SVG Icon support',
  },
  {
    icon: SquareIcon,
    title: 'Rounded Corners',
  },
  {
    icon: PaintRollerIcon,
    title: 'Colored Backgrounds',
  },
  {
    icon: PaletteIcon,
    title: 'Themes',
  },
  {
    icon: PaintbrushIcon,
    title: 'Pattern Backgrounds',
  },
];

const CustomizationSection = () => {
  return (
    <section style={{ background: 'url("/bg-grid-04.svg")' }}>
      <div className={'bg-gradient-to-b from-theme-bg h-8'} />
      <div
        className={'flex flex-col max-w-[900px] w-full mx-auto min-h-[200px]'}
      >
        <h2 className={'text-theme-text text-4xl font-bold text-center'}>
          Maximum Customization
        </h2>
        <p className={'text-theme-text text-lg text-center mt-1'}>
          Letting you decide what your journals look like, while never
          sacrificing simplicity
        </p>
      </div>
      <h3 className={'text-center text-xl font-bold text-theme-text mt-4'}>
        Your creativity is the limit...
      </h3>
      <Marquee speed={20} className={'pt-4'}>
        {shuffle(FEATURES).map(({ icon: Icon, title }) => (
          <div
            key={title}
            className={
              'flex items-center gap-2 bg-theme-main-bg text-theme-main px-2 py-1 rounded-lg m-1 hover:bg-theme-main hover:text-theme-bg pointer-events-none'
            }
          >
            <Icon size={24} />
            <h3 className={' font-bold text-sm'}>{title}</h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={20} direction={'right'} className={'pb-4'}>
        {shuffle(FEATURES).map(({ icon: Icon, title }) => (
          <div
            key={title}
            className={
              'flex items-center gap-2 bg-theme-main-bg text-theme-main px-2 py-1 rounded-lg m-1 hover:bg-theme-main hover:text-theme-bg pointer-events-none'
            }
          >
            <Icon size={24} />
            <h3 className={' font-bold text-sm'}>{title}</h3>
          </div>
        ))}
      </Marquee>
      <div className={'bg-gradient-to-t from-theme-bg h-8'} />
    </section>
  );
};

export default CustomizationSection;
