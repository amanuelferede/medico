export default function Prices() {
  return (
    <div className="bg-[#f7fcfc] md:py-16 py-5 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto ">
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-4xl font-semibold text-zinc-600">Pricing</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>

          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="">
          <div className="grid md:grid-cols-4 gap-8 mt-6">
            <div className="shadow-md rounded-md">
              <div className="text-center text-lg font-semibold rounded-tl-md rounded-tr-md md:py-3.5 py-3 bg-gray-100">
                Free
              </div>
              <div className="flex flex-col py-10 bg-white space-y-2.5 items-center">
                <p className="space-x-1">
                  <span className="relative -top-4 text-lg font-semibold">
                    $
                  </span>
                  <span className="text-4xl text-zinc-600 font-semibold">
                    0
                  </span>
                  <span className="text-zinc-500">/ month</span>
                </p>
                <p className="text-sm">Aida dere</p>
                <p className="text-sm">Nec feugiat nisl</p>
                <p className="text-sm">Nulla at volutpat dola</p>
                <p className="text-sm line-through">Pharetra massa</p>
                <p className="text-sm line-through">Massa ultricies mi</p>
              </div>
              <div className="rounded-bl-md rounded-br-md text-center py-4 bg-gray-100 flex items-center justify-center">
                <button className="py-1.5 text-center bg-[#3fbbc0] text-white rounded-sm px-9">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="shadow-md rounded-md">
              <div className="text-center text-lg font-semibold rounded-tl-md rounded-tr-md md:py-3.5 py-3 bg-[#3fbbc0] text-white">
                Business
              </div>
              <div className="flex flex-col py-10 bg-white space-y-2.5 items-center">
                <p className="space-x-1">
                  <span className="relative -top-4 text-lg font-semibold">
                    $
                  </span>
                  <span className="text-4xl text-zinc-600 font-semibold">
                    19
                  </span>
                  <span className="text-zinc-500">/ month</span>
                </p>
                <p className="text-sm">Aida dere</p>
                <p className="text-sm">Nec feugiat nisl</p>
                <p className="text-sm">Nulla at volutpat dola</p>
                <p className="text-sm line-through">Pharetra massa</p>
                <p className="text-sm line-through">Massa ultricies mi</p>
              </div>
              <div className="rounded-bl-md rounded-br-md text-center py-4 bg-gray-100 flex items-center justify-center">
                <button className="py-1.5 text-center bg-[#3fbbc0] text-white rounded-sm px-9">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="shadow-md rounded-md">
              <div className="text-center text-lg font-semibold rounded-tl-md rounded-tr-md md:py-3.5 py-3 bg-gray-100">
                Developer
              </div>
              <div className="flex flex-col py-10 bg-white space-y-2.5 items-center">
                <p className="space-x-1">
                  <span className="relative -top-4 text-lg font-semibold">
                    $
                  </span>
                  <span className="text-4xl text-zinc-600 font-semibold">
                    29
                  </span>
                  <span className="text-zinc-500">/ month</span>
                </p>
                <p className="text-sm">Aida dere</p>
                <p className="text-sm">Nec feugiat nisl</p>
                <p className="text-sm">Nulla at volutpat dola</p>
                <p className="text-sm line-through">Pharetra massa</p>
                <p className="text-sm line-through">Massa ultricies mi</p>
              </div>
              <div className="rounded-bl-md rounded-br-md text-center py-4 bg-gray-100 flex items-center justify-center">
                <button className="py-1.5 text-center bg-[#3fbbc0] text-white rounded-sm px-9">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="shadow-md rounded-md overflow-hidden ">
              <div className="relative text-center text-lg font-semibold rounded-tl-md rounded-tr-md md:py-5 py-3 bg-gray-100">
                <p className="text-center">Ultimate</p>
                <div className="w-full text-sm absolute top-7 -translate-x-9 rotate-50 z-10 -right-1/2 p-1 text-center bg-[#3fbbc0] text-white">
                  Advanced
                </div>
              </div>
              <div className="flex flex-col py-10 bg-white space-y-2.5 items-center">
                <p className="space-x-1">
                  <span className="relative -top-4 text-lg font-semibold">
                    $
                  </span>
                  <span className="text-4xl text-zinc-600 font-semibold">
                    49
                  </span>
                  <span className="text-zinc-500">/ month</span>
                </p>
                <p className="text-sm">Aida dere</p>
                <p className="text-sm">Nec feugiat nisl</p>
                <p className="text-sm">Nulla at volutpat dola</p>
                <p className="text-sm line-through">Pharetra massa</p>
                <p className="text-sm line-through">Massa ultricies mi</p>
              </div>
              <div className="rounded-bl-md rounded-br-md text-center py-4 bg-gray-100 flex items-center justify-center">
                <button className="py-1.5 text-center bg-[#3fbbc0] text-white rounded-sm px-9">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
