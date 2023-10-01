import { Button } from '@/lib/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full pr-24 backdrop-blur-md">
      <div className=" flex w-full items-center justify-end gap-8">
        <Button
          variant="secondary"
          className="rounded-[10px] bg-black bg-opacity-25 px-6 py-4 text-sm font-semibold text-[#D0DAE2]"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;
