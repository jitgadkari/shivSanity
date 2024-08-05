"use client";
import React, { RefObject } from "react";
import { navLinks, NavLinkType } from "./data";
import { useRouter } from "next/navigation";

interface NavProps {
}

const Nav: React.FC<NavProps> = () => {
  const [index, setIndex] = React.useState<number>(0);
  const router = useRouter();

  const handleRefScroll = (text: string) => {
    if (text === "team") {
      const element = document.getElementById("teamScroll");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (text === "events") {
      const element = document.getElementById("eventsScroll");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (text === "about") {
      router.push("/about");
    }
  };
  return (
    <div className="mt-4">
      <ul className="flex gap-4 justify-center h-8">
        {navLinks.map((navLink: NavLinkType) => {
          const { id, link } = navLink;

          return (
            <li
              key={id}
              className={`bg-transparent hover:border-b-2 px-3 py-1 uppercase hover:border-b-[#4AA6E8] hover:bg-[#F4F4F4] ${index === id ? "border-b-[#4AA6E8] border-b-2" : ""}`}
              onClick={() => {
                handleRefScroll(link);
                setIndex(id);
              }}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
