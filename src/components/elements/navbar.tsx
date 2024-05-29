import React from "react";
import { Button } from "../ui/button";
import useIsMobile from "@/hooks/useIsMobile";

const Navbar = () => {
  const listRoute = ["home", "about", "news", "blog", "contact"];
  const isMobile = useIsMobile();
  return (
    <nav>
      <>
        <div className="flex items-center justify-between w-full bg-[#252525] px-16 py-6">
          <div className="w-64 hidden md:block">
            <button className="" onClick={() => alert("terbuka")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-4xl font-bold text-white">FYP Media</h1>
          <div className="w-64 justify-between hidden md:flex items-center">
            <Button>Subscribe</Button>
            <Button>Sign Up</Button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          {isMobile && (
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="bg-[#252525] hidden md:block">
          <ul className="flex justify-center gap-12 py-6">
            {listRoute.map((val, index) => (
              <li key={index} className="text-white capitalize font-medium">
                <a href={val === "home" ? `/` : `/${val}`}>{val}</a>
              </li>
            ))}
          </ul>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
