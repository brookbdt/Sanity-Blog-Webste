import {
    createCurrentUserHook,
    createClient,
} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
// import  sanityClient  from "@sanity/client";


export const config ={
    dataset: "production",
    projectId: '3qr8gjjl',
    apiVersion: "2022-05-20",

    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
export const urlFor = (source) => imageUrlBuilder(config).image(source);  

export const useCurrentUser = createCurrentUserHook(config);

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);