export type Header = {
    _id: string;
    _createdAt: Date;
    heading: string;
    subHeading: string;
    logoImage: string;
    images: string[];
    url: string;
    content: string | object;
};
