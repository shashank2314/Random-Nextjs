import { deletePost, getById, updatePost } from "../../../lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res:Response) =>{
   const id = req.url.split("handleid/")[1];
    try{
        const post = getById(id);
        if(!post){
            return NextResponse.json({
                message:"Error",
            },
            {
                status:404,
            })
        }
        return NextResponse.json({
            message:"OK",
            post
        },
        {
            status:200,
        }
        )
    }
    catch(err){
        return NextResponse.json({
            message:"Error",
            err
        },
        {
            status:500,
        })
    }
}
export const PUT = async (req: Request, res:Response) =>{
   const id = req.url.split("handleid/")[1];
   const {name , items ,type, statistic} = await req.json();
    try{
        updatePost(id,name , items ,type, statistic );
       
        return NextResponse.json({
            message:"OK",
        },
        {
            status:200,
        }
        )
    }
    catch(err){
        return NextResponse.json({
            message:"Error",
            err
        },
        {
            status:500,
        })
    }
}

export async function DELETE(req: Request, res:Response){
    const id = await req.json();
    try{
        deletePost(id);
        return NextResponse.json({
            message:"OK",
        },
        {
            status:200,
        }
        )
    }
    catch(err){
        return NextResponse.json({
            message:"Error",
            err
        },
        {
            status:500,
        })
    }
}

function deleteById(id: string) {
    throw new Error("Function not implemented.");
}
