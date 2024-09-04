import React from 'react'
import TopContent from './TopContent'
import DataUser from './DataUser'
export default function perfil() {
    return (
        <div>
            <div className=' w-screen min-h-dvh bg-background overflow-x-hidden'>
                <TopContent></TopContent>
                <div className='w-full h-full flex justify-center mt-4'>
                <DataUser></DataUser>
                </div>
            </div>
        </div>
    )
}
