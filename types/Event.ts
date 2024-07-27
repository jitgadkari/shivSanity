export type Event = {
    _id: string;
    _createdAt: Date;
    EventHeading: string;
    subEventHeading: string;
    images: string[];
    url: string;
    content: string | object;
};
