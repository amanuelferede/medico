import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
  return (
    <div className="md:pt-15 py-5 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-4xl font-semibold text-zinc-600">Contact</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div
          className=" grid md:grid-cols-2 mt-6 gap-10
        "
        >
          <div className="">
            <div className="bg-white md:shadow-lg shadow-sm py-5 flex flex-col space-y-2 items-center">
              <div className="p-3 border-2 border-dotted border-[#3fbbc0] rounded-full">
                <GrLocation className="w-7 text-[#3fbbc0] h-7" />
              </div>
              <p className="text-[#3fbbc0] text-lg font-semibold">Address</p>
              <p className="text-sm">A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-6 ">
              <div className="py-5 flex flex-col md:shadow-lg shadow-sm space-y-2.5 items-center">
                <div className="p-3 border-2 border-dotted border-[#3fbbc0] rounded-full">
                  <LuPhone className="w-7 text-[#3fbbc0] h-7" />
                </div>
                <p className="text-lg font-semibold text-zinc-400">Call Us</p>
                <p className="text-sm">+1 5589 55488 55</p>
              </div>
              <div className="py-5 flex flex-col md:shadow-lg shadow-sm space-y-2.5 items-center">
                <div className="p-3 border-2 border-dotted border-[#3fbbc0] rounded-full">
                  <TfiEmail className="w-7 text-[#3fbbc0] h-7" />
                </div>
                <p className="text-lg font-semibold text-zinc-400">Email Us</p>
                <p className="text-sm">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="md:shadow-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                <input
                  className="border focus:outline-none border-gray-500 p-2.5 w-full placeholder:text-gray-200"
                  placeholder="Your Name"
                />
                <input
                  className="border focus:outline-none border-gray-500 p-2.5 w-full placeholder:text-gray-200"
                  placeholder="Your Email"
                />
                <input
                  className="col-span-2 border focus:outline-none border-gray-500 p-2.5 w-full placeholder:text-gray-200"
                  placeholder="Subject"
                />
                <textarea
                  rows={3}
                  className="col-span-2 w-full border focus:outline-none border-gray-500 p-2.5 w-full placeholder:text-gray-200"
                  placeholder="Message"
                />
              </div>
              <button className="py-2 mt-5 px-5 block bg-[#3fbbc0] text-white rounded-sm">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
