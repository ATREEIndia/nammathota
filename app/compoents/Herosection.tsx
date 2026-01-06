import React from 'react'
import Banner from './Banner'

const Herosection = () => {
  return (
    <div>
        
        <Banner 
        title="Namma Thota" 
        sub_title="Build your Eco-friendy Garden"
        btn_href="/tool"
        btn_txt="Explore the tool" />

        <div className="relative z-10   w-full  flex bg-green-200 pb-10 rounded-b-2xl shadow-xl ">
          
            <div className="  top-0 left-0 w-full p-2 px-4 flex flex-col md:flex-row justify-center gap-5 -mt-10 items-stretch">
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2 md:max-w-1/3 ">
                <h1 className="text-lg font-semibold">About the tool</h1>
                <p>Namma Thota is a smart tool to help urban gardeners develop viable garden spaces. It tells you if a plant is native to India, its invasive status, plant features, pests, pollinators and much more. It also offers useful tips like ideal locations, light and water needs and plant maintenance. High-quality images will help you visualise and select plants for creating green spaces in Bengaluru.</p>
                
            </div>
            <div className="bg-white p-4 rounded-lg flex flex-col gap-2 md:max-w-1/3 ">
                <h1 className="text-lg font-semibold">Why this tool?</h1>
                <p>Bengaluru’s green spaces are fast shrinking, making sustainable plant choices more crucial than ever. Yet, we lack a simple, science-backed tool that can suggest appropriate plants based not only on climate and nativity but also on one’s lifestyle. Whether you're a frequent traveller needing low-maintenance greenery, a landscape designer or a professional seeking biodiversity-rich plants, Namma Thota can empower you to effortlessly create a thriving, eco-friendly garden.</p>
                
            </div>
            
 
            
        </div>
        </div>

        
      
    </div>
  )
}

export default Herosection
