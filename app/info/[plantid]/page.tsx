'use client';

import { db } from '@/app/compoents/Firebase';
import Header from '@/app/compoents/Header';
import { PlantType, s3bucket } from '@/app/constants';
import { onValue, ref } from 'firebase/database';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Leaf, Info, Droplets, Sun, Bug, Sprout, Calendar, MapPin, Heart, AlertTriangle, BookOpenCheck, Apple } from 'lucide-react';
import SafeImg from '@/app/compoents/Safeimg';

const Page = () => {
  const params = useParams();
  const plantid = Number(params.plantid);

  const [dbData, setdatabaseData] = useState<PlantType>()

  useEffect(() => {

    const getdb = async () => {
      const dbpath = ref(db, "/")

      onValue(dbpath, (snapshot) => {
        setdatabaseData(snapshot.val())

      })

    }
    getdb()



  }, [])

  return (
    <main className="w-full min-h-screen bg-green-50 relative flex flex-col">

      <div className="h-20">
        <Header currentpage="" />
      </div>

      {dbData&&<div className="w-full px-4 lg:px-18 flex flex-col gap-2 ">



        <div className="w-full bg-white rounded-b-xl p-4 shadow-xl flex gap-5 flex-col-reverse lg:flex-row ">

          <div className="w-full   xl:w-1/2 flex flex-col gap-2 xl:items-center justify-center px-4">
            <div className="flex-1 flex-col flex justify-center">

              <h1 className="font-bold text-xl xl:text-3xl">{dbData[plantid]?.feat_commonname}</h1>
              <p className=" xl:text-lg text-green-800 ">{dbData[plantid]?.common_name}</p>
              <p className="italic xl:text-xl text-gray-700">{dbData[plantid]?.species_name}</p>

              <div className="mt-5 flex flex-col gap-2">
                <div className="flex gap-2">
                  <p className="font-semibold">Family: </p>
                  <p>{dbData[plantid]?.family_name}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold">Type: </p>
                  <p>{dbData[plantid]?.habit}</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold">Native: </p>
                  <p>{dbData[plantid]?.native}</p>
                </div>

              </div>

            </div>


            <div className={`${dbData[plantid]?.tips.length>2?"flex":"hidden"}  flex-col-reverse border-2 border-green-100 rounded-xl bg-green-100 w-full p-2`}>
              <div className="p-2  border-l-2 border-green-500">
                <p>{dbData[plantid]?.tips}</p>

              </div>
            </div>

          </div>



          <div className="flex justify-center items-center w-full   xl:w-1/2">
            <img className="objecct-cover h-100 rounded-xl" src={`${s3bucket}/plants/nt${plantid}/ft.jpg`} alt={`image ${plantid}`} />

          </div>

        </div>

        <div className="bg-white p-4 mt-5 ">
          <div className="flex items-center">
             <Leaf className="text-green-600"/>
          <h1 className="font-black text-gray-600 text-md p-2">Growth & Characteristics</h1>
          </div>
          

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Lifespan</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.lifespan}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Growth Speed</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.growth_speed}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Height</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.height_m}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end">Habit</p>
            <p className="font-normal  lg:w-[20vw]  text-start ">{dbData[plantid]?.habit}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end">Variety</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.variety}</p>
          </div>


        </div>



        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <Droplets className="text-green-600"/>
              <h1 className="font-black text-gray-600 text-md p-2">Care Requirements</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Light</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.light_requirement}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Water</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.water_requirements}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Maintenance</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.maintenance}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Pot Requirement</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.pot_requirement}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end">Planting Location</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.planting_location}</p>
          </div>


        </div>

        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <Calendar className="text-green-600"/>
              <h1 className="font-black text-gray-600 text-md p-2">Seasonal Information</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Flowering</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.flowering}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Fruiting</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.fruiting}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Habitat</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.habitat}</p>
          </div>

         


        </div>


        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <Bug className="text-green-600"/>
              <h1 className="font-black text-gray-600 text-md p-2">Ecology & Wildlife</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Pollinators</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.pollinators_visitors}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Known Predators</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.known_predators}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Known Host</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.known_host}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Competitiveness</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.competitiveness}</p>
          </div>         


        </div>


        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <AlertTriangle className="text-green-600"/>
              <h1 className="font-black text-gray-600 text-md p-2">Safety Information</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Allergen</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.allergen}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Kid & Pet Friendly</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.kid_pet_friendly}</p>
          </div>
  


        </div>


        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <Bug className="text-green-600"/>
              <h1 className="font-black text-gray-600 text-md p-2">Pests & Diseases</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Common Pests</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.pests}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Diseases</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.diseases}</p>
          </div>
  


        </div>


        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <Sprout className="text-green-600"/>
              <h1 className="font-black text-gray-600 text-md p-2">Propagation & Planting</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row ">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Propagation Methods</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.propagation}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row ">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Procurement</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.procurement}</p>
          </div>
  


        </div>


        <div className="bg-white p-4 mt-5">
          <div className="flex items-center">
            <Apple className="text-green-600"/>
            
              <h1 className="font-black text-gray-600 text-md p-2">Uses & Benefits</h1>
          </div>
        

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row ">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Primary Uses</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.use}</p>
          </div>

          <div className="flex justify-around gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row">
            <p className="font-semibold lg:w-[20vw]  lg:text-end ">Details</p>
            <p className="font-normal lg:w-[20vw]  text-start ">{dbData[plantid]?.info}</p>
          </div>
  


        </div>



        <div className={`bg-white p-4 mt-5 ${dbData[plantid]?.plants_of_india_link.length>1?"flex flex-col":"hidden"}`}>
          <div className="flex items-center">
            <BookOpenCheck className="text-green-600"/>
           
              <h1 className="font-black text-gray-600 text-md p-2">More info</h1>
          </div>
        

          <div className="flex justify-start gap-5 border-b border-gray-100 py-2 flex-col lg:flex-row ">
            
            <a href={dbData[plantid]?.plants_of_india_link} target="_blank" className="font-normal lg:w-[20vw] text-green-600  text-start ">{dbData[plantid]?.plants_of_india_link}</a>
          </div>        
  


        </div>



        <div className="flex flex-col gap-5 p-4">
          <h1 className="font-black text-gray-600 text-md p-2">Gallery</h1>
          <div className="flex flex-wrap gap-5">
             <SafeImg src={`${s3bucket}/plants/nt${plantid}/ft.jpg`} className="h-100 object-cover "/>
            {Array.from({length:10},(_,i)=>(
              <div key={i}>
                <SafeImg src={`${s3bucket}/plants/nt${plantid}/${i}.jpg`} className="h-100 object-cover "/>
                </div>
            
          ))}
          </div>

          <div className="w-full flex justify-center items-center">
            <p>License: {dbData[plantid]?.license_information}</p>
          </div>

          


        </div>





      </div>}
    </main>
  );
};

export default Page;
