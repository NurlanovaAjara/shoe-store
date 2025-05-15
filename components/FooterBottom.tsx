import { categoriesData, quickLinksData } from "@/static-data/data";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, Subtitle } from "./ui/text";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function FooterBottom() {
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white text-black">
      <div className="space-y-4">
        <Logo />
        <SubText>
          The best selections of 2025,
           comfortable and sporty shoes
        </SubText>
        <SocialMedia
          className="text-black/60"
          iconClassName="border-black hover:text-gray-700"
          tooptipClassName="bg-black text-white"
        />
      </div>
      <div>
        <Subtitle className="font-poppins">Quick Links</Subtitle>
        <ul className="space-y-3 mt-4">
          {quickLinksData.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="hover:text-gray-700 font-medium text-sm"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Subtitle className="font-poppins">Categories</Subtitle>
        <ul className="space-y-3 mt-4">
          {categoriesData.map((item) => (
            <li key={item.title}>
              <Link
                href={`/category/${item.href}`}
                className="hover:text-gray-700 font-medium text-sm"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <Subtitle className="font-poppins">Newsletter</Subtitle>
        <SubText>
          Subscribe to our newsletter to receive updates and exclusive offers
        </SubText>
        <form className="space-y-3">
          <Input placeholder="Enter your email" type="email" required />
          <Button className="w-full bg-black text-white hover:bg-gray-700">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FooterBottom;