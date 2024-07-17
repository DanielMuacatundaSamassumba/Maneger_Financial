import React from 'react'
import TopElements from './TopElements'
import Form from './Form.tsx'
import Table from './Table'
import Resume_Account from './Resume_Account.tsx'
import Hand from './../assets/Hand.png'
export default function Main_dashboard() {
    return (
        <div className='bg-background w-full h-full text-white'>
            <div>
                <TopElements />
                <div className='flex flex-row mt-6'>
                    <h1 className='text-white text-2xl ml-4'>Hi, Daniel Samassumba!</h1>
                    <img src={Hand} alt="" className='w-10' />
                </div>
            </div>
            <Resume_Account/>
            <Form/>
             <Table/>
        </div>
    )
}
