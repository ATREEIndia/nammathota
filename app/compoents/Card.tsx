import React from 'react'
import { s3bucket } from '../constants'
type Cardprobs={
    id:string;
    image:string,
    title:string,
    subTitle:string
}

const Card = ({image,title,subTitle, id}:Cardprobs) => {

   
  return (
    <a href={`/info/${id}`} target="_blank" className="w-[250px]  flex flex-col gap-2 justify-top  border-2 border-gray-200 rounded-2xl ">
        <img src={image} 
        alt="image"  
        className="object-cover  rounded-2xl h-[350px]"
        onError={(e) => {
           
        e.currentTarget.src = `${s3bucket}/plants/default.jpg`;
    }}
        />
        <div className="flex flex-1 p-2  justify-center items-stretch flex-col  h-fill">
            <h1 className=" font-semibold  w-full  text-md xl:text-lg  h-auto items-center ">{title}</h1>
            <p>{subTitle}</p>
        </div>
        
      
    </a>
  )
}

export default Card
