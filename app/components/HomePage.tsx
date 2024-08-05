import Image from "next/image";
import Nav from "./nav";
import Events from "./Events";
import Members from "./Members";
import Footer from "./Footer";
import bg from "../images/bg.png";
import FetchEvents from "./fetchingSanity/FetchEvents";
import FetchMembers from "./fetchingSanity/FetchMembers";

export default function HomePage() {
  return (
    <>
      <div className=" flex justify-center">
        <Image
          src={bg}
          alt="background"
          className="w-full pt-4 md:w-[1300px] md:h-[900px] "
        />
      </div>
      <Nav />
      <FetchEvents/>
      <FetchMembers/>
      <Footer />
    </>
  );
}
