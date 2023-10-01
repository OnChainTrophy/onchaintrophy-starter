'use client';

import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Search, MoreHorizontal } from 'lucide-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, Suspense } from 'react';

import awardImage from '../../../../public/assets/award.svg';
import ocmTrophy from '../../../../public/assets/ocm-trophy.png';
import soraTrophy from '../../../../public/assets/sora-trophy.png';
// import Tropy from "../../../../public/tropy.glb"
// import TropyModel from '../../../../public/assets/tropy.glb';
import AwardCard from '@/lib/components/ui/awardCard';
import { Button } from '@/lib/components/ui/button';
import InputWithIcon from '@/lib/components/ui/inputWithIcon';
// import Model from '@/lib/components/ui/model2';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/dropdown-menu';
import { fontRedHatDisplay, fontRedHatMono } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';
import Model1 from '@/lib/components/ui/model1';

const awards = [
  {
    id: 1,
    fullName: 'Playoff Final',
    champion: '2023 Championship',
    year: 'Bitcoin Bulls',
    img: awardImage,
  },
  {
    id: 5,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora Grand Prize',
    year: 'TBD',
    img: soraTrophy,
  },
  {
    id: 2,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM Grand Prize',
    year: 'TBD',
    img: ocmTrophy,
  },
];

const table = [
  {
    id: 34880662,
    type: 'Organization',
    name: 'Bitcoin Startup Lab',
    timestamp: 'September 30, 2023 @ 12:24 AM',
    parent:
      'c2211892402483fb4b400746dd26dd99a57327b5a09c12be413eb14b17acf395i0',
    ordinalId:
      '1c6b724a48f569e2c7ce4296f4d5a7900774a196e93d7e562202cea2ecb5632ci0',
  },
  {
    id: 34902502,
    type: 'Team',
    name: 'Bitcoin Bulls',
    timestamp: 'September 30, 2023, 7:08 AM',
    parent:
      '9ff02aed4911edebfe345cad449b72e2380aed341d12f3eb34a197b164f25565i0',
    ordinalId:
      '04a49550c56e4dd8e8402ebaae4f91f3effb7cb02729e08c4c036ec1c5476350i0',
  },
  {
    id: 34902015,
    type: 'Team',
    name: 'Ethereum Wizards',
    timestamp: 'September 30, 2023 @ 6:44 AM EDT',
    parent:
      'a57fd1b60ccb7b32d4eeea61a59409634aa576d48c9adfde17c84dace8fc0122i0',
    ordinalId:
      'c8b1f986a6b4e23922c9d48bd782ce89a26245986da71859e6b86593ba39e454i0',
  },
  {
    id: 34725636,
    type: 'Organization',
    name: 'Blockchain Basketball Association',
    timestamp: 'September 27, 2023 @ 7:03 PM',
    parent:
      '0085ee621439b0533327b3910493511e612aa8944524bacca8e11a03cec60d72i0',
    ordinalId:
      'e49ae98c61c49390b0911e70319ac033e527c60181173498dbeddea735c3320fi0',
  },
];

const Home: NextPage = () => {
  const [search, setSearch] = useState('');

  // console.log(model);
  return (
    <div className="flex gap-5">
      <div className="mb-10 max-w-[620px]">
        <div
          className={cn('mb-8 font-redHatDisplay', fontRedHatDisplay.variable)}
        >
          <div className="mb-4 text-base font-semibold uppercase tracking-[1.7px] text-[#FA3102]">
            WELCOME TO ONCHAIN TROPHY
          </div>
          <div className="text-xs tracking-[1px] text-[#D0DAE2]">
            We use official result data to expertly craft high-end digital
            trophies that are stored permanently on the bitcoin blockchain via
            the <span className="underline">Ordinals Protocol</span>. These
            unique digital artifacts are the first of their kind and represent a
            new era in the recognition of achievements.
          </div>
        </div>
        <div className="mb-8">
          <InputWithIcon
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            icon={<Search width={24} height={24} />}
            placeholder="Search awards..."
          />
        </div>
        <div className="mb-8">
          <div className="mb-6 flex w-full items-center justify-between">
            <div
              className={cn(
                'font-redHatDisplay text-xs font-semibold tracking-[4px] text-[#D0DAE2]',
                fontRedHatDisplay.variable
              )}
            >
              LATEST AWARDS
            </div>
            <Button className="h-fit p-0 text-xs text-[#485769]" variant="link">
              <Link href="/awards/">View all</Link>
            </Button>
          </div>
          <div className="flex justify-between gap-4">
            {awards.map((award) => (
              <Link href={`/awards/${award.id}`} key={award.id}>
                <AwardCard award={award} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-6 flex w-full items-center justify-between">
            <div
              className={cn(
                'font-redHatDisplay text-xs font-semibold tracking-[4px] text-[#D0DAE2]',
                fontRedHatDisplay.variable
              )}
            >
              LIVE DATA FEED
            </div>
            <Button className="h-fit p-0 text-xs text-[#485769]" variant="link">
              <Link href="/data/">View all</Link>
            </Button>
          </div>
          <Table
            className={cn(
              'rounded-bl-[10px] rounded-br-[10px] rounded-tl-none rounded-tr-none bg-black bg-opacity-10 p-4 font-redHatMono text-[#7B90AA]',
              fontRedHatMono
            )}
          >
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="max-w-fit p-4 font-redHatMono text-xs font-normal">
                  Type
                </TableHead>
                <TableHead className="max-w-fit p-4 pr-4 font-redHatMono text-xs font-normal">
                  Name
                </TableHead>
                <TableHead className="max-w-fit p-4 pr-4 font-redHatMono text-xs font-normal">
                  Timestamp
                </TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.map((item) => (
                <TableRow key={item.id} className="border-none">
                  <TableCell className="max-w-[65px] truncate py-2 text-xs capitalize">
                    {item.type}
                  </TableCell>
                  <TableCell className="max-w-[125px] truncate py-2 text-xs capitalize">
                    {item.name}
                  </TableCell>
                  <TableCell className="max-w-[125px] truncate py-2 text-xs capitalize">
                    {item.timestamp}
                  </TableCell>
                  <TableCell className="py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal className="w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Link
                            href={`https://ord.io/${item.id}`}
                            target="_blank"
                          >
                            View Inscription
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href={`https://ord.io/${item.parent}`}
                            target="_blank"
                          >
                            View Parent
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className=" max-h-[100vh] w-fit flex-1">
        <Suspense>
          <Canvas flat linear>
            {/* <OrbitControls /> */}
            <ambientLight intensity={1} color="#FFF" />
            <Environment files="/assets/background.hdr" />
            <Model1 />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
