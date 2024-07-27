export type Member = {
    _id: string;
    _createdAt: Date;
    memberName: string;
    identity: string;
    profileImage: string;
    url: string;
    content: string | object;
};
