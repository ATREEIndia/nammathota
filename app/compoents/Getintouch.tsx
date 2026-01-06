import React from 'react'
import { style_h1 } from '../constants'

const Getintouch = () => {
    return (
        <div className="flex flex-col gap-5 px-8">
            <h1 className={`${style_h1} w-full text-center`}>Get in Touch</h1>
            <div className="flex flex-col gap-5 lg:flex-row ">
                <iframe className='w-full lg:max-w-[50vw]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.549973721307!2d77.61764127507799!3d13.064292487259658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1795e779aac3%3A0x50b0f9a6dfcb00cc!2sAshoka%20Trust%20For%20Research%20In%20Ecology%20And%20The%20Environment!5e0!3m2!1sen!2sin!4v1744302665887!5m2!1sen!2sin" height="450" loading="lazy" ></iframe>

                <div className='flex flex-col justify-center w-full lg:max-w-[50vw] lg:px-8'>
                    <span><strong>Ashoka Trust For Research In Ecology And The Environment
                        Royal Enclave</strong>, <br></br>Srirampura, Jakkur, Bengaluru, Karnataka 560064
                        <br></br>Website: <a className="text-green-500" href="https://www.atree.org" target="_blank">www.atree.org</a></span>
                </div>

            </div>

        </div>
    )
}

export default Getintouch
