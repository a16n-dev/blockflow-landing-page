import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Description,
  Field,
  Label,
  Select,
} from '@headlessui/react';
import { useState } from 'react';
import { Fonts } from '@/utils/themeHelpers';
import { ChevronDownIcon } from 'lucide-react';
import clsx from 'clsx';

interface ComboBoxProps {
  value: Fonts;
  onChange: (value: Fonts) => void;
}

const ComboBox = ({ value, onChange }: ComboBoxProps) => {
  const [query, setQuery] = useState('');

  return (
    <Field>
      <div className='relative'>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value as Fonts)}
          className={clsx(
            'block w-full bg-gray-200 text-gray-700 appearance-none rounded-lg border-none font-medium mt-1 py-1.5 px-3 text-sm',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          )}
        >
          {Object.values(Fonts).map((v) => (
            <option value={v} key={v}>
              {v || 'Default'}
            </option>
          ))}
        </Select>
        <ChevronDownIcon
          className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
          aria-hidden='true'
        />
      </div>
    </Field>
  );
};

export default ComboBox;
