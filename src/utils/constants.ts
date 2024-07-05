import { add, format } from 'date-fns';

export const APP_NAME = 'BlockFlow';

export const TODO_ITEMS = [
  { label: 'Schedule dinner with friends', checked: false },
  { label: 'Finish writing notes for class', checked: true },
  { label: 'Pick up groceries for dinner', checked: true },
];

export const NOTES_ITEMS = [
  {
    title: format(add(new Date(), { days: -5 }), 'EEE do MMM'),
    body: 'Today, I spent the afternoon reading by the lake, enjoying the serene view and the warm breeze.',
    timestamp: '2024-07-01T12:12:12Z',
  },
  {
    title: format(add(new Date(), { days: -4 }), 'EEE do MMM'),
    body: 'I finally tried the new coffee shop in town, and their almond croissant was absolutely delicious.',
    timestamp: '2024-07-01T12:12:12Z',
  },
  {
    title: format(add(new Date(), { days: -3 }), 'EEE do MMM'),
    body: 'A sudden rainstorm caught me by surprise on my evening walk, but the cool drops were refreshing.',
    timestamp: '2024-07-01T12:12:12Z',
  },
  {
    title: format(add(new Date(), { days: -2 }), 'EEE do MMM'),
    body: 'I had a great time catching up with an old friend over lunch, reminiscing about our school days.',
    timestamp: '2024-07-01T12:12:12Z',
  },
  {
    title: format(add(new Date(), { days: -1 }), 'EEE do MMM'),
    body: 'After weeks of practice, I managed to play my favorite song on the guitar without any mistakes.',
    timestamp: '2024-07-01T12:12:12Z',
  },
];
