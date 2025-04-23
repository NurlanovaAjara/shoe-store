"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";
function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft
          className="hover:text-shop_dark_color md:hidden cursor-
pointer"
        />
      </button>

      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
}
export default MobileMenu;
