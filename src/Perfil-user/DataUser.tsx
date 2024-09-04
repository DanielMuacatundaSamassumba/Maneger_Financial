import React, { useState } from 'react'
import image from './../assets/react.svg'
import { User, Mail } from 'lucide-react'
import UpdateUser from './UpdateUser'
export default function DataUser() {
    const [openupdate, setOpenupdate] = useState(false)
    const [buttonupdate, setButon] = useState("block")
    const [buttonclose, setButonClose] = useState("none")
    const [imagepreview, setImagePreview] = useState(image)
    function handleOpenupdate() {
        setOpenupdate(true)
        setButon("none")
        setButonClose("block")
    }
    function handleclose() {
        setOpenupdate(false)
        setButon("block")
        setButonClose("none")
    }
     function handleiumage (e){
        const imgFile = URL.createObjectURL(e.target.files[0]);
        setImagePreview(imgFile)
     }
    return (

        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='text-white w-11/12 bg-main_color h-2/5 p-3 lg:w-1/2'>
                <div className='flex flex-col justify-center mt-3 items-center '>
                 
                    <label htmlFor="fileInput" className='w-1/2 flex justify-center'>
                    <img src={imagepreview} alt="" className='border-2 rounded-full p-6 w-1/4' />
                    </label>
                    <input type="file" id="fileInput" name="fileInput" className='hidden' onChange={handleiumage}/>
                    <div>
                        <div className='flex mt-3 justify-center items-center text-second_color'>
                            <User size={25}></User> <h1 className='ml-3 text-xl font-medium'>Daniel Muacafuta Samassumba</h1>
                        </div>
                        <div className='flex mt-3 justify-center items-center text-second_color'>
                            <Mail size={20}></Mail> <h1 className='ml-3 text-xl font-bold'>Daniel Muacafuta Samassumba</h1>
                        </div>
                      
                    </div>
                    <div className='flex w-full justify-end lg:w-full'>
                            <button className='text-white bg-second_color p-2 mt-10' onClick={handleOpenupdate} style={{ display: buttonupdate }}> Actualizar Dados</button>
                        </div>
                        <div className='flex w-full justify-end lg:w-full '>
                            <button className='text-white bg-second_color p-2 mt-10' onClick={handleclose} style={{ display: buttonclose }}>  Fechar Actualização</button>
                        </div>
                </div>

            </div>
            <div className='text-white mt-5 w-full flex justify-center'>
                <UpdateUser isopen={openupdate}></UpdateUser>
            </div>

        </div>
    )
}
