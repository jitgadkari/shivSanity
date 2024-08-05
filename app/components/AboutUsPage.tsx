"use client";
import Image from "next/image";
import React from "react";

import bg from "../images/aboutbg1.png";
import ourMissionImage from "../images/bg.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image02 from "../images/aboutPageImages/01.jpeg";
import image01 from "../images/aboutPageImages/02.jpeg";
import image03 from "../images/aboutPageImages/03.jpeg";
import image04 from "../images/aboutPageImages/04.jpeg";
import image05 from "../images/aboutPageImages/05.jpeg";

import Footer from "./Footer";
import HelpUs from "./HelpUs";
export default function AboutUsPage() {
  const [index, setIndex] = React.useState<number>(0);
  const images = [image01, image02, image03, image04, image05];

  return (
    <>
      <div className="relative flex justify-center">
        <Image
          src={bg}
          alt="background"
          className="w-full h-auto object-cover aboutbg"
        />
        <div className="absolute bottom-0 left-0 w-full h-[30%] "></div>
      </div>
      <div className="w-full flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-36 py-8 md:py-16 justify-between items-center">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-center text-3xl font-semibold underline text-[#4AA6E8]">
            About Us
          </h1>
          <p className="text-lg text-justify pt-2">
            आम्ही "शिवभक्त युवक मंडळ" या नावाखाली एकत्र आलेली विविध वयोगटातील
            व्यक्तींचा गट आहोत. आमचे उद्दिष्ट छत्रपती शिवाजी महाराजांच्या
            वारसाचा सन्मान करणे आणि गौरव करणे आहे. त्यासाठी आम्ही तळेवाडा,
            शिरवई, केपे, गोवा येथे त्यांच्या पुतळ्याची स्थापना करणार आहोत. या
            उपक्रमाद्वारे आम्ही आमच्या महान राजाच्या गौरवशाली इतिहासाचे प्रसार
            करणे आणि आमचे निष्ठा व आदर व्यक्त करणे याचा प्रयत्न करत आहोत.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <Image
            src={ourMissionImage}
            alt="Our Mission"
            className="w-full h-auto object-cover hover:scale-125 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-36 py-8 md:py-16 justify-between items-center my-14">
        <div className="section-center relative flex overflow-hidden mx-auto w-full h-[400px] text-center">
          {images.map((image, imageIndex) => {
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
                key={imageIndex}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Slide ${imageIndex}`}
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
            className="prev absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-6 bg-transparent text-white w-10 h-10 grid place-items-center rounded-full hover:bg-primary-500 transition duration-200"
            onClick={() =>
              setIndex(index === 0 ? images.length - 1 : index - 1)
            }
          >
            <FiChevronLeft className="text-white text-2xl" />
          </button>
          <button
            className="next absolute top-1/2 transform -translate-y-1/2 right-4 sm:right-6 bg-transparent text-white w-10 h-10 grid place-items-center rounded-full hover:bg-primary-500 transition duration-200"
            onClick={() => setIndex((index + 1) % images.length)}
          >
            <FiChevronRight className="text-white text-2xl" />
          </button>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
          <h1 className="text-center text-3xl font-semibold underline text-[#4AA6E8]">
            Our Story
          </h1>
          <p className="text-lg text-justify pt-2">
            दहावीच्या वर्गात असताना आम्ही किल्ले बांधण्याचा प्रवास सुरू केला.
            सुरुवातीला लहान आकाराचे किल्ले बांधून आमच्या कौशल्याचा विकास केला.
            दरवर्षी, नवीन कल्पना आणि तंत्रज्ञान वापरून किल्ले बांधत असताना, आमचा
            उत्साह आणि निष्ठा वाढत गेला. आज, आमच्या या गटामध्ये अनेक सदस्य सामील
            झाले आहेत आणि आमचे उद्दिष्ट छत्रपती शिवाजी महाराजांच्या विचारांचा
            प्रसार करणे आणि त्यांच्या गौरवशाली इतिहासाचे संवर्धन करणे आहे. आमची
            प्रेरणा आणि समर्पण आम्हाला या महान कार्यात मार्गदर्शन करतात आणि
            आम्ही भविष्यातही हे कार्य अखंडितपणे सुरू ठेवणार आहोत.
          </p>
        </div>
      </div>
      <div>
        <HelpUs contact="+918412867582" email="shiv@gmail.com" />
      </div>
      <Footer />
    </>
  );
}
