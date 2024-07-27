import Image from "@/node_modules/next/image";
import React from "react";
import image from "../images/shiv.jpeg";
const Event: React.FC = () => {
  const [readMore, setReadMore] = React.useState<boolean>(false);
  const name = "Sample Event";
  const price = "20.00";

  const info =
    " This is a sample event description that can be expanded or collapsed based on the user's interaction with the 'read more' button. This is a sample event description that can be expanded or collapsed based on the user's interaction with the 'read more' button. This is a sample event description that can be expanded or collapsed based on the user's interaction with the 'read more' button.";

  return (
    <>
      <article className="px-10 rounded-md  shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Image
            src={image}
            alt={name}
            className=" object-cover rounded-t-xl"
          />
          <h4 className="text-lg text-start font-medium text-gray-800 my-6">
            {name}
          </h4>
          <footer className="lg:px-24">
            <p className="text-gray-600 mb-6">
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-blue-600 ml-2 focus:outline-none"
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          </footer>
        </div>
      </article>
    </>
  );
};

export default Event;
