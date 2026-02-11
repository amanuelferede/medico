export default function MakeAppointment() {
  return (
    <div className="bg-[#f7fcfc] md:py-16 py-5 md:px-0 px-3">
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto text-center ">
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-4xl font-semibold text-zinc-600">MAKE AN APPOINTMENT</p>
          <p className="w-15 h-1 bg-[#3fbbc0]"></p>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="grid md:grid-cols-3 gap-5 w-full">
            <input
              className="px-3 py-2 border focus:border-[#3fbbc0] bg-white border-gray-100 outline-none placeholder:text-sm focus:outline-none"
              placeholder="Your Name"
            />
            <input
              className="px-3 py-2 border focus:border-[#3fbbc0] bg-white border-gray-100 outline-none placeholder:text-sm focus:outline-none"
              placeholder="Your Name"
            />
            <input
              className="px-3 py-2 border focus:border-[#3fbbc0] bg-white border-gray-100 outline-none placeholder:text-sm focus:outline-none"
              placeholder="Your Name"
            />
            <input
              type="date"
              className="px-3 py-2 border focus:border-[#3fbbc0] bg-white border-gray-100 outline-none placeholder:text-sm focus:outline-none"
            />
            <select className="px-3 focus:border-[#3fbbc0] text-sm py-2 border bg-white border-gray-100 outline-none placeholder:text-sm focus:outline-none">
              <option value={""}>Select Department</option>
              <option value={""}>Department 1</option>
              <option value={""}>Department 2</option>
              <option value={""}>Department 3</option>
            </select>
            <select className="px-3 focus:border-[#3fbbc0] text-sm py-2 border bg-white border-gray-100 outline-none placeholder:text-sm focus:outline-none">
              <option value={""}>Select Doctor</option>
              <option value={""}>Doctor 1</option>
              <option value={""}>Doctor 2</option>
              <option value={""}>Doctor 3</option>
            </select>

            <textarea
              rows={5}
              className="p-4 focus:border-[#3fbbc0] bg-white focus:outline-none  border border-gray-200 md:col-start-1 md:col-span-3"
            />
          </div>
          <button className="py-2.5 rounded-sm text-center bg-[#3fbbc0] text-white  px-9 mt-4">
            Make an appointment
          </button>
        </div>
      </div>
    </div>
  );
}
