import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
export default function Form() {
    type InpuFieds = {
        description: string
        money_value: number
        type_spent: string
    }
    const Schema = yup.object().shape({
        description: yup.string(),
        money_value: yup.number(),
        type_spent: yup.string()
    })
    const { register, handleSubmit } = useForm<InpuFieds>({})
    function OnsuBmit(data: InpuFieds) {
        console.log(data)
    }
    return (
        <div className=' mt-5 w-full flex justify-center  '>
            <form className='w-11/12 flex flex-col items-center justify-center  bg-main_color p-3 xl:flex-row justify-between ' onSubmit={handleSubmit(OnsuBmit)}>
                <div className='w-11/12 xl:flex w-11/12  justify-evenly itema-center'>
                    <div className='flex flex-col w-11/12 xl: w-1/2'>
                        <label >Descrição</label>
                        <input type="text" placeholder='Descrição' className='p-3 mt-2 bg-main_color' style={{ border: '1px solid #847D7D', outline: "none" }} {...register("description")} required />
                    </div>
                    <div className='flex flex-col w-11/12 xl: w-1/2  xl:ml-2'>
                        <label >Valor</label>
                        <input type="number" placeholder='Valor' className='p-3 mt-2 bg-main_color   xl:w-11/12' style={{ border: '1px solid #847D7D', outline: "none" }} {...register("money_value")} required  clas/>
                    </div>
                     <div className=' flex flex-row mt-2 xl:flex xl:justify-center xl:items-center xl:ml-2'> 
                      <div className='flex  xl:flex justify-center '>   <input type="radio"  className='xl:w-10' {...register("type_spent")} value="Entrada"/> <p className='ml-3 '>Entrada</p></div>
                      <div className='flex xl:flex justify-center ml-2'>   <input type="radio"  {...register("type_spent")} value="Saida"/><p className='ml-3' >Saida</p></div>
                     
                     </div>
                </div>
                <div className='w-full flex  justify-center '><button className='bg-second_color w-11/12 p-2 mt-2 xl:w-1/4'>Adicionar</button></div>
            </form>
        </div>
    )
}
