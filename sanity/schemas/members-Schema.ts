const member = {
    name: "member",
    title: "Member",
    type: "document",
    fields: [
        { name: "memberName", title: "Name", type: "string" },
        { name: "identity", title: "Identity", type: "string" },
        {
            name: "profileimage",
            title: "ProfileImage",
            type: "image",
            options: { hotspots: true },
            fields: [
                { name: "alt", title: "Alt", type: "string" },
            ],
        },
    ],
};

export default member;
