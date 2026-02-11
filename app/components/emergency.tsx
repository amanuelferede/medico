export default function Emergency() {
  return (
    <div className=" bg-[#3fbbc0] md:px-0 px-3">
      <div className="lg:max-w-4xl xl:max-w-5xl md:py-16 py-5 mx-auto">
        <div className="flex flex-col space-y-3 items-center">
          <p className="text-3xl text-center text-white font-bold">
            In an emergency? Need help now?
          </p>
          <p className="text-white text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="md:py-3 py-1.5 md:px-10 px-3 text-white text-center bg-[#3fbbc0] border-2 border-white">
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
