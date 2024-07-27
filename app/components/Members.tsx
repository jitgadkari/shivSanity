import Image from "@/node_modules/next/image";
import member1img from "../images/file09.png";
const Members: React.FC = () => {
  return (
    <>
      <div className="mx-8 my-8">
        <h1 className="text-start text-2xl font-semibold py-4">Our Team</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center">
          {Array(9).fill(null).map((_, index) => ( // Using a loop for brevity
            <div key={index} className="flex flex-col items-center">
              <div className="group bg-[#E6E6E6] rounded-full w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative mx-4 mt-20">
                <Image
                  src={member1img}
                  alt="Member Image"
                  className="absolute bottom-0 left-0 w-full rounded-b-full object-cover"
                />
              </div>
              <div className="text-center pt-4">
                <h1 className="text-[#01494B] font-medium">Akash Naik</h1>
                <p className="font-thin">President</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Members;
