import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/logo.svg';
import trophyImage from '../../../public/assets/trophy.svg';
import { Button } from '@/lib/components/ui/button';
import { fontRedHatDisplay } from '@/lib/styles/fonts';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const buttonStyles = cn(
    'font-redHatDisplay text-xs font-medium tracking-[3px] text-[#878787]',
    fontRedHatDisplay.variable
  );
  return (
    <div className="m-8 flex min-h-full  flex-col justify-between rounded-[10px] bg-black bg-opacity-10 px-4 pb-4 pt-16">
      <div className="flex min-w-[125px] flex-col items-center gap-10">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={75} height={89} />
          </Link>
        </div>
        <div className="flex flex-col  gap-2">
          <Link href="/about">
            <Button variant="link" className={buttonStyles}>
              ABOUT
            </Button>
          </Link>
          <Link href="/awards">
            <Button variant="link" className={buttonStyles}>
              AWARDS
            </Button>
          </Link>
          <Link href="/data">
            <Button variant="link" className={buttonStyles}>
              DATA
            </Button>
          </Link>
        </div>
      </div>
      <Image src={trophyImage} alt="trophy" width={125} height={66} />
    </div>
  );
};

export default Navbar;
