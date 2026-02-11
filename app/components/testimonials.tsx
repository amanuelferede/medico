"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonilas() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,

   
  };

    const settings2: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,

   
  };
  return (
    <div className="bg-[#f7fcfc] md:py-16 py-5 overflow-x-hidden">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-4xl font-semibold text-zinc-600">Testimonials</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="md:block hidden mt-6">
          <Slider {...settings}>
            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Saul Goodman
                    </p>
                    <p className="text-zinc-500">Ceo & Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid malis quorum velit fore eram velit
                  sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Sara Wilsson
                    </p>
                    <p className="text-zinc-500">Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Jena Karlis
                    </p>
                    <p className="text-zinc-500">Store Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat dolor enim duis veniam ipsum anim
                  magna sunt elit fore quem dolore labore illum veniam.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/4.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Matt Brandon
                    </p>
                    <p className="text-zinc-500">Freelancer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam sunt culpa nulla illum cillum
                  fugiat legam esse veniam culpa fore nisi cillum quid.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/5.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      John Larson
                    </p>
                    <p className="text-zinc-500">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

          <div className="md:hidden block mt-6">
          <Slider {...settings2}>
            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/1.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Saul Goodman
                    </p>
                    <p className="text-zinc-500">Ceo & Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid malis quorum velit fore eram velit
                  sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/2.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Sara Wilsson
                    </p>
                    <p className="text-zinc-500">Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/3.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Jena Karlis
                    </p>
                    <p className="text-zinc-500">Store Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat dolor enim duis veniam ipsum anim
                  magna sunt elit fore quem dolore labore illum veniam.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/4.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      Matt Brandon
                    </p>
                    <p className="text-zinc-500">Freelancer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-77">
              <div className="bg-gray-200 p-6 pb-15 rounded-md relative">
                <p>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam sunt culpa nulla illum cillum
                  fugiat legam esse veniam culpa fore nisi cillum quid.
                </p>
                <div className=" flex flex-col space-y-1.5  absolute -bottom-1/2 left-5">
                  <Image
                    src={`/img/testimonials/5.jpg`}
                    alt="logo"
                    sizes="100vh"
                    width={0}
                    height={0}
                    className="w-20 h-20 rounded-full border-5 border-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-zinc-600">
                      John Larson
                    </p>
                    <p className="text-zinc-500">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
