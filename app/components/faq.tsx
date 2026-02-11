"use client";
import { SlArrowRight } from "react-icons/sl";
import { faq } from "../data/faq";
import { useState } from "react";

export default function FAQ() {
  const [fqqs, setFQQs] = useState<
    {
      title: string;
      drop: string;
      isOpened: boolean;
    }[]
  >(faq);
  const dropDownFaq = (_index: number) => {
    const newFaqqs = fqqs.map((faq, index) => {
      if (index === _index) {
        return {
          ...faq,
          isOpened: !faq.isOpened,
        };
      } else {
        return faq;
      }
    });
    setFQQs(newFaqqs);
  };
  return (
    <div className="bg-[#f7fcfc] md:py-16 py-5 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4.5 items-center">
          <p className="text-4xl font-semibold text-center text-zinc-600">
            Frequently Asked Questions
          </p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="mt-6">
          {fqqs.map((faq, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col space-y-1.5 p-2.5 border   rounded-md bg-white py-4.5 px-5 mb-4 ${
                  faq.isOpened ? "border-[#3fbbc0]" : "border-gray-100"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    dropDownFaq(index);
                  }}
                >
                  <p className="text-[#3fbbc0] font-semibold">{faq.title}</p>
                  <SlArrowRight
                    className={`w-4 h-4 transition-all duration-300 ease-in-out ${
                      faq.isOpened ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>

                <div
                  className={`text-[0.97rem] leading-loose overflow-hidden  transition-all duration-300 ease-in-out ${
                    faq.isOpened ? "h-15" : "h-0"
                  }`}
                >
                  {faq.drop}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
