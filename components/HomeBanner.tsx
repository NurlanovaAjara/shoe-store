import Link from "next/link";
import { Title } from "./ui/text";
import Image from "next/image";
import { banner_1 } from "@/images";

function HomeBanner() {
  return (
    <div className="py-16 md:py-0 bg-pink-100 rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab Upto 50% off on <br /> Selected Headphone
        </Title>
        <Link
          href="/shop"
          className="bg-black text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 hover:text-white hover-effect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="Headphones on sale"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
