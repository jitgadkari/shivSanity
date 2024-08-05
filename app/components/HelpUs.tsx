import Image from "@/node_modules/next/image";
import qrImage from "../images/aboutPageImages/qr.jpeg";

interface HelpUsProps {
  contact: string;
  email: string;
}

export default function HelpUs({ contact, email }: HelpUsProps) {
  return (
    <div className="w-full flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-36 py-8 md:py-16 justify-between items-center">
      <div className="w-full md:w-1/2 px-4">
        <h1 className="text-start text-3xl font-semibold underline text-[#4AA6E8]">
          Help Us
        </h1>
        <h2 className="text-lg font-medium pt-2">
          Help us achieve our goal
        </h2>
        <p className="text-lg pt-2">
          Contact No: {contact}
        </p>
        <p className="text-lg">
          Email: {email}
        </p>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <Image
          src={qrImage}
          alt="QR code for help"
          width={200} 
          height={200}
          className=" object-cover  transition-transform duration-300"
        />
      </div>
    </div>
  );
}
