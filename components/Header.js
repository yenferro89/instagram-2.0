import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";


function Header() {
  return (
    <div className=" shadow-sm border-b bg-white top-0 z-50 sticky">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-sm">
          <div className="relative p-3 mt-1 rounded-md">
            <div className="flex absolute inset-y-0 pl-3 items-center pointer-events-none">
              <MagnifyingGlassIcon className=" h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 border-gray-300 sm:text-sm  focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="h-6 md:hidden flex-shrink-0 cursor-pointer" />
          <div className="relative navBtn">
            <div className="absolute w-5 h-5  text-white text-xs -top-1 -right-2 flex items-center justify-center rounded-full bg-red-500 animate-pulse">
              3
            </div>
            <PaperAirplaneIcon className="navBtn -rotate-45" />
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img src="/IMG_0635.JPG" alt="image" className="h-10 w-10 rounded-full flex-shrink-0"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
