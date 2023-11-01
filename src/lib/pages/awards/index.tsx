'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import ocmGold from '../../../../public/assets/ocm-gold.png';
import soraGold from '../../../../public/assets/sora-gold.png';
import soraSilver from '../../../../public/assets/sora-silver.png';
import soraBronze from '../../../../public/assets/sora-bronze.png';
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
    value: 1,
    children: [{ id: 0, name: 'Hackathon', value: 8 }],
  },
  {
    id: 1,
    name: 'Organization',
    value: 1,
    children: [{ id: 0, name: 'Bitcoin Startup Lab', value: 8 }],
  },
];

const awards = [
  {
    id: 1,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM - 1st Place',
    year: 'OnChain Trophy',
    img: ocmGold,
    model_id: 2,
  },
  {
    id: 2,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM - 1st Place',
    year: 'OnChain Trophy',
    img: ocmGold,
    model_id: 2,
  },
  {
    id: 3,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Ventures - 1st Place',
    year: 'Nostric',
    img: soraGold,
    model_id: 1,
  },
  {
    id: 4,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Ventures - 2nd Place',
    year: 'xBTCBot',
    img: soraSilver,
    model_id: 5,
  },
  {
    id: 5,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Ventures - 2nd Place',
    year: 'xBTCBot',
    img: soraSilver,
    model_id: 5,
  },
  {
    id: 6,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Ventures - 2nd Place',
    year: 'xBTCBot',
    img: soraSilver,
    model_id: 5,
  },
  {
    id: 7,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Ventures - 3rd Place',
    year: 'Smart Contract GPT',
    img: soraBronze,
    model_id: 6,
  },
  {
    id: 8,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Ventures - 3rd Place',
    year: 'Smart Contract GPT',
    img: soraBronze,
    model_id: 6,
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
