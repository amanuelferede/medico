import { FaX, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="lg:max-w-6xl xl:max-w-350 mx-auto pt-15 md:px-0 px-3">
        <div className="grid grid-cols-12">
          <div className="md:col-span-5 col-span-12">
            <p className="text-xl mb-2 font-semibold">Medico</p>
            <div className="mb-5">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
            </div>

            <div className="mb-5">
              <p>Phone: +1 5589 55488 55</p>
              <p>Email: info@example.com</p>
            </div>
            <div className="flex w-full space-x-3">
              <FaX className="hover:text-[#3fbbc0] border border-gray-200 hover:border-[#3fbbc0] transition-all duration-500 ease-in-out w-10 h-10 p-2 rounded-full" />
              <FaFacebook className="hover:text-[#3fbbc0] border border-gray-200 hover:border-[#3fbbc0] transition-all duration-500 ease-in-out w-10 h-10 p-2 rounded-full" />
              <FaInstagram className="hover:text-[#3fbbc0] border border-gray-200 hover:border-[#3fbbc0] transition-all duration-500 ease-in-out w-10 h-10 p-2 rounded-full" />
              <FaLinkedin className="hover:text-[#3fbbc0] border border-gray-200 hover:border-[#3fbbc0] transition-all duration-500 ease-in-out w-10 h-10 p-2 rounded-full" />
            </div>
          </div>
          <div className="md:col-span-7 col-span-12 md:mt-0 mt-5">
            <div className="grid md:grid-cols-4 grid-cols-2">
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">Useful Links</p>
                <p className="text-[0.95rem]">Home</p>
                <p className="text-[0.95rem]">About Us</p>
                <p className="text-[0.95rem]">Services</p>
                <p className="text-[0.95rem]">Terms of Service</p>
                <p className="text-[0.95rem]">Privacy Policy</p>
                <p className="text-[0.95rem]">Home</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">Our Services</p>
                <p className="text-[0.95rem]">Web Design</p>
                <p className="text-[0.95rem]">Web Development</p>
                <p className="text-[0.95rem]">Product Management</p>
                <p className="text-[0.95rem]">Marketing</p>
                <p className="text-[0.95rem]">Product Design</p>
                <p className="text-[0.95rem]">Home</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">Hic solutasetp</p>
                <p className="text-[0.95rem]">Molestiae accusamus iure</p>
                <p className="text-[0.95rem]">Excepturi dignissimos</p>
                <p className="text-[0.95rem]">Suscipit distinctio</p>
                <p className="text-[0.95rem]">Dilecta</p>
                <p className="text-[0.95rem]">Sit quas consectetur</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">Nobis illum</p>
                <p className="text-[0.95rem]">Ipsam</p>
                <p className="text-[0.95rem]">Laudantium dolorum</p>
                <p className="text-[0.95rem]">Dinera</p>
                <p className="text-[0.95rem]">Trodelas</p>
                <p className="text-[0.95rem]">Flexo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col border-t-2 border-t-gray-100 items-center space-y-0.5 py-5 md:text-[0.95rem] text-sm mt-3">
        <p>© Copyright Medicio All Rights Reserved</p>
        <p> Credit: BootstrapMade</p>
        <p>React Version: By Amanuel Ferede</p>
      </div>
    </>
  );
}
