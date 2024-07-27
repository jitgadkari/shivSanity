import { createClient, groq } from "@/node_modules/next-sanity/dist/index";
import { Event } from "@/types/Event";
import { Header } from "@/types/Header";
import { Member } from "@/types/Members";
import { Project } from "@/types/Project";

const client = createClient({
    projectId: "3yuzvwrf",
    dataset: "production",
    apiVersion: "2024-07-16",
    useCdn: false,
});

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    );
}

export async function getMembers(): Promise<Member[]> {
    return client.fetch(
        groq`*[_type == "member"]{
            _id,
            _createdAt,
            memberName,
            identity,
            "slug": slug.current,
            "profileImage": profileimage.asset->url,
            url,
            content
        }`
    );
}

export async function getEvents(): Promise<Event[]> {
    return client.fetch(
        groq`*[_type == "event"]{
            _id,
            _createdAt,
            EventHeading,
            subEventHeading,
            "images": images[].asset->url,
            url,
            content
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
