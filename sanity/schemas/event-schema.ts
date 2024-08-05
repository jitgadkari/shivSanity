const event = {
    name: "event",
    title: "Events",
    type: "document",
    fields: [
        { name: "EventHeading", title: "Heading", type: "string" },
        { name: "subEventHeading", title: "SubHeading", type: "string" },
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
        { name: "text", title: "text", type: "string",},
    ],
};

export default event;
