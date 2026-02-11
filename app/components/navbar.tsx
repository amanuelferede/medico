"use client";
import Image from "next/image";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { LiaBarsSolid } from "react-icons/lia";

export default function NavBar() {
  const [shouldShowMobileBar, setShouldShowMobileBar] =
    useState<boolean>(false);
  return (
    <div className="relative md:px-0 px-1.5">
      <div className="flex py-3.5 items-center justify-between max-w-6xl mx-auto">
        <Image
          src={`/img/logo.png`}
          alt="logo"
          sizes="100vh"
          width={0}
          height={0}
          className="w-30"
        />
        <div className="flex items-center md:space-x-0 space-x-1.5">
          <div className="md:flex items-center space-x-10 hidden">
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Home
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              About
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Services
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Departments
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Doctors
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              DropDown
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Contact
            </p>
          </div>
          <button className="py-1 text-center bg-[#3fbbc0] text-white rounded-lg px-3 md:hidden block">
            Make an appointment
          </button>
          <LiaBarsSolid
            className="w-7 h-7 md:hidden block cursor-pointer"
            onClick={() => {
              setShouldShowMobileBar(!shouldShowMobileBar);
            }}
          />
        </div>
      </div>
      {shouldShowMobileBar && (
        <div className="md:hidden block fixed bg-black/70 pt-15 top-0 left-0 right-0 bottom-0 z-60 ">
          <CgClose
            className="cursor-pointer w-8 h-8 absolute top-3 right-3 text-white"
            onClick={() => {
              setShouldShowMobileBar(false);
            }}
          />
          <div className="flex flex-col space-y-7 max-w-md p-6 mx-auto w-full bg-white">
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Home
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              About
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Services
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Departments
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Doctors
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              DropDown
            </p>
            <p className="hover:text-[#3fbbc0] hover:font-medium transition-all duration-500 ease-in-out cursor-pointer">
              Contact
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
