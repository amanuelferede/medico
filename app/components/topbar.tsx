import { AiOutlineMobile } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

export default function TopBar() {
  return (
    <div className="py-2  bg-[#3fbbc0] ">
      <div className="flex items-center md:justify-between justify-center max-w-6xl mx-auto">
        <div className="md:flex space-x-0.5 items-center hidden">
          <IoMdTime className="w-5 h-5 text-white" />
          <p className="text-white">Monday - Saturday, 8AM to 10PM</p>
        </div>
        <div className="flex items-center space-x-0.5">
          <AiOutlineMobile className="w-5 h-5 text-white" />

          <p className="text-white">Call us now +1 5589 55488 55</p>
        </div>
      </div>
    </div>
  );
}
