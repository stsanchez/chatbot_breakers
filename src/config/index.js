import 'dotenv/config';


export const config = {
    PORT: process.env.PORT || 3008,
    provider: process.env.provider,
    PATH_MEDIA: process.env.PATH_MEDIA,
};
