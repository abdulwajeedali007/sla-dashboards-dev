import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
// import type { formStateType } from '../../../Types';

interface dropdownTypes {
  label: string;
  values?: number[] | string[];
  // setSelected: React.Dispatch<
  //   React.SetStateAction<{
  //     Year: number;
  //     ProjectType: string;
  //     ClusterType: string;
  //     ClusterRegion: string;
  //   }>
  // >;
  onSelect: (field: number | string, value: string | number) => void;
  selected: number | string;
  field: string | number;
}

export default function Dropdown({
  values,
  label,
  // setSelected,
  onSelect,
  selected,
  field,
}: dropdownTypes) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="w-80 relative sm:w-60" ref={ref}>
      <span className="text-base">{label}</span>
      {/* Button */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className=" flex items-center justify-between p-3 border border-gray-300 rounded-md bg-white text-base hover:cursor-pointer"
      >
        <span>{selected}</span>

        {/* Caret (rotates on toggle) */}
        <ChevronDown
          size={24}
          className={`transition-transform duration-200 text-gray-400 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-0.5 w-full bg-white border border-gray-300 rounded-md shadow-lg z-20 overflow-hidden">
          {values &&
            values.map((value) => (
              <div
                key={value}
                onClick={() => {
                  // setSelected((prev) => ({ ...prev, [field]: value }));
                  onSelect(field, value);
                  setOpen(false);
                }}
                className="px-4 py-3 text-base border-b border-gray-100 hover:bg-gray-100 cursor-pointer"
              >
                {value}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
