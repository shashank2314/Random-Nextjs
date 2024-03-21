
// import { NextResponse } from "next/server";
// import Items from "@/models/items";
// import dbconnect from "@/config/dbconnect";

// const handler = async (req: Request, res: Response) => {

//     try {
//         let items = await Items.find();

//         return NextResponse.json({
//             message: "OK",
//             items,
//         },
//             {
//                 status: 200,
//             }
//         )
//     } catch (err) {
//         return NextResponse.json({
//             message: "Error",
//             err
//         },
//         {
//             status: 500,
//         })
//     }

// }

// export default dbconnect(handler);




// export const GET = async (req: Request, res: Response) => {
//     try {
//         const posts = getPosts();
//         return NextResponse.json({
//             message: "OK",
//             posts
//         },
//             {
//                 status: 200,
//             }
//         )
//     }
//     catch (err) {
//         return NextResponse.json({
//             message: "Error",
//             err
//         },
//             {
//                 status: 500,
//             })
//     }
// }

// export async function POST(req: Request, res: Response) {
//     const { name, items, type, statistic } = await req.json();
//     try {
//         const post = { name, items, type, statistic, date: new Date(), id: Date.now().toString(), lastOpened: 2 };
//         addPost(post);
//         return NextResponse.json({
//             message: "OK", post
//         },
//             {
//                 status: 201,
//             }
//         );
//     }
//     catch (err) {
//         return NextResponse.json({
//             message: "Error",
//             err
//         },
//             {
//                 status: 500,
//             })
//     }
// }