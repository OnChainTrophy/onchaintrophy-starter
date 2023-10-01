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

const filtersData = [
  {
    id: 0,
    name: 'Sport',
    value: 2,
    children: [
      { id: 0, name: 'Hackathon', value: 7 },
      { id: 1, name: 'Basketball', value: 1 },
    ],
  },
  {
    id: 1,
    name: 'Organization',
    value: 2,
    children: [
      { id: 0, name: 'Bitcoin Startup Lab', value: 7 },
      { id: 1, name: 'Blockchain Basketball Assoc.', value: 1 },
    ],
  },
];

const awards = [
  {
    id: 1,
    fullName: 'Playoff Final',
    champion: '2023 Championship',
    year: 'Bitcoin Bulls',
    img: awardImage,
    model_id: null,
  },
  {
    id: 2,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM Grand Prize',
    year: 'TBD',
    img: ocmTrophy,
    model_id: 2,
  },
  {
    id: 3,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM 2nd Place',
    year: 'TBD',
    img: ocmTrophy,
    model_id: 2,
  },
  {
    id: 4,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM 3rd Place',
    year: 'TBD',
    img: ocmTrophy,
    model_id: 2,
  },
  {
    id: 5,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Grand Prize',
    year: 'TBD',
    img: soraTrophy,
    model_id: 1,
  },
  {
    id: 6,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora 2nd Place',
    year: 'TBD',
    img: soraTrophy,

    model_id: 1,
  },
  {
    id: 7,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora 3rd Place',
    year: 'TBD',
    img: soraTrophy,
    model_id: 1,
  },
  {
    id: 8,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora 4th Place',
    year: 'TBD',
    img: soraTrophy,
    model_id: 1,
  },
];

const Awards = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {}, [filter]);

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
      <div className="flex gap-[72px]">
        <div
          className={cn(
            'min-w-[240px] rounded-[10px] bg-black bg-opacity-10 py-4 font-redHatText',
            fontRedHatText.variable
          )}
        >
          <div className="mb-2 flex items-center justify-between px-4 text-[#485769]">
            <div className="flex items-center justify-between gap-3">
              <Button variant="outline" className="h-12 w-12 rounded-[10px]">
                <FaFilter className="h-3 w-3" />
              </Button>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-[#00FF38]" />
                <div className="text-sm font-medium uppercase">LIVE</div>
              </div>
            </div>
            <div className="text-sm">8 results</div>
          </div>
          <div>
            {filtersData.map((item) => (
              <Accordion type="single" collapsible key={item.id}>
                <AccordionItem
                  value={item.children[0].id.toString()}
                  className="border-none"
                >
                  <AccordionTrigger className="gap-[6px] px-4 text-sm font-normal text-[#D0DAE2]">
                    <div className="flex w-full justify-between text-[#888888]">
                      <div>{item.name}</div>
                      <div>({item.value})</div>
                    </div>
                  </AccordionTrigger>
                  {item.children.map((child) => (
                    <AccordionContent
                      key={child.id}
                      className="text-sm text-[#D0DAE2]"
                    >
                      <Button
                        onClick={() => setFilter(child.name)}
                        variant="ghost"
                        className="flex w-full justify-between px-4 py-[7px] font-normal"
                      >
                        <div>{child.name}</div>
                        <div className="text-[#888888]">({child.value})</div>
                      </Button>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="w-fit max-w-[880px]">
          <div className="mb-8 w-full">
            <InputWithIcon
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              icon={<Search width={24} height={24} />}
              placeholder="Search awards..."
            />
          </div>
          <div className="flex w-full flex-wrap gap-8">
            {awards.map((award) => (
              <Link href={`/awards/${award.id}`} key={award.id}>
                <AwardCard award={award} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
