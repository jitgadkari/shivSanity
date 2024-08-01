import Image from "@/node_modules/next/image";
import React from "react";
import image from "../images/shiv.jpeg";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
interface EventProps {
  images: string[];
}
const Event: React.FC = ({ images }) => {
  const [readMore, setReadMore] = React.useState<boolean>(false);
  const name = "Sample Event";
  const price = "20.00";

  const info =
    " This is a sample event description that can be expanded or collapsed based on the user's interaction with the 'read more' button. This is a sample event description that can be expanded or collapsed based on the user's interaction with the 'read more' button. This is a sample event description that can be expanded or collapsed based on the user's interaction with the 'read more' button.";
  const [index, setIndex] = React.useState<number>(0);

  return (
    <>
    <div className="section-center relative flex overflow-hidden mx-auto mt-16 w-full sm:w-[80%] lg:w-[70%] xl:w-[80%] h-[400px] sm:h-[600px] lg:h-[800px] text-center">
  {images.map((image: string, imageIndex: number) => {
    let position = "translate-x-full opacity-0";
    if (imageIndex === index) {
      position = "translate-x-0 opacity-100";
    }
    if (
      imageIndex === index - 1 ||
      (index === 0 && imageIndex === images.length - 1)
    ) {
      position = "-translate-x-full";
    }

    return (
      <article
        className={`absolute top-0 left-0 w-full h-full rounded-t-2xl transition-transform duration-300 ${position}`}
        key={index}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={image}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl border-4 border-gray-200"
          />
          <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black to-transparent rounded-t-2xl"></div>
        </div>
      </article>
    );
  })}

 


        <button
          className="prev absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-4 lg:left-6 xl:left-8 bg-transparent text-white w-5 h-5 grid place-items-center rounded-full hover:bg-primary-500 transition duration-200"
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
        >
          <FiChevronLeft className="text-white text-4xl" />
        </button>
        <button
          className="next absolute top-1/2 transform -translate-y-1/2 right-4  sm:right-4 lg:right-6 xl:right-8 bg-transparent text-white w-5 h-5 grid place-items-center rounded-full hover:bg-primary-500 transition duration-200"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          <FiChevronRight className="text-white text-4xl bg-transparent" />
        </button>
      </div>
      <h4 className="text-lg text-start font-medium text-gray-800 ">{name}</h4>
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
    </>
  );
};

export default Event;
