'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


type headerprobs = {
    currentpage: string;
}

const Header = ({ currentpage }: headerprobs) => {

    const Navitems = [
        {
            label: "Home",
            href: "/",

        },
        {
            label: "Tool",
            href: "/tool"

        },
        {
            label: "Team",
            href: "/team"
        }
    ]

    const [isopen, setisopen] = useState(true);
    const [navbg, setnavbg] = useState(true);

    function handlemenu() {
        setisopen(!isopen);

    }




    return (
        <div className="w-full relative">

            <div className={`fixed z-1000 w-full h-20  justify-between items-center px-1.5 flex lg:pl-20 shadow-xl ${navbg ? "bg-green-600" : ""}`}>

                <div className='flex items-center'>
                    <img src="/ATREE_logo.png"
                        alt='logo'
                        className="h-20" />
                    <div className='hidden sm:flex text-white flex-col'>
                        <h1>Ashoka Trust for Research</h1>
                        <h1>In Ecology and the Environment</h1>
                    </div>

                </div>
                <div className=' gap-20 justify-between mr-[20%] hidden lg:flex'>
                    {Navitems.map((item, index) => {
                        return <Link key={index} href={item.href}>
                            <p className={`${currentpage === item.label ? "border-b-amber-300 border-b-2" : "flex"} text-white text-lg hover:border-b-yellow-500 hover:border-b-2`}>{item.label}</p>
                        </Link>
                    })}
                </div>


                <div className='lg:hidden mx-10' onClick={handlemenu}>
                    <HiMenuAlt3 color='white' size={30} />
                    <div>
                        {/* overlay */}


                        {/* <NavbarMobile customClass={` `} clickfunction={handlemenu} /> */}

                        <div className={`lg:hidden mt-20 pt-5 flex flex-col items-center gap-5 absolute top-0 left-0 w-[70%] sm:w-[50%] bg-green-500 h-[70vh] z-1000 transition transform -translate-x-100 duration-500 ease-in-out ${isopen ? "-translate-x-150" : "translate-x-0"}`}>
                            <div className='flex w-full justify-end px-10' onClick={handlemenu}>
                                <IoMdClose size={30} color='white' />

                            </div>
                            <div className=' flex flex-col gap-5 pt-10'>
                                {Navitems.map((item, index) => {
                                    return <Link key={index} href={item.href}>
                                        <p className='text-white uppercase text-center '>{item.label}</p></Link>
                                })}
                            </div>

                        </div>




                    </div>

                </div>


                <div className={`lg:hidden w-screen h-[20500px] absolute bg-gray-500 opacity-20 transform transition-transform  duration-400 ease-in-out z-90 
                    ${isopen ? "translate-x-full" : "translate-x-0"}`} onClick={handlemenu}></div>
            </div>





        </div>
    )
}




export default Header
