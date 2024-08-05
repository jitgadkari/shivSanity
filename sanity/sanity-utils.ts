import { createClient, groq } from "@/node_modules/next-sanity/dist/index";
import {  AboutUsType } from "@/types/AboutUsType";
import { EventType } from "@/types/EventType";
import { Header } from "@/types/Header";
import { Member } from "@/types/Members";


const client = createClient({
    projectId: "3yuzvwrf",
    dataset: "production",
    apiVersion: "2024-07-16",
    useCdn: false,
});


export async function getMembers(): Promise<Member[]> {
    return client.fetch(
        groq`*[_type == "member"]{
            _id,
            _createdAt,
            memberName,
            identity,
            "slug": slug.current,
            "profileImage": profileimage.asset->url,
        }`
    );
}

export async function getEvents(): Promise<EventType[]> {
    return client.fetch(
        groq`*[_type == "event"]{
            _id,
            _createdAt,
            EventHeading,
            "images": images[].asset->url,
            text
        }`
    );
}
export async function getAboutUsDetail(): Promise<AboutUsType[]> {
    return client.fetch(
        groq`*[_type == "aboutUs"]{
            _id,
            _createdAt,
            aboutUsText,
            ourStoryText,
            "aboutUsImage": {
                "asset": {
                    "_ref": aboutUsImage.asset->_ref,
                    "_type": aboutUsImage.asset->_type
                },
                "alt": aboutUsImage.alt
            },
            "qrCodeImage": {
                "asset": {
                    "_ref": qrCodeImage.asset->_ref,
                    "_type": qrCodeImage.asset->_type
                },
                "alt": qrCodeImage.alt
            },
            "images": images[]{
                "asset": {
                    "_ref": asset->_ref,
                    "_type": asset->_type
                },
                "alt": alt
            }
        }`
    );
}
export async function getHeader(): Promise<Header> {
    return client.fetch(
        groq`*[_type == "header"]{
            _id,
            _createdAt,
            heading,
            subHeading,
            "logoImage": logoimage.asset->url,
            "images": images[].asset->url,
            url,
            content
        }`
    );
}
