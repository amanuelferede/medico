import {
  FaDna,
  FaFileMedical,
  FaNotesMedical,
  FaWheelchair,
} from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

export default function Services() {
  return (
    <div className="lg:max-w-6xl xl:max-w-350 mx-auto text-center md:py-16 py-5 md:px-0 px-3">
      <div className="flex flex-col space-y-4 items-center">
        <p className="text-4xl font-semibold text-zinc-600">SERVICES</p>
        <p className="w-15 h-1 bg-[#3fbbc0]"></p>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-6">
        <div className="p-4 group cursor-pointer">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center justify-center bg-white shadow-md  shadow-gray-100 doro p-3 rounded-full">
              <FaHeartPulse className="xl:w-20.5 lg:h-20.5 w-16 h-16  p-3 text-[#3fbbc0]" />
            </div>
            <p className="text-lg font-semibold group-hover:text-[#3fbbc0] transition-all duration-500 ease-in-out">
              Nesciunt Mete
            </p>
            <p className="w-14 h-0.5 bg-[#3fbbc0]"></p>
            <p className="text-[0.95rem]">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
          </div>
        </div>
        <div className="p-4 group cursor-pointer">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center justify-center bg-white shadow-md  shadow-gray-100 doro p-3 rounded-full">
              <GiMedicines className="xl:w-20.5 lg:h-20.5 w-16 h-16  p-3 text-[#3fbbc0]" />
            </div>
            <p className="text-lg font-semibold group-hover:text-[#3fbbc0] transition-all duration-500 ease-in-out">
              Eosle Commodi
            </p>
            <p className="w-14 h-0.5 bg-[#3fbbc0]"></p>
            <p className="text-[0.95rem]">
              Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
              Libero corrupti neque eum hic non ut nesciunt dolorem.
            </p>
          </div>
        </div>
        <div className="p-4 group cursor-pointer">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center justify-center bg-white shadow-md  shadow-gray-100 doro p-3 rounded-full">
              <FaNotesMedical className="xl:w-20.5 lg:h-20.5 w-16 h-16  p-3 text-[#3fbbc0]" />
            </div>
            <p className="text-lg font-semibold group-hover:text-[#3fbbc0] transition-all duration-500 ease-in-out">
              Ledo Markt
            </p>
            <p className="w-14 h-0.5 bg-[#3fbbc0]"></p>
            <p className="text-[0.95rem]">
              Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
              ea aut. Vel qui id voluptas adipisci eos earum corrupti.
            </p>
          </div>
        </div>
        <div className="p-4 group cursor-pointer">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center justify-center bg-white shadow-md  shadow-gray-100 doro p-3 rounded-full">
              <FaDna className="xl:w-20.5 lg:h-20.5 w-16 h-16  p-3 text-[#3fbbc0]" />
            </div>
            <p className="text-lg font-semibold group-hover:text-[#3fbbc0] transition-all duration-500 ease-in-out">
              Asperiores Commodit
            </p>
            <p className="w-14 h-0.5 bg-[#3fbbc0]"></p>
            <p className="text-[0.95rem]">
              Non et temporibus minus omnis sed dolor esse consequatur.
              Cupiditate sed error ea fuga sit provident adipisci neque.
            </p>
          </div>
        </div>
        <div className="p-4 group cursor-pointer">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center justify-center bg-white shadow-md  shadow-gray-100 doro p-3 rounded-full">
              <FaWheelchair className="xl:w-20.5 lg:h-20.5 w-16 h-16  p-3 text-[#3fbbc0]" />
            </div>
            <p className="text-lg font-semibold group-hover:text-[#3fbbc0] transition-all duration-500 ease-in-out">
              Velit Doloremque
            </p>
            <p className="w-14 h-0.5 bg-[#3fbbc0]"></p>
            <p className="text-[0.95rem]">
              Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
              ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
          </div>
        </div>
        <div className="p-4 group cursor-pointer">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex items-center justify-center bg-white shadow-md  shadow-gray-100 doro p-3 rounded-full">
              <FaFileMedical className="xl:w-20.5 lg:h-20.5 w-16 h-16  p-3 text-[#3fbbc0]" />
            </div>
            <p className="text-lg font-semibold group-hover:text-[#3fbbc0] transition-all duration-500 ease-in-out">
              Dolori Architecto
            </p>
            <p className="w-14 h-0.5 bg-[#3fbbc0]"></p>
            <p className="text-[0.95rem]">
              Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
              non et debitis iure. Corrupti recusandae ducimus enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
