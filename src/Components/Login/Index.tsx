import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CircleDollarSign } from 'lucide-react'
export default function Index() {
    type Inputs = {
        email: string
        password: string
    }
    type FieldValues = {
        email: string
        password: string
    }
    const schema = yup.
        object()
        .shape({
            email: yup.string().email().required("Compo não pod estar Vazio"),
            password: yup.string().required("Compo não pod estar Vazio"),

        }).required()
    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
        resolver: yupResolver(schema)
    })
    function onSubmit(data: FieldValues) {
        console.log(data)
         alert("Login sucess!")
    }
    return (
        <div className=' bg-main_color w-11/12 h-4/3 xl:w-1/3 md:w-1/2 lg:1/4'>
            <div className='flex flex-col justify-center items-center text-3xl font-bold mt-2'>
                <CircleDollarSign size={70} className='text-white' />
                <h1 className='mt-2 text-white'>Seja-BenVindo!</h1>
            </div>
            <div className='w-full p-8'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex flex-col items-center w-full '>
                        <div className=' w-11/12'> <label htmlFor="" className='text-white'>Número de Telefone</label></div>

                        <input
                            type="email"
                            className='w-11/12 p-3 
                         bg-main_color mt-2 text-white border-solid border-whi
                         te outline-none'
                            placeholder='email'
                            style={{ border: "1px solid #847D7D" }} {...register("email")} required />
                        <p className='w-11/12'>{errors.email?.type ? <div className='w-full  text-red-500'><p className='w-full'>*apenas email</p></div> : ""}</p>
                    </div>

                    <div className='flex flex-col items-center w-full '>
                        <div className=' w-11/12'> <label htmlFor="" className='text-white'>Palavra-passe</label></div>

                        <input type="password"
                            className='w-11/12 p-3 bg-main_color
                          mt-2 text-white border-solid border-white 
                          outline-none' placeholder='palavra-passe
                          ' style={{ border: "1px solid #847D7D" }} {...register("password")} required />

                    </div>
                    <div className='w-full flex justify-center mt-4'><button className='bg-second_color text-white w-11/12 p-3'>Entrar</button></div>
                    <div className='w-11/12 flex justify-end text-second_color mt-2 ml-5'> <p>Esqueceu a sua Palavra-passe ?</p></div>
                    <div className='w-11/12 flex justify-center text-second_color mt-2 '> <p>Esqueceu a sua Palavra-passe ?</p></div>
                </form>

            </div>
        </div>
    )
}
