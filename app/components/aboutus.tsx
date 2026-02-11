import Image from "next/image";
import { LiaCheckDoubleSolid } from "react-icons/lia";

export default function AboutUs() {
  return (
    <div className="py-15 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350">
      <div className="flex flex-col space-y-4 items-center max-w-6xl mx-auto">
        <p className="text-3xl">About Us</p>
        <p className="w-17 h-1.5 bg-[#3fbbc0]"></p>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="grid md:grid-cols-2 gap-7">
          <div className="">
            <Image
              src={`/img/about.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-3xl font-bold">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <LiaCheckDoubleSolid className="text-[#3fbbc0] w-6 h-6 flex-none" />
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="flex space-x-2">
                <LiaCheckDoubleSolid className="text-[#3fbbc0] w-6 h-6 flex-none" />
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit. .
                </p>
              </div>
              <div className="flex space-x-2">
                <LiaCheckDoubleSolid className="text-[#3fbbc0] w-6 h-6 flex-none" />
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
