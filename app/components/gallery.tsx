"use client";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
export default function Gallery() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // screen width 1024px and less
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screen width 600px and less
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screen width 480px and less
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="md:py-16 py-5 overflow-hidden">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4.5 items-center">
          <p className="text-4xl font-semibold text-zinc-600">Gallery</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="mt-6 gallery">
          <Slider {...settings}>
            {Array.from({ length: 8 }, (el, index) => {
              return (
                <div className="relative w-full" key={index}>
                  <Image
                    src={`/img/gallery/${index + 1}.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-full"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
