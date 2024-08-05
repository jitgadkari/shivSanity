export type AboutUsType = {
    _id: string;
    _createdAt: Date;
    aboutUsText: string;
    ourStoryText: string;
    aboutUsImage: {
        asset: {
            _ref: string;
            _type: string;
        };
        alt: string;
    };
    qrCodeImage: {
        asset: {
            _ref: string;
            _type: string;
        };
        alt: string;
    };
    images: {
        asset: {
            _ref: string;
            _type: string;
        };
        alt: string;
    }[];
};
