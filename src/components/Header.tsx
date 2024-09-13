import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-[180px] py-[30px] flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src="icon.svg" width={56} height={56} alt="logo" />
        <h1 className="text-lg font-bold">
          GEN
          <br />
          FINTECH
        </h1>
      </div>
      <div className="flex space-x-4">
        <Link href="/">
          <Button variant="link" className="text-lg">
            Home
          </Button>
        </Link>
        <Link href="#about-us">
          <Button variant="link" className="text-lg">
            About Us
          </Button>
        </Link>
        <Link href="/analyze">
          <Button variant="link" className="text-lg">
            Analyze
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
