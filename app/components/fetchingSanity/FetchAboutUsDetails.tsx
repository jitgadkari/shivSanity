import { AboutUsType } from "@/types/AboutUsType";
import AboutUsPage from "../AboutUsPage";
import { getAboutUsDetail } from "@/sanity/sanity-utils";

export default async function FetchAboutUsDetails() {
    // const aboutUsDetail:any = await getAboutUsDetail()
    // console.log(aboutUsDetail)

  return (
    <>
   <AboutUsPage/>
    </>
  );
}
