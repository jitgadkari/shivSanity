import { Member } from "@/types/Members";
import Image from "next/image";

interface MemberProps {
  member: Member;
}

export default function MemberDetails({ member }: MemberProps) {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="group bg-[#E6E6E6] rounded-full w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative mx-4 mt-10 overflow-hidden">
        <Image
          src={member.profileImage}
          layout="fill"
          objectFit="cover"
          alt="Member Image"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      </div>
      <div className="text-center pt-4">
        <h1 className="text-[#01494B] font-medium text-lg md:text-xl">{member.memberName}</h1>
        <p className="font-light text-sm md:text-base text-gray-600">{member.identity}</p>
      </div>
    </div>
  );
}
