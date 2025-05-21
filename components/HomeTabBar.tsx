import { productType } from "@/static-data/data";
import Link from "next/link";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

function HomeTabBar({ selectedTab, onTabSelect }: Props) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType.map((item) => (
          <button
            key={item.title}
            className={`border border-black/20 px-4 py-1.5 md:px-6
md:py-2 rounded-full hover:bg-black hover:border-black
hover:text-white hover-effect cursor-pointer ${
              selectedTab === item?.title
                ? "bg-black text-white border-black"
                : "bg-black/10"
            }`}
            onClick={() => onTabSelect(item?.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <Link
        href="/shop"
        className={`border border-black/30 px-4 py-1.5 md:px-6
md:py-2 rounded-full hover:bg-black hover:border-black
hover:text-white hover-effect cursor-pointer`}
      >
        See all
      </Link>
    </div>
  );
}
export default HomeTabBar;