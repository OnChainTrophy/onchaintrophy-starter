/* eslint-disable react/no-unknown-property */

'use client';

import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import { useState, Suspense, useEffect, useMemo } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { IoClose, IoDiamondOutline, IoTrophyOutline } from 'react-icons/io5';
import { useRouter, useParams } from 'next/navigation';

import { Button } from '@/lib/components/ui/button';
// import Model from '@/lib/components/ui/model2';
import awardImage from '../../../../public/assets/award.svg';
import Ellipse from '../../../../public/assets/ellipse';
import ocmTrophy from '../../../../public/assets/ocm-trophy.png';
import soraTrophy from '../../../../public/assets/sora-trophy.png';
import { fontDMSans400, fontRedHatText } from '@/lib/styles/fonts';
import { cn, extractSubstring } from '@/lib/utils';
import Image from 'next/image';
import Model1 from '@/lib/components/ui/model1';
import Model1Silver from '@/lib/components/ui/model1-silver';
import Model1Bronze from '@/lib/components/ui/model1-bronze';
import Model2 from '@/lib/components/ui/model2';
import Model2Silver from '@/lib/components/ui/model2-silver';
import Model2Bronze from '@/lib/components/ui/model2-bronze';

import awardData from './awardData.json';

// const award = {
//   year: '2023 Players Championship',
//   champion: 'Men’s Open Champion',
//   awardedTo: 'Harvey Heavyside',
//   awardedDate: '2023-02-12T10:43:53.000Z',
//   information: {
//     sport: 'Golf',
//     organisation: 'PGA Tour',
//     competition: 'Players Championsip',
//     course: 'TPC Sawgrass',
//     year: '2023',
//     athlete: 'Harvey Heavyside',
//     score: '-17 Under Par',
//     rank: '1',
//   },
//   details: {
//     inscription: '-54156',
//     parent: '20219',
//     sat: '880028919281',
//     block: '78',
//     created: '2023-06-12T10:43:53.000Z',
//     owner: 'bc1p33k2l1r8s58',
//     inscriptionID: 'd1f193j2k15f9i0',
//     content: 'Link',
//     fileType: 'text/html;charset=utf-8',
//     genesisTx: 'd1f193k2l1jl7f5f9',
//     blockheight: '794019',
//     location: 'cf3a53k2l1hd:0:0',
//     output: 'cf3a5dwhq321e0d:0',
//   },
//   activity: [
//     {
//       name: 'Received',
//       data: 'bc1p32j1kl3j0uru',
//       time: '2 months ago',
//       icon: <FiLogIn />,
//       color: '#24FF00',
//     },
//     {
//       name: 'Sent',
//       data: 'bc1pw2d32qd1q10uru',
//       time: '3 months ago',
//       icon: <FiLogOut />,
//       color: '#FF9911',
//     },
//     {
//       name: 'Awarded',
//       data: '',
//       time: '2 months ago',
//       icon: <IoTrophyOutline />,
//       color: '#EFEFEF',
//     },
//   ],
// };

const styles = {
  container: 'rounded-[10px] bg-black bg-opacity-10 p-4 font-dmSans400 w-full',
  titleContainer: 'text-[#6C7D90] text-[10px]',
  infoContainer: 'text-[#D0DAE2] text-[13px]',
  blockInfo: 'w-full font-dmSans400 py-[14px]',
};

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
    model_id: 3,
  },
  {
    id: 4,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'OCM 3rd Place',
    year: 'TBD',
    img: ocmTrophy,
    model_id: 4,
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
    model_id: 5,
  },
  {
    id: 7,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora 3rd Place',
    year: 'TBD',
    img: soraTrophy,
    model_id: 6,
  },
  {
    id: 8,
    fullName: 'Bitcoin Olympics Hackathon',
    champion: 'Sora 4th Place',
    year: 'TBD',
    img: soraTrophy,
    model_id: 6,
  },
];

const AwardDetails = () => {
  const params = useParams();
  const [modelId, setModelId] = useState<number | null>(null);
  const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);
  const [isOpenActivity, setIsOpenActivity] = useState<boolean>(false);

  const award = awardData.filter(
    (award: any) => award.id.toString() === params.id
  )[0];

  const id: any = params.id;
  const number: number = parseInt(id);

  useEffect(() => {
    const temp = awards.filter((item) => item.id.toString() == params.id)[0]
      .model_id;
    setModelId(temp);
  }, []);

  return (
    <div className="h-fit min-h-[calc(100vh-176px)]">
      <div className="mb-10 flex w-[400px] justify-between">
        <div>
          <Link href="/awards">
            <Button
              variant="link"
              className="flex items-center gap-4 p-0 text-[13px] text-[#FFFFFF59]"
            >
              <ChevronLeft />
              <div>AWARDS</div>
            </Button>
          </Link>
        </div>
        {/*
        <div className="flex gap-4">
          <Link href="/awards">
            <Button
              variant="link"
              className="flex items-center gap-4 p-0 text-[13px] text-[#FFFFFF59]"
            >
              <ChevronLeft />
              <div>PREV</div>
            </Button>
          </Link>
          <Link href="/awards">
            <Button
              variant="link"
              className="flex items-center gap-4 p-0 text-[13px] text-[#FFFFFF59]"
            >
              <div>NEXT</div>
              <ChevronRight />
            </Button>
          </Link>
        </div>
      */}
      </div>
      <div className="flex h-full w-fit gap-3 transition-all duration-300 ease-linear">
        <motion.div className="mb-10 h-fit min-w-[400px] rounded-[10px] bg-black bg-opacity-10 p-4">
          <div className="mb-2 flex gap-2">
            <div
              className={cn(
                'font-redHatText text-lg text-[#6C7D90]',
                fontRedHatText.variable
              )}
            >
              {award.information.organisation}
            </div>
            <div className="flex h-[28px] items-center">
              <BsCheck2Circle className="text-lg text-[#0D850B]" />
            </div>
          </div>
          <div
            className={cn(
              'mb-2 font-redHatText text-lg text-[#D0DAE2]',
              fontRedHatText.variable
            )}
          >
            {award.year}
          </div>
          <div className="mb-8 text-[29px] text-[#EFEFEF]">
            {award.champion}
          </div>
          <div
            className={cn(
              styles.container,
              'mb-4 p-0 font-redHatText',
              fontRedHatText.variable
            )}
          >
            <div
              className={cn(
                'flex items-center justify-between tracking-[4px]',
                styles.titleContainer
              )}
            >
              <Button
                onClick={() => setIsOpenActivity(true)}
                variant="ghost"
                className={cn(
                  'flex w-full justify-between rounded-[10px] px-4 py-0 font-redHatText tracking-[4px]',
                  styles.titleContainer,
                  fontRedHatText.variable
                )}
              >
                <div>AWARDED TO</div>
                <MoreHorizontal className="h-[12px]" />
              </Button>
            </div>
            <div className="px-4 pb-4">
              <div className="mb-3 text-[23px]">{award.awardedTo}</div>
              <div
                className={cn(
                  'flex items-center gap-1 font-redHatText',
                  fontRedHatText.variable
                )}
              >
                <IoTrophyOutline className="text-[20px] text-[#6C7D90]" />
                <div
                  className={cn(
                    'font-dmSans400 text-[13px] text-[#D0DAE2]',
                    fontDMSans400.variable
                  )}
                >
                  {moment(award.awardedDate).format('DD MMM YYYY')}
                </div>
              </div>
            </div>
          </div>
          <div className={cn(styles.container, 'p-0')}>
            <Button
              onClick={() => setIsOpenDetails(true)}
              variant="ghost"
              className={cn(
                'flex w-full justify-between rounded-[10px] font-redHatText tracking-[4px]',
                styles.titleContainer,
                fontRedHatText.variable
              )}
            >
              <div>INFORMATION</div>
              <MoreHorizontal className="h-[12px]" />
            </Button>
            <div className="mt-2 px-4">
              <div className="mb-2 flex gap-2">
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>ORGANIZATION</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.organisation}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>ATHLETE</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.athlete}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 flex gap-2">
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>SPORT</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.sport}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>COMPETITION</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.competition}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 flex gap-2">
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>YEAR</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.year}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>LOCATION</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.course}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>SCORE</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.score}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
                <div className={cn(styles.blockInfo, fontDMSans400.variable)}>
                  <div className={cn(styles.titleContainer)}>RANK</div>
                  <div className="flex items-start gap-1">
                    <div className={cn(styles.infoContainer)}>
                      {award.information.rank}
                    </div>
                    <div className="flex h-[20px] items-center">
                      <BsCheck2Circle className="text-[12px] text-[#0D850B]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mb-10 flex flex-col gap-3">
          <AnimatePresence>
            {isOpenDetails && (
              <motion.div
                className={cn(styles.container, fontDMSans400.variable)}
                initial={{ opacity: 0, width: 0, minWidth: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  width: 'fit-content',
                  minWidth: '420px',
                  x: 0,
                }}
                exit={{ opacity: 0, width: 0, minWidth: 0, x: -20 }}
              >
                <div className="mb-5 flex items-center justify-between px-3 text-[#6C7D90]">
                  <div
                    className={cn(
                      ' font-redHatText uppercase tracking-[4px]',
                      styles.titleContainer,
                      fontRedHatText.variable
                    )}
                  >
                    TECHNICAL DETAILS
                  </div>
                  <Button
                    className="h-fit p-0"
                    variant="ghost"
                    onClick={() => setIsOpenDetails(false)}
                  >
                    <IoClose />
                  </Button>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className={cn('flex', styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>
                        INSCRIPTION
                      </div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.inscription}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>PARENT</div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.parent}
                      </div>
                    </div>
                  </div>
                  <div className={cn('flex items-center', styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>SAT</div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.sat}
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <div className={cn(styles.titleContainer)}>BLOCK</div>
                        <div className={cn(styles.infoContainer)}>
                          {award.details.block}
                        </div>
                      </div>
                      <div className="flex max-w-[100px] flex-wrap justify-between gap-0.5 text-[16px]">
                        <div className="flex h-4 w-4 items-center justify-center rounded-[4px] border-[1px] border-[#08FF94] text-[10px] text-[#08FF94]">
                          {award.details.block}
                        </div>
                        <IoDiamondOutline className="text-[#D951ED] opacity-20" />
                        <IoDiamondOutline className="text-[#D951ED] opacity-20" />
                        <IoDiamondOutline className="text-[#D951ED] opacity-20" />
                        <IoDiamondOutline className="text-[#D951ED] opacity-20" />
                      </div>
                    </div>
                  </div>
                  <div className={cn(styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>CREATED</div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.created}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className={cn('w-full', styles.container)}>
                      <div className={cn(styles.titleContainer)}>OWNER</div>
                      <div className={cn(styles.infoContainer)}>
                        {extractSubstring(award.details.owner, 5, 5)}
                      </div>
                    </div>
                    <div className={cn('w-full', styles.container)}>
                      <div
                        className={cn(
                          'whitespace-nowrap',
                          styles.titleContainer
                        )}
                      >
                        INSCRIPTION ID
                      </div>
                      <div className={cn(styles.infoContainer)}>
                        {extractSubstring(award.details.inscriptionID, 5, 5)}
                      </div>
                    </div>
                  </div>
                  <div className={cn(styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>CONTENT</div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.content}
                      </div>
                    </div>
                  </div>
                  <div className={cn(styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>FILE TYPE</div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.fileType}
                      </div>
                    </div>
                  </div>
                  <div className={cn('flex', styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>
                        GENESIS TX
                      </div>
                      <div className={cn(styles.infoContainer)}>
                        {extractSubstring(award.details.genesisTx, 5, 5)}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>
                        BLOCKHEIGHT
                      </div>
                      <div className={cn(styles.infoContainer)}>
                        {award.details.blockheight}
                      </div>
                    </div>
                  </div>
                  <div className={cn('flex', styles.container)}>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>LOCATION</div>
                      <div className={cn(styles.infoContainer)}>
                        {extractSubstring(award.details.location, 5, 5)}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className={cn(styles.titleContainer)}>OUTPUT</div>
                      <div className={cn(styles.infoContainer)}>
                        {extractSubstring(award.details.output, 5, 5)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isOpenActivity && (
              <motion.div
                className={cn(styles.container, fontDMSans400.variable)}
                initial={{ opacity: 0, width: 0, minWidth: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  width: 'fit-content',
                  minWidth: '420px',
                  x: 0,
                }}
                exit={{ opacity: 0, width: 0, minWidth: 0, x: -20 }}
              >
                <div className="mb-3 flex items-center justify-between px-3 text-[#6C7D90]">
                  <div
                    className={cn(
                      ' font-redHatText uppercase tracking-[4px]',
                      styles.titleContainer,
                      fontRedHatText.variable
                    )}
                  >
                    ACTIVITY
                  </div>
                  <Button
                    className="h-fit p-0"
                    variant="ghost"
                    onClick={() => setIsOpenActivity(false)}
                  >
                    <IoClose />
                  </Button>
                </div>
                <div className="flex flex-col gap-1">
                  {award.activity.map((item) => (
                    <div
                      key={item.name}
                      className={cn(
                        styles.container,
                        'flex justify-between px-3 py-2'
                      )}
                    >
                      <div
                        className="flex items-center gap-2 capitalize"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                        <div className="text-[15px] text-[#D0DAE2]">
                          {item.name}
                        </div>
                      </div>
                      <div>
                        <span className="mr-2 text-[13px] text-[#D0DAE2]">
                          {extractSubstring(item.data, 4, 4)}
                        </span>
                        <span className="text-[13px] text-[#9A9A9A]">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex min-h-[calc(100vh-176px)] w-[590px] items-center">
          {modelId === null ? (
            <>
              <div
                className={cn('relative z-[2] h-[590px] w-[590px] pb-[25px]')}
              >
                <Image src={awardImage} alt="award" width={590} height={590} />
              </div>
              <div className="relative h-full opacity-40">
                <div className="absolute top-[-23px] z-[1] ">
                  <Ellipse width={350} />
                </div>
                <div
                  className={cn(
                    'h-full w-[350px] bg-gradient-to-r from-black via-white to-black opacity-40'
                  )}
                />
              </div>
            </>
          ) : (
            <Suspense>
              <Canvas flat linear>
                <ambientLight intensity={1} color="#FFF" />
                <Environment files="/assets/background.hdr" />
                {modelId == 1 ? (
                  <Model1 />
                ) : modelId == 2 ? (
                  <Model2 />
                ) : modelId == 3 ? (
                  <Model2Silver />
                ) : modelId == 4 ? (
                  <Model2Bronze />
                ) : modelId == 5 ? (
                  <Model1Silver />
                ) : modelId == 6 ? (
                  <Model1Bronze />
                ) : (
                  <></>
                )}
              </Canvas>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default AwardDetails;
