'use client'
import React, { useEffect, useState } from 'react'
import { db } from './Firebase'
import { onValue, ref } from 'firebase/database'
import { PlantType, PlantTypeItems, s3bucket } from '../constants'
import Card from './Card'
import { NextResponse } from 'next/server'


type Sectionprobs = {
    category: string,
    datacat: string,
    bg?: string
}

const SectionCategory = ({ category, datacat, bg = "bg-gray-50" }: Sectionprobs) => {

    const [currentData, SetcurrentData] = useState<PlantType | null>();
    const [filteredData, SetFilteredData] = useState<PlantType>({});

    useEffect(() => {
        const dbDatapath = ref(db, "/");
        onValue(dbDatapath, (snapshot) => {
            const data = snapshot.val();
            SetcurrentData(data)

        })


    }, [category])

    useEffect(() => {

        if (!currentData) {
            return;
        }

        const tempfilterlist = Object.fromEntries(Object.entries(currentData)
            .filter(([key, data]) => {
                const fieldvalue = String(data[datacat as keyof PlantTypeItems] || "");
                return fieldvalue.toLowerCase() === category.toLowerCase();
            }))



        SetFilteredData(tempfilterlist);


        const run = async () => {
            const exists = await checkImageExists(
                'https://atree-communication.s3.amazonaws.com/test/nt27/ft.jpg'
            );

            console.log('Image exists:', exists);
        };

        run();

    }, [currentData])

    useEffect(() => {
        console.log(filteredData)


    }, [filteredData])

    const checkImageExists = (url: string): Promise<boolean> => {
        return new Promise((resolve) => {
            const img = new Image();

            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);

            img.src = url;
        });
    };


    return (
        <div className={`w-full flex flex-wrap gap-5 flex-col mt-10 items-center p-2 xl:pb-8 ${bg}`}>
            <div className="flex flex-col justify-center items-center gap-1 p-4">
                <h1 className="w-full text-center text-xl lg:text-2xl font-bold ">{category} Plants</h1>
                <div className="w-[8vw] bg-orange-300 h-1"></div>
            </div>


            <div className="w-full grid grid-cols-1 md:grid-cols-3  xl:grid-cols-5 gap-5 place-items-center xl:px-10 ">
                {Object.entries(filteredData).slice() // create a copy
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 10)
                    .map(([key, data], index) => (
                        <div key={index} className="flex items-stretch">

                            <Card
                                image={`${s3bucket}/plants/${data.plantid}/ft.jpg`}
                                title={data.feat_commonname}
                                subTitle={data.habit} 
                                id={data.plantid.split("nt")[1]}/>
                        </div>

                    ))}
            </div>

            <a href="/tool" className="p-4 shadow-lg bg-green-500 text-white rounded-2xl lg:text-xl hover:bg-green-900 cursor-pointer">Explore More</a>


        </div>
    )
}

export default SectionCategory
