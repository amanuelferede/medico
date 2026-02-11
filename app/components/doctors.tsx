import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
export default function Doctors() {
  return (
    <div className="bg-[#f7fcfc] md:py-16 py-5 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4.5 items-center mb-6">
          <p className="text-4xl font-semibold text-zinc-600">Doctors</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          <div className="shadow-md group">
            <div className="relative">
              <Image
                src={`/img/doctors/1.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className=" w-full"
              />
              <div className="absolute flex justify-center w-full z-10 bottom-12 opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-500 ease-in-out space-x-3">
                <FaX className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaFacebook className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaInstagram className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaLinkedin className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
              </div>
            </div>
            <div className="flex flex-col space-y-1 py-3 px-4">
              <p className="text-lg text-zinc-600 font-semibold">
                Walter White
              </p>
              <p className="text-zinc-400 text-[0.996rem]">
                Chief Medical Officer
              </p>
            </div>
          </div>
          <div className="shadow-md group">
            <div className="relative">
              <Image
                src={`/img/doctors/2.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className=" w-full"
              />
              <div className="absolute flex justify-center w-full z-10 bottom-12 opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-500 ease-in-out space-x-3">
                <FaX className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaFacebook className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaInstagram className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaLinkedin className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
              </div>
            </div>
            <div className="flex flex-col space-y-1 py-3 px-4">
              <p className="text-lg text-zinc-600 font-semibold">
                Sarah Jhonson
              </p>
              <p className="text-zinc-400 text-[0.996rem]">Anesthesiologist</p>
            </div>
          </div>
          <div className="shadow-md group">
            <div className="relative">
              <Image
                src={`/img/doctors/3.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className=" w-full"
              />
              <div className="absolute flex justify-center w-full z-10 bottom-12 opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-500 ease-in-out space-x-3">
                <FaX className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaFacebook className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaInstagram className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaLinkedin className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
              </div>
            </div>
            <div className="flex flex-col space-y-1 py-3 px-4">
              <p className="text-lg text-zinc-600 font-semibold">
                William Anderson
              </p>
              <p className="text-zinc-400 text-[0.996rem]">Cardiology</p>
            </div>
          </div>
          <div className="shadow-md group">
            <div className="relative">
              <Image
                src={`/img/doctors/4.jpg`}
                alt="logo"
                sizes="100vh"
                width={0}
                height={0}
                className=" w-full"
              />
              <div className="absolute flex justify-center w-full z-10 bottom-12 opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-500 ease-in-out space-x-3">
                <FaX className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaFacebook className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaInstagram className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
                <FaLinkedin className="hover:text-[#3fbbc0] rounded-md w-10 h-10 p-2 bg-white/60" />
              </div>
            </div>
            <div className="flex flex-col space-y-1 py-3 px-4">
              <p className="text-lg text-zinc-600 font-semibold">
                Amanda Jepson
              </p>
              <p className="text-zinc-400 text-[0.996rem]">Neurosurgeon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
