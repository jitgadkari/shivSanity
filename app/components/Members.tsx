import Image from "@/node_modules/next/image";
import member1img from "../images/file09.png";

import { Member } from "@/types/Members";
import MemberDetails from "./Member";
interface MemberProps{
  members: Member[]
}
const Members: React.FC<MemberProps> = ({members}) => {
  return (
    <>
      <div className=" mx-auto w-full sm:w-4/5 lg:w-3/5 xl:w-4/5    my-8">
      <h1 className="text-start text-2xl font-semibold underline text-[#4AA6E8]"  id="teamScroll">Team</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center">
         {members.map((member)=>{
          return(
            <MemberDetails member={member} key={member._id}/>
          )
         })}
        </div>
      </div>
    </>
  );
};
export default Members;
