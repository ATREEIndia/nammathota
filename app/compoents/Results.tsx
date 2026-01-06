'use client'
import React, { useEffect } from 'react'
import { PlantType, PlantTypeItems, s3bucket } from '../constants'
import Card from './Card'

type Resultprobs={
    filteredList:PlantType
}


const Results = ({filteredList}:Resultprobs) => {

    useEffect(()=>{

        console.log('filteredList:: '+filteredList)
        
    })


  return (
    <div className="w-full flex flex-col items-center gap-2">
        <div className="text-xl font-bold p-4"> Suggesing {Object.keys(filteredList).length} plants as per your choices</div>

    

        <div className="w-full grid grid-cols-1 md:grid-cols-3  xl:grid-cols-5 gap-5 place-items-center xl:px-10 ">        
        {Object.entries(filteredList).map(([key, data])=>(
            <div key={key}>
                <Card image={`${s3bucket}/plants/${data.plantid}/ft.jpg`} title={data.feat_commonname} subTitle={data.habit} id={data.plantid.split("nt")[1]}/>

            </div>
        ))}
        


      
    </div>
    </div>
      
  )
}

export default Results
