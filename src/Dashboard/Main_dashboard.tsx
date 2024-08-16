import React from 'react'
import TopElements from './TopElements'
import Form from './Form.tsx'
import Table from './Table'
import Resume_Account from './Resume_Account.tsx'
import Hand from './../assets/Hand.png'
import Grafics from './Grafics.tsx'
export default function Main_dashboard() {
    return (
        <div className='bg-background w-full min-h-dvh text-white'>
            <div>
                <TopElements />
                <div className='flex flex-row mt-6'>
                  <div className=' flex ml-4 lg: xl:flex xl:ml-12 '>
                  <h1 className='text-white text-2xl ml-4'>Hi, Daniel Samassumba!</h1>
                  <img src={Hand} alt="" className='w-10' />
                  </div>
                </div>
            </div>

               <div className=' lg: flex flex-row justify-center'>
               <Resume_Account/>
               </div>
      
            <Form/>
            <Table/>
  {/* <div className=' bg-white flex justify-center'>
  <Grafics></Grafics>
  </div> */}

        </div>
    )
}
