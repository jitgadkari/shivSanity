const header = {
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "subHeading", title: "SubHeading", type: "string" },
        {
            name: "logoimage",
            title: "Image",
            type: "image",
            options: { hotspots: true },
            fields: [
                { name: "alt", title: "Alt", type: "string" },
            ],
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: { hotspots: true },
                    fields: [
                        { name: "alt", title: "Alt", type: "string" },
                    ],
                },
            ],
        },
        { name: "url", title: "URL", type: "url" },
        { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    ],
};

export default header;
