'use client'
import React from 'react'
import Header from '../compoents/Header'
import Banner from '../compoents/Banner'
import { style_h1 } from '../constants'

const page = () => {
    const team=[
  {
    "name": "Rajkamal Goswami",
    "role": "Principal investigatior",
    "designation": "Fellow, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/Rajkamal.jpg",
    "link":"https://www.atree.org/profile/rajkamal-goswami/"
  },
  {
    "name": "Rengaian Ganesan",
    "role": "Selected the 280 plant species.",
    "designation": "Senior Fellow, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/RG.jpeg",
    "link":"https://www.atree.org/profile/ganesan/"
  },
  {
    "name": "Sreekuttan V.N.",
    "role": "Data Base and Web-App Developer",
    "designation": "Communications Officer, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/sreekuttan.jpg",
    "link": "https://www.atree.org/profile/sree-kuttan/"
  },
  {
    "name": "Praisy Swetha S.",
    "role": "Coordinated app development and outreach",
    "designation": "",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/praisy.jpg",
    "link":"https://www.linkedin.com/in/praisy-swetha/?originalSubdomain=in"
  },
  {
    "name": "Keerthana R.",
    "role": "Managed cataloguing of plant images",
    "designation": "Research Associate, ATREE",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/keerthana.jpg"
  },
  {
    "name": "Shriranjani Iyer",
    "role": "Plant database curation",
    "designation": "",
    "image": "https://namma-thota.s3.amazonaws.com/assets/team/shriranjani.jpg",
    "link":"https://www.linkedin.com/in/shriranjani-l-iyer/"
  },
  {
    "name": "Akshatha V.S.",
    "role": "Managed field data collection",
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
        
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center  py-5">
            {team.map((person,index)=>(
                <div onClick={()=>{handleclick(person)}}  key={index} className="py-4 cursor-pointer flex flex-col items-center">
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
