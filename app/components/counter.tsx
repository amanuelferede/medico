import { FaAward, FaHandHoldingMedical, FaLungs } from "react-icons/fa";
import {
  FaFlask,
  FaStaffSnake,
  FaSuitcaseMedical,
  FaUserDoctor,
} from "react-icons/fa6";
import Image from "next/image";
import { BsBuildingFillAdd } from "react-icons/bs";
export default function Counter() {
  return (
    <>
      <div className="md:py-16 py-5 lg:max-w-6xl xl:max-w-350 mx-auto md:px-0 px-3">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex items-center md:shadow-lg ">
            <div className="flex space-x-3 px-6 py-10">
              <FaUserDoctor className="w-11 h-11 text-[#3fbbc0]" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">25</p>
                <p className="text-xl font-semibold">Doctors</p>
              </div>
            </div>
          </div>

          <div className="flex items-center md:shadow-lg ">
            <div className="flex space-x-3 p-6">
              <BsBuildingFillAdd className="w-11 h-11 text-[#3fbbc0]" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">15</p>
                <p className="text-xl font-semibold">Departments</p>
              </div>
            </div>
          </div>
          <div className="flex items-center md:shadow-lg ">
            <div className="flex space-x-3 p-6">
              <FaFlask className="w-11 h-11 text-[#3fbbc0]" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">8</p>
                <p className="text-xl font-semibold">Research Labs</p>
              </div>
            </div>
          </div>
          <div className="flex items-center md:shadow-lg ">
            <div className="flex space-x-3 p-6">
              <FaAward className="w-11 h-11 text-[#3fbbc0]" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">150</p>
                <p className="text-xl font-semibold">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-6xl xl:max-w-350 mx-auto md:px-0 px-3">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Image
              src={`/img/features.jpg`}
              alt="logo"
              sizes="100vh"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex-col space-y-4 mb-6">
              <p className="text-xl">
                Enim quis est voluptatibus aliquid consequatur fugiat
              </p>
              <p className="h-1 w-10 bg-[#3fbbc0]"></p>
              <p>
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex space-x-8 group cursor-pointer">
                <FaHandHoldingMedical className="group-hover:text-white group-hover:bg-[#3fbbc0] transition-all duration-500 ease-in-out w-14 h-14 flex-none p-3 bg-white text-[#3fbbc0] md:shadow-lg " />
                <div className="flex flex-col space-y-2.5">
                  <p className="text-lg font-semibold">Lorem Ipsum</p>
                  <p className="text-[0.97rem]">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="flex space-x-8 group">
                <FaSuitcaseMedical className="group-hover:text-white group-hover:bg-[#3fbbc0] transition-all duration-500 ease-in-out w-14 h-14 flex-none p-3 bg-white text-[#3fbbc0] md:shadow-lg " />
                <div className="flex flex-col space-y-2.5">
                  <p className="text-lg font-semibold">Nemo Enim</p>
                  <p className="text-[0.97rem]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div className="flex space-x-8 group">
                <FaStaffSnake className="group-hover:text-white group-hover:bg-[#3fbbc0] transition-all duration-500 ease-in-out w-14 h-14 flex-none p-3 bg-white text-[#3fbbc0] md:shadow-lg " />
                <div className="flex flex-col space-y-2.5">
                  <p className="text-lg font-semibold">Dine Pad</p>
                  <p className="text-[0.97rem]">
                    Explicabo est voluptatum asperiores consequatur magnam. Et
                    veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                  </p>
                </div>
              </div>
              <div className="flex space-x-8 group">
                <FaLungs className="group-hover:text-white group-hover:bg-[#3fbbc0] transition-all duration-500 ease-in-out w-14 h-14 flex-none p-3 bg-white text-[#3fbbc0] md:shadow-lg " />
                <div className="flex flex-col space-y-2.5">
                  <p className="text-lg font-semibold">Tride clov</p>
                  <p className="text-[0.97rem]">
                    Est voluptatem labore deleniti quis a delectus et. Saepe
                    dolorem libero sit non aspernatur odit amet. Et eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
