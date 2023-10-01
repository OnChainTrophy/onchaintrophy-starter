import type { ChangeEvent } from 'react';
import type React from 'react';

import { Input } from '@/lib/components/ui/input';

interface InputWithIconProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
  placeholder?: string;
}
const InputWithIcon: React.FC<InputWithIconProps> = ({
  onChange,
  value,
  icon,
  placeholder,
}) => {
  return (
    <div className="relative">
      <div className="absolute left-4 flex h-full items-center">{icon}</div>
      <Input
        value={value}
        onChange={onChange}
        className="flex h-12 w-full items-center bg-transparent pl-12 text-lg focus:border-[#FA3102]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithIcon;
