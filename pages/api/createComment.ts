// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient  from '@sanity/client';

 const config ={
    dataset: "production",
    projectId: '3qr8gjjl',
    apiVersion: "2022-05-20",

     useCdn: process.env.NODE_ENV === "production",
    token: "skXamsvWoVU7xpQbDazdFiYlvx54gijMVrnPUIOcvR49KtRj34iZb5MSToq2aE2s5nKOi29t4pP2I6oGh6EMlOKf4PUpOSYct3fQUR7I5dQYiDhhL7BcTZ4WbAzmY10USuXatb4j448ETHVZcp4EW78X91MZJMB0m345f59zdySXk2wwZOrd"
}; 
const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { _id, name, email, comment } = JSON.parse(req.body);
  
    try {
        await client.create({
            _type: 'comment',
            post: {
                
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Couldn\'t submit comment', err });
    }
    console.log("Comment submitted!");
    return res.status(200).json({ message: "Comment submitted!"})
}
