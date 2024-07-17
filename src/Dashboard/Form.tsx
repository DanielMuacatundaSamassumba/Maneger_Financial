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
        <div className='w-full mt-5 '>
            <form className='w-full flex flex-col items-center justify-center' onSubmit={handleSubmit(OnsuBmit)}>
                <div className='w-11/12'>
                    <div className='flex flex-col'>
                        <label >Descrição</label>
                        <input type="text" placeholder='Descrição' className='p-3 mt-2 bg-main_color' style={{ border: '1px solid #847D7D', outline: "none" }} {...register("description")} required />
                    </div>
                    <div className='flex flex-col'>
                        <label >Valor</label>
                        <input type="number" placeholder='Valor' className='p-3 mt-2 bg-main_color' style={{ border: '1px solid #847D7D', outline: "none" }} {...register("money_value")} required />
                    </div>
                     <div className='mt-2'> 
                      <div className='flex'>   <input type="radio"  className='' {...register("type_spent")} value="Entrada"/> <p className='ml-3 '>Entrada</p></div>
                      <div className='flex'>   <input type="radio"  {...register("type_spent")} value="Saida"/><p className='ml-3' >Saida</p></div>
                     
                     </div>
                </div>
                <div className='w-full flex  justify-center '><button className='bg-second_color w-11/12 p-2 mt-2'>Adicionar</button></div>
            </form>
        </div>
    )
}
