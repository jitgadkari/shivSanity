import { Member } from "@/types/Members";
import Members from "../Members";
import { getMembers } from "@/sanity/sanity-utils";

export default async function FetchMembers() {
    const members:Member[] = await getMembers();

  return (
    <>
    <Members members={members}/>
    </>
  );
}
