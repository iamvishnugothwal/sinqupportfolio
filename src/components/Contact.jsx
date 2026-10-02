import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen pb-10 md:py-10 px-3 md:px-5 "
    >
      <div className="w-full h-full grid gap-10 grid-cols-1 xl:grid-cols-2">
        <div className="relative w-full p-5 lg:p-10 h-[50vh] xl:h-[70vh] overflow-hidden bg-[url('/img/contactus-bg.webp')] bg-cover bg-center rounded-2xl">
          <div className="relative w-[90%] h-full font-primary z-1 text-xl md:text-6xl xl:text-4xl leading-tight">
            Your next growth phase starts here.
          </div>
          <Link
            href={"/contact"}
            className="group relative z-1 bottom-14  px-5 xl:px-3 py-2  flex items-center w-max  gap-2 font-medium hover:font-medium text-md md:text-3xl xl:text-lg hover:bg-white  hover:text-black hover:scale-[1.1] rounded-full border-2 border-white  transition"
          >
            Let's Collaborate
            <MdOutlineArrowOutward className=" text-2xl font-primary md:text-3xl rounded-full" />
          </Link>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-xs opacity-[60%]"></div>
        </div>
        <div className="relative w-full p-5 lg:p-10 h-[50vh] xl:h-[70vh] overflow-hidden bg-[url('/img/followus-bg.webp')] bg-cover bg-center rounded-2xl">
          <div className="relative w-[90%] h-full font-primary z-1 text-xl md:text-5xl xl:text-4xl leading-tight">
            Watch us build the future, one brand at a time.
          </div>
          <Link
            href={"https://www.instagram.com/sinqup.studio/"}
            className="group relative z-1 bottom-14 px-5 xl:px-3 py-2  flex items-center w-max hover:font-medium gap-2 uppercase text-xl md:text-3xl xl:text-lg hover:bg-white hover:text-black hover:scale-[1.1] rounded-full border-2 border-white  transition"
          >
            {" "}
            <span>
              <FaInstagram className="text-3xl  md:text-4xl xl:text-3xl rounded-full" />
            </span>
            Follow Us
          </Link>
          <div className="absolute inset-0 bg-black/5 backdrop-blur-sm opacity-[80%]"></div>
        </div>
      </div>
    </section>
  );
}
