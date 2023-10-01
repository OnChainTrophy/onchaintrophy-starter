import { CheckIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import type React from 'react';

import { fontRedHatText } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

interface IAwardCardProps {
  award: { img: StaticImageData; year: string; champion: string; fullName: string };
}

const AwardCard: React.FC<IAwardCardProps> = ({ award }) => {
  return (
    <div
      className={cn(
        'rounded-[20px] bg-black bg-opacity-10 p-2 font-redHatText text-[#EFEFEF] hover:shadow-lg',
        fontRedHatText.variable
      )}
    >
      <Image
        src={award.img}
        alt="award"
        width={176}
        height={176}
        className="mb-2"
      />
      <div className="p-2">
        <div className="mb-1 flex items-start justify-between">
          <div className="text-[10px]">{award.year}</div>
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#0055E1]">
            <CheckIcon className="h-2 w-2 stroke-white" />
          </div>
        </div>
        <div className="mb-1 text-sm">{award.champion}</div>
        <div className=" text-xs">{award.fullName}</div>
      </div>
    </div>
  );
};

export default AwardCard;
