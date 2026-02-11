"use client";
import { useState } from "react";
import Image from "next/image";
import { departments } from "../data/departments";
export default function Departments() {
  const [selectedDepartment, setSelectedDepartment] = useState<{
    title: string;
    subTitle: string;
    body: string;
    image: string;
  }>(departments[0]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div className="bg-[#f7fcfc] md:py-16 py-5 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4.5 items-center">
          <p className="text-4xl font-semibold text-zinc-600">Departments</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-12 w-full mt-6">
          <div className="md:col-span-3 border-r-2 border-gray-300  col-span-12">
            {departments.map((dept, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedDepartment(dept);
                    setSelectedIndex(index);
                  }}
                  className={`w-full px-2 py-2.5 font-semibold mb-3 hover:text-[#3fbbc0] cursor-pointer ${
                    selectedIndex === index ? "bg-white text-[#3fbbc0]" : ""
                  }`}
                  key={index}
                >
                  {dept.title}
                </div>
              );
            })}
          </div>

          <div className="md:col-span-9 col-span-12">
            <div className="grid grid-cols-12">
              <div className="md:col-span-8 col-span-12 p-5">
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold">
                    {selectedDepartment.title}
                  </p>
                  <p className="italic">{selectedDepartment.subTitle}</p>
                  <p>{selectedDepartment.body}</p>
                </div>
              </div>
              <div className="md:col-span-4 col-span-12">
                <Image
                  src={selectedDepartment.image}
                  alt="logo"
                  sizes="100vh"
                  width={0}
                  height={0}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
