import React from 'react'
import DollarCoin from './../assets/Dollar Coin.png'
import GoBack1 from './../assets/Go Back (1).png'
import GoBack from './../assets/Go Back.png'
export default function() {
    return (
<div className='flex flex-col justify-between items-center h-2/3 mt-3    md:flex xl:flex-row justify-center w-11/12 '>
            <div className='text-white bg-main_color flex flex-col justify-center items-center w-11/12 p-3 xl:w-1/5'>
             <div className='text-white flex justify-around  w-11/12'>    <h1 className='text-2xl'>Entrada</h1> <img src={GoBack} alt=""  className='w-12'/></div>
             <h1 className='text-2xl mt-2'>$ 150.000</h1>
            </div>
            <div className='text-white bg-main_color flex flex-col justify-center items-center w-11/12 p-3 mt-3 xl:w-1/5'>
              
                <div className='text-white flex justify-around  w-11/12'>    <h1 className='text-2xl'>Saida</h1>   <img src={GoBack1} alt="" className='w-12'/></div>
                <h1 className='text-2xl mt-2'>$ 10.000</h1>
            </div>
            <div className='text-white bg-main_color flex flex-col justify-center items-center w-11/12 p-3 mt-3 xl:w-1/5'>
              
                <div className='text-white flex justify-around  w-11/12'>    <h1 className='text-2xl'>Total</h1>   <img src={DollarCoin} alt="" className='w-12'/></div>
                <h1 className='text-2xl mt-2'>$ 160.000</h1>
            </div>
        </div>
    )
}
