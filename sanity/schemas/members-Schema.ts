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
        { name: "url", title: "URL", type: "url" },
        { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    ],
};

export default member;
