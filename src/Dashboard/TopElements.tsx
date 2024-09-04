import React, { useState } from 'react'
import { CircleDollarSign, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function TopElements() {

     return (
    <div  className='bg-main_color p-3 text-white '>
        <div className='flex justify-between'>
       <Link to={'/dashboard'}>  <CircleDollarSign size={40}/></Link>
         <div className='flex'>
          <div className='w-10 bg-white p-2 rounded-full mr-3 text-black'> <Link to={'/perfil'}>Foto</Link></div>  
            <LogOut size={40}/>
         </div>
        </div>
    </div>
  )
}
