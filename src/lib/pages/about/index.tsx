'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import awardImage from '../../../../public/assets/award.svg';
import ocmTrophy from '../../../../public/assets/ocm-trophy.png';
import soraTrophy from '../../../../public/assets/sora-trophy.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/lib/components/ui/accordion';
import AwardCard from '@/lib/components/ui/awardCard';
import { Button } from '@/lib/components/ui/button';
import InputWithIcon from '@/lib/components/ui/inputWithIcon';
import { fontRedHatDisplay, fontRedHatText } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

const Awards = () => {
  return (
    <div className="mb-8">
      <div
        className={cn(
          'mb-8 max-w-[620px] font-redHatDisplay',
          fontRedHatDisplay.variable
        )}
      >
        <div className="mb-4 text-base font-semibold uppercase tracking-[1.7px] text-[#FA3102]">
          AWARDS
        </div>
        <div className="text-xs tracking-[1px] text-[#D0DAE2]">
          We use official result data to expertly craft high-end digital
          trophies that are stored permanently on the bitcoin blockchain via the{' '}
          <span className="underline">Ordinals Protocol</span>. These unique
          digital artifacts are the first of their kind and represent a new era
          in the recognition of achievements.
        </div>
      </div>
    </div>
  );
};

export default Awards;
