import Image from "@/node_modules/next/image";
import {
  getEvents,
  getHeader,
  getMembers,
  getProjects,
} from "@/sanity/sanity-utils";
import { Header } from "@/types/Header";
import bg from "../images/bg.png";
import logo from "../images/09.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "../components/Navbar";
import Members from "../components/Members";
import Events from "../components/Events";
import Footer from "../components/Footer";
// import logo from "../images/logo.jpeg";



export default async function Home() {
  // const projects= await getProjects();
  // const members= await getMembers();
  // const events = await getEvents();
  // const headerData :Header[] = await getHeader();
  // const header = headerData[0]; // Assuming the header data is an array and we're taking the first element

  return (
    <>
   
      <div>
        <div className=" flex justify-center">
          <Image src={bg} alt="background" className="w-full pt-4 md:w-[1300px] md:h-[900px] " />
        </div>
      </div>
      <Events/>
      <Members/>
      <Footer/>

      {/* <div className="flex flex-col  md:flex-row-reverse justify-end items-center p-4">
    <div className="relative w-full md:w-[3000px]">
      <Image
        src={bg}
        alt="background"
        layout="responsive"
        width={1000}
        height={800}
        className="object-cover"
      />
    </div>
    <div className="flex w-full items-center justify-center gap-3 mt-4 md:mt-0">
      <Image
        src={logo}
        alt="logo"
        width={150}
        height={200}
        className="sm:w-[240px] md:w-[300px]"
      />
      <h1 className="text-black w-4 md:text-6xl sm:text-4xl font-extrabold">
        शिवभक्त युवक मंडळ
      </h1>
    </div>
  </div> */}
    </>
    //   <div className="container mx-auto p-4">
    //     {/* Header Section */}
    //     <header className="text-center mb-16">
    //       <div className="flex justify-center mb-4">
    //         <Image src={header.logoImage} alt="Logo" width={200} height={200} />
    //       </div>
    //       <h1 className="text-4xl font-bold">{header.heading}</h1>
    //       {header.subHeading && <h2 className="text-2xl text-gray-600">{header.subHeading}</h2>}
    //       <nav className="flex justify-center space-x-4 mt-4">
    //         {header.images.map((image, index) => (
    //           <Image key={index} src={image} alt={`Header Image ${index + 1}`} width={100} height={100} className="rounded-full" />
    //         ))}
    //       </nav>
    //     </header>

    //   {/* Projects Section */}
    //   <section id="projects" className="mb-16">
    //     <h2 className="text-3xl font-bold mb-8">Projects</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {projects.map((project) => (
    //         <div key={project._id} className="p-6 bg-white shadow-lg rounded-lg">
    //           <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
    //           <Image src={project.image} alt={project.name} width={300} height={200} className="mb-4 rounded" />
    //           {/* <p>{project.content}</p> */}
    //           <a href={project.url} className="text-blue-500 hover:underline">Learn more</a>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* Members Section */}
    //   <section id="members" className="mb-16">
    //     <h2 className="text-3xl font-bold mb-8">Members</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {members.map((member) => (
    //         <div key={member._id} className="p-6 bg-white shadow-lg rounded-lg">
    //           <h3 className="text-2xl font-semibold mb-2">{member.memberName}</h3>
    //           <Image src={member.profileImage} alt={member.memberName} width={200} height={200} className="mb-4 rounded-full" />
    //           <p>{member.identity}</p>
    //           {/* <p>{member.content}</p> */}
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* Events Section */}
    //   <section id="events" className="mb-16">
    //     <h2 className="text-3xl font-bold mb-8">Events</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {events.map((event) => (
    //         <div key={event._id} className="p-6 bg-white shadow-lg rounded-lg">
    //           <h3 className="text-2xl font-semibold mb-2">{event.EventHeading}</h3>
    //           <h4 className="text-xl text-gray-600 mb-2">{event.subEventHeading}</h4>
    //           {event.images.map((image, index) => (
    //             <Image key={index} src={image} alt={`Event Image ${index + 1}`} width={300} height={200} className="mb-4 rounded" />
    //           ))}
    //           {/* <p>{event.content}</p> */}
    //           <a href={event.url} className="text-blue-500 hover:underline">Learn more</a>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="text-center mt-16">
    //     <p>&copy; 2024 Your Company</p>
    //   </footer>
    // </div>
  );
}
