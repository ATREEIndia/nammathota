'use client'
import React from 'react'
import Header from '../compoents/Header'
import Banner from '../compoents/Banner'
import { style_h1 } from '../constants'

const page = () => {
    const team=[
  {
    "name": "Rajkamal",
    "role": "Principal Contributor",
    "designation": "Fellow, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/Rajkamal.jpg",
    "link":"https://www.atree.org/profile/rajkamal-goswami/"
  },
  {
    "name": "R. Ganesan",
    "role": "Principal Contributor",
    "designation": "Senior Fellow, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/RG.jpeg",
    "link":"https://www.atree.org/profile/ganesan/"
  },
  {
    "name": "Sreekuttan V.N.",
    "role": "Web-App Developer",
    "designation": "Communications Officer, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/sreekuttan.jpg",
    "link": "https://www.atree.org/profile/sree-kuttan/"
  },
  {
    "name": "Praisy Swetha S.",
    "role": "Plant database curation",
    "designation": "",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/praisy.jpg",
    "link":"https://www.linkedin.com/in/praisy-swetha/?originalSubdomain=in"
  },
  {
    "name": "Keerthana R.",
    "role": "Plant database curation",
    "designation": "",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/keerthana.jpg"
  },
  {
    "name": "Shriranjani Iyer",
    "role": "Plant database curation",
    "designation": "",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/shriranjani.jpg"
  },
  {
    "name": "Akshatha V.S.",
    "role": "Plant database curation",
    "designation": "",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/akshatha.jpg"
  }
]



    function handleclick(person: { name: string; role: string; designation: string; image: string; link?: string }) {
        if(person.link){
          window.open(person.link, '_blank');
        }
        
    }

  return (
    <div>
        <Header currentpage="Team"/>
        <Banner title="Team" sub_title=""/>
        <h1 className={`${style_h1} w-full text-center p-4`}>Meet Our Team</h1>
        
        <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center  py-5">
            {team.map((person,index)=>(
                <div onClick={()=>{handleclick(person)}}  key={index} className="py-4 cursor-pointer">
                     <img src={person.image} alt="" className="w-50 h-50 rounded-full"
                    onError={(e)=>{e.currentTarget.src="https://namma-thota.s3.amazonaws.com/assets/team/placeholder.png"}} />
                    <h1 className="w-full text-center font-bold text-xl pt-2">{person.name}</h1>

                    <p className="w-full text-center">( {person.role} )</p>
                    <p className="w-full text-center font-semibold">{person.designation}</p>
                    
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default page
