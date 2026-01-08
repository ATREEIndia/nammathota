import{PutObjectCommand, S3Client} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { NextRequest, NextResponse } from "next/server"

type Postprobs={
    fileName:string,
    fileType:string
    foldername:string
}


const s3Client=new S3Client({
    region:process.env.AWS_REGION as string,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY as string,

    },

})



export async function POST(request:NextRequest){
    try {
        const{ fileName,fileType, foldername}:Postprobs= await request.json();

        const folder=`assets/plants/${foldername}`
        const key=`${folder}/${fileName}`

        console.log("key:: "+key)

        const command= new PutObjectCommand({
            Bucket:process.env.AWS_S3_BUCKET_NAME,
            Key:key,  //filepath with name
            ContentType:fileType,  //filetype
        })

        //generating presigned url
        const url=await getSignedUrl(s3Client,command,{expiresIn:60})
        //console.log(url)

        return NextResponse.json({url})


        
    } catch (error) {
        console.log(error)
        const errorMessage=error instanceof Error? error.message :'internal server issue'
        return NextResponse.json({error:errorMessage},{status:500})
    }
 
}


