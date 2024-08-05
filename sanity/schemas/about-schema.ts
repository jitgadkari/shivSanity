const aboutUs = {
    name: "aboutUs",
    title: "AboutUs",
    type: "document",
    fields: [
        { name: "aboutUsText", title: "AboutUs", type: "string" },
        { name: "ourStoryText", title: "OurStory", type: "string" },
        {
            name: "aboutUsImage",
            title: "AboutUsImage",
            type: "image",
            options: { hotspots: true },
            fields: [
                { name: "alt", title: "Alt", type: "string" },
            ],
        },
        {
            name: "qrCodeImage",
            title: "QrCodeImage",
            type: "image",
            fields: [
                { name: "alt", title: "Alt", type: "string" },
            ],
        },
        {
            name: "images",
            title: "OurStoryImages",
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
    ],
};

export default aboutUs;
