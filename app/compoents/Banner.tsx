import React from 'react'

type Bannerprobs={
    title:string,
    sub_title:string;
    img?:string,
    btn_txt?:string
    btn_href?:string
}

const Banner = ({title,sub_title,img='/garden.jpg',btn_txt,btn_href}:Bannerprobs) => {
  return (
    <div className="w-full h-[50vh] relative" >
        <div className="w-full h-full absolute bg-green-300 opacity-40 rounded-xl z-5 "></div>

        <div className="absolute text-white top-20 lg:top-50 left-0 w-full flex flex-col gap-2 items-center z-100">
            <h1 className="text-2xl xl:text-5xl font-black uppercase">{title}</h1>
            <p className="font-semibold text-lg xl:text-xl font-sans lg:p-2">{sub_title}</p>
            <a href={btn_href} className={` ${btn_txt?"flex":"hidden"} font-semibold text-lg xl:text-xl font-sans p-4 bg-green-900 rounded-2xl border-2`}>{btn_txt}</a> 
        </div>


        <img src={img}
         alt="Bannner"
         className="w-full h-[50vh] object-cover"/>
        
      
    </div>
  )
}

export default Banner
