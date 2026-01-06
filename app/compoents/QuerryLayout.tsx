'use client'
import React, { useEffect, useState } from 'react'
import { OptionType, QuerryItemType, s3bucket, style_h1 } from '../constants'



type Querryprobs = {
    Querrydata: QuerryItemType;
    handleQuerryselction: (id: number, OnNext: boolean, onPrev: boolean) => void;

    activeSelection: number[];
    isNext: boolean;
    isPrev: boolean;
    resultCount:number


}

const QuerryLayout = ({ Querrydata, handleQuerryselction, activeSelection, isNext, isPrev, resultCount }: Querryprobs) => {

    const [selections, SetSelections] = useState<number[]>([])

    const[userchoice, Setuserchoice]=useState<number>(activeSelection[0])

    const [next_btn_visibilty, SetNextbtnVisibility]=useState("flex")

    console.log("Querrydata:: " + Querrydata)
    console.log("activeSelection:: " + activeSelection)

    useEffect(() => {
        SetSelections(activeSelection ? activeSelection : [])
         console.log("resultCount:: "+resultCount)

    }, [activeSelection])

    useEffect(()=>{
        const getNextbuttonvisibility=()=>{

       
        if(isNext && resultCount>10 && selections.length>0){        
                return "flex"           
           }

        else{ return "hidden"}
       
    }
    SetNextbtnVisibility( getNextbuttonvisibility())

    },[resultCount,activeSelection, selections] )

    



    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[70vw] bg-green-50 border-green-300 border-2 p-4  flex flex-col lg:flex-row gap-5 rounded-xl">


                <div className="lg:w-1/2 w-full  flex justify-center">
                      <img className=" w-full object-cover" src={`${s3bucket}/querry/${Querrydata.img}`} alt="q" />
                </div>
              

                <div className="w-full flex flex-col lg:max-w-1/2 ">

                    <div className="w-full flex flex-col">
                        <h1 className={`text-xl font-black text-gray-700`}>{Querrydata.Title}</h1>


                        {Object.entries(Querrydata.Options).map(([id, option]) => (
                            <div onClick={() => { Setuserchoice(Number(id)); handleQuerryselction(Number(id), false, false) }} key={id} className={`w-full p-2 px-4  border-2 flex gap-x-2 border-green-200 mt-5 rounded-xl text-gray-800 cursor-pointer shadow-xl ${selections.includes(Number(id)) ? "bg-green-600 text-white" : "bg-white"}`}>

                                <img src="/plant_icon.png" alt="" className="h-10 "/>
   

                                <div className="flex  flex-col">
                                    <h1 className="font-bold">{option.text}</h1>
                                    <p>{option.desc}</p>
                                </div>


                            </div>
                        ))}

                    </div>

                    <div className={` w-full p-4 mt-4 flex  flex-row-reverse gap-10`}>
                        <a className={`${next_btn_visibilty}  p-4 bg-white border-2 border-green-400 cursor-pointer rounded-xl font-bold`} onClick={() => { handleQuerryselction(userchoice, true, false) }}>Next</a>

                        <a className={` ${isPrev ? "flex" : "hidden"} p-4 bg-white border-2 border-green-400 cursor-pointer rounded-xl font-bold`} onClick={() => { handleQuerryselction(0, false, true) }}>Previous</a>

                    </div>
                </div>


            </div>
        </div>

    )
}

export default QuerryLayout
