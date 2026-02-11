import { BiSolidInjection } from "react-icons/bi";
import { FaDna, FaHeartPulse, FaTablets } from "react-icons/fa6";

export default function Carousel() {
  return (
    <>
      <div
        className="min-h-112  relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("/img/carousel/1.jpg")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center bg-white/80 w-5xl md:py-10 py-3 border-t-8 px-4 border-t-[#3fbbc0] md:mx-0 mx-3">
          <div className="flex flex-col space-y-2.5 items-center">
            <p className="md:text-4xl text-lg font-bold">
              Temporibus autem quibusdam
            </p>
            <p className="">
              Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste
              natus error sit voluptatem accusantium.
            </p>
            <button className="py-1.5 block px-8 text-center bg-[#3fbbc0] text-white rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="py-13 lg:max-w-6xl xl:max-w-350 mx-auto px-3">
        <div className="grid md:grid-cols-4 gap-7">
          <div className="py-12 px-6 shadow-lg relative group">
            <div className="absolute z-10 bottom-0 left-0 right-0 h-0 bg-[#3fbbc0] group-hover:h-full transition-all duration-300 ease-in-out"></div>
            <div className="flex flex-col space-y-3">
              <FaHeartPulse className="z-10 w-12 h-12 text-[#3fbbc0] group-hover:text-white" />
              <div className="z-10 group-hover:text-white flex flex-col space-y-3">
                <p className="text-lg font-semibold">Lorem Ipsum</p>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
          <div className="py-12 px-6 shadow-lg relative group">
            <div className="absolute z-10 bottom-0 left-0 right-0 h-0 bg-[#3fbbc0] group-hover:h-full transition-all duration-300 ease-in-out"></div>
            <div className="flex flex-col space-y-3">
              <FaTablets className="z-10 w-12 h-12 text-[#3fbbc0] group-hover:text-white" />
              <div className="z-10 group-hover:text-white flex flex-col space-y-3">
                <p className="text-lg font-semibold">Sed ut perspici</p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
          </div>
          <div className="py-12 px-6 shadow-lg relative group">
            <div className="absolute z-10 bottom-0 left-0 right-0 h-0 bg-[#3fbbc0] group-hover:h-full transition-all duration-300 ease-in-out"></div>
            <div className="flex flex-col space-y-3">
              <BiSolidInjection className="z-10 w-12 h-12 text-[#3fbbc0] group-hover:text-white" />
              <div className="z-10 group-hover:text-white flex flex-col space-y-3">
                <p className="text-lg font-semibold">Magni Dolores</p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
          </div>
          <div className="py-12 px-6 shadow-lg relative group">
            <div className="absolute z-10 bottom-0 left-0 right-0 h-0 bg-[#3fbbc0] group-hover:h-full transition-all duration-300 ease-in-out"></div>
            <div className="flex flex-col space-y-3">
              <FaDna className="z-10 w-12 h-12 text-[#3fbbc0] group-hover:text-white" />
              <div className="z-10 group-hover:text-white flex flex-col space-y-3">
                <p className="text-lg font-semibold">Nemo Enim</p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
