import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/static-data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hover-effect`}
    >
      <div
        className="min-w-72 max-w-96 bg-black text-white h-screen p-10 border-r border-r-gray-500 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesing="group-hover:text-white" />
          <button
            className="hover:text-gray-500 hover-effects cursor-pointer"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`hover:text-gray-500 hover-effects ${
                pathname === item.href && "text-gray-500"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia/>
      </div>
    </div>
  );
};
export default SideMenu;