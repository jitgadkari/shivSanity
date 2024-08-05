"use client";
import { EventType } from "@/types/EventType";
import Image from "next/image";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface EventProps {
  event: EventType;
}

const Event: React.FC<EventProps> = ({ event }) => {
  const { images, EventHeading, subEventHeading, text } = event;
  const [readMore, setReadMore] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  return (
    <>
      <div className="section-center relative flex overflow-hidden mx-auto w-full sm:w-4/5 lg:w-3/5 xl:w-4/5 h-[300px] sm:h-[500px] lg:h-[600px] text-center">
        {images.map((image, imageIndex) => {
          const imageUrl = image;
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
              className={`absolute top-0 left-0 w-full h-full rounded-2xl transition-transform duration-300 ${position}`}
              key={imageIndex}
            >
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt={`Image ${imageIndex}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl border-4 border-gray-200"
                />
                <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
              </div>
            </article>
          );
        })}

        <button
          className="prev absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-6 lg:left-8 bg-transparent text-white w-10 h-10 grid place-items-center rounded-full hover:bg-primary-500 transition duration-200"
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button>
        <button
          className="next absolute top-1/2 transform -translate-y-1/2 right-4 sm:right-6 lg:right-8 bg-transparent text-white w-10 h-10 grid place-items-center rounded-full hover:bg-primary-500 transition duration-200"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          <FiChevronRight className="text-white text-2xl" />
        </button>
        <h4 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl lg:text-2xl font-medium">
          {EventHeading}
        </h4>
      </div>
      <div className="w-full sm:w-[80%] lg:w-[70%] xl:w-[80%] mx-auto">
        <h3 className="text-center text-2xl font-semibold mb-2">{subEventHeading}</h3>
        <div className="text-gray-600 mb-4 justify-center">
        <p className="text-gray-600 mb-6">
              {readMore ? text : `${text.substring(0, 200)}...`}
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-blue-600 ml-2 focus:outline-none"
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
        </div>
       
      </div>
    </>
  );
};

export default Event;
