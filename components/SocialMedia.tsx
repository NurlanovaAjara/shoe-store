import { Facebook, Instagram, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
];
interface Props {
  className?: string;
  iconClassName?: string;
  tooptipClassName?: string;
}
function SocialMedia({ className, iconClassName, tooptipClassName }: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hover-effect",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-shop_dark_color font-semibold",
                tooptipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
export default SocialMedia;
