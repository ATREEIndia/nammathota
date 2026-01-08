'use client'
import React, { useEffect, useState } from 'react'
import Header from '../compoents/Header'
import { PlantType, s3bucket } from '../constants'
import { onValue, ref } from 'firebase/database'
import { db, auth } from '../compoents/Firebase'
import Card from '../compoents/Card'
import { Sprout } from 'lucide-react'
import Dataform from '../compoents/Dataform'
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Upload2S3 from '../compoents/Upload2S3'


const page = () => {

  const [dbData, setDbdata] = useState<PlantType>()

  const [isdataform, Setisdataform] = useState(false)

  const [isloggedin, Setisloggedin] = useState(false)

  const [plantid_form, Setplantid_form] = useState<number>();

  const [plantid_form_backup, Setplantid_form_backup] = useState<number>();

  const [email, Setemail] = useState("sree@gmail.com")
  const [password, Setpassword] = useState("Sree@1234")

  const [Loginerror, SetLoginerror] = useState("Login with registred user account. Contact super admin if not created")

  const cancelForm = () => {
    Setisdataform(false)
  }

  const handlecardclick = (id: string) => {

    Setplantid_form(Number(id.split("nt")[1]))

    Setisdataform(true)


  }

  useEffect(() => {
    const dbPath = ref(db, "/")
    onValue(dbPath, (snapshot) => {
      setDbdata(snapshot.val())


    })

  }, [])

  useEffect(() => {
    if (!dbData) {
      return;
    }
    const dblength = Object.keys(dbData).length;
    Setplantid_form(dblength + 1)
    Setplantid_form_backup(dblength + 1)

  }, [dbData])



  const sigin = async () => {
    if(!email || !password){
      SetLoginerror('Enter email and password')

      return;
    }
    try {
      const login = await signInWithEmailAndPassword(auth, `${email}@nammathota.com`, password);
      if (login.user) {
        SetLoginerror('Logging in as admin.')
        Setisloggedin(true)

      }

    } catch (error) {
      
      SetLoginerror('Wrong email / Password')

    }

  }

  const addNew=()=>{
     Setplantid_form(plantid_form_backup)


    Setisdataform(true)

  }




  return (
    <div>
      <div className="h-20 ">
        <Header currentpage="" />
      </div>



      



      {!isloggedin &&
        <div className="w-full h-full min-h-screen flex items-center justify-center bg-gray-100 ">

          <div className="flex justify-start  items-stretch border-2 rounded-xl border-gray-200 shadow-xl ">

            <div className="h-[70vh] w-1/2" >
              <img src="/login.jpg" alt="" className=" h-[70vh] object-cover " />

            </div>



            <div className=" bg-white rounded-2xl w-1/2 p-2 flex px-4 flex-col gap-5">


              <h1 className="text-xl font-black p-4">Login</h1>
              <div className="flex border-gray-100 p-2 border-2 rounded-lg bg-gray-50 items-center gap-2">
                <MdOutlineMailOutline size={20} />
                <input onChange={(e)=>{Setemail(e.target.value)}} className="w-full outline-0" type="text" placeholder='Enter Email' />
              </div>

              <div className="flex border-gray-100 p-2 border-2 rounded-lg bg-gray-50 items-center gap-2">
                <RiLockPasswordLine size={20} />
                <input onChange={(e)=>{Setpassword(e.target.value)}} className="w-full outline-0" type="password" placeholder='Enter Password' />
              </div>

              <div onClick={sigin} className="p-2 px-4 bg-green-700 text-white font-semibold rounded-xl text-center cursor-pointer hover:bg-green-800 hover:translate-y-0.5">Login</div>

              <div className="h-full text-sm text-gray-700 p-4 items-center">{Loginerror}</div>


            </div>
          </div>


        </div>}



      {dbData && !isdataform && isloggedin &&
        <div className="realtive">
          <h1 className="text-xl font-bold  text-center w-full p-2 mt-10" >You are logged in as admin</h1>

          <div className="w-full p-4 flex items-center justify-center ">
            <div className="bg-green-600 rounded-xl p-4 flex items-center text-white shadow-xl cursor-pointer hover:bg-green-800">
              <Sprout className="text-white" />
              <p onClick={() => { addNew() }}>Add New</p>
            </div>
          </div>


          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 px-8 place-items-center">
            {Object.entries(dbData).map(([key, data]) => (
              <div className="flex flex-col gap-2 relative" key={key}>
                <Card title={data.feat_commonname} subTitle={data.plantid} image={`${s3bucket}/plants/${data.plantid}/ft.jpg`} id={data.plantid.split("nt")[1]} />

                <div onClick={() => { handlecardclick(data.plantid) }} className="absolute top-1 right-5 hover:bg-white rounded-lg cursor-pointer hover:shadow-xl">
                  <BiSolidMessageSquareEdit size={30} color="#004e00" className="" />
                </div>
              </div>
            ))}


          </div>



        </div>
      }
      {dbData && isdataform &&
        <Dataform plantid={plantid_form ? plantid_form : 0} onCancel={cancelForm} />}

    </div>
  )
}

export default page
