import React from 'react'
import { CircleDollarSign } from "lucide-react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom'
import * as yup from "yup"
export default function Form() {
    type inputFieds = {
        email: string
        username: string
        passWord: string
        confPassword: string
    }
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        username: yup.string().required(),
        passWord: yup.string().length(8).required(),
        confPassword: yup.string().length(8).required()
    }).required()
    const { register, handleSubmit, formState: { errors } } = useForm<inputFieds>({
        resolver: yupResolver(schema)
    })
    function Onsubmit(data: inputFieds) {
        data.passWord === data.confPassword ? console.log(data) : alert("Palavra passe não são iguais!")


    }


    return (
        <div className='bg-main_color text-white w-11/12 xl:w-1/2  p-4'>
            <div className='flex flex-col items-center mt-3'>
                <CircleDollarSign size={70} />
                <h1 className="text-2xl font-bold mt-2">Cadastrar Conta</h1>
                <form className=' w-11/12 mt-4' onSubmit={handleSubmit(Onsubmit)}>
                    <div className='11/12'>
                        <div className='w-full'>
                            <div className='xl:flex justify-center mt-2'>

                                <div className='  flex flex-col mt-2 xl:w-1/2'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder='danie@gmail.com' className='p-3 bg-main_color xl: mt-2' style={{ border: "1px solid #847D7D", outline: "none" }} {...register("email")} required maxLength={9} />

                                </div>
                                <div className='  flex flex-col mt-2 xl:w-1/2 xl:ml-5'>
                                    <label htmlFor="">Nome de usuario</label>
                                    <input type="text" placeholder='Nome de usuario' className='p-3 bg-main_color xl: mt-2' style={{ border: "1px solid #847D7D", outline: "none" }} {...register("username")} required />
                                </div>
                            </div>

                            <div className='xl:flex justify-center mt-2 '>
                                <div className=' flex flex-col mt-2 xl:w-1/2'>
                                    <label htmlFor="">Palavra-Passe</label>
                                    <input type="text" placeholder='Palavra-Passe' className='p-3 bg-main_color xl: mt-2' style={{ border: "1px solid #847D7D", outline: "none" }} {...register("passWord")} required />
                                    <p>{errors.passWord ? <div className='w-full '><p className='block w-full text-red-500 mt-2'>* Apenas 8 caracteres neste Campo</p></div> : ""}</p>
                                </div>
                                <div className=' flex flex-col mt-2 xl:w-1/2 xl:ml-5'>
                                    <label htmlFor="">Confirme a sua Palavra-Passe</label>
                                    <input type="text" placeholder='Confirme a sua Palavra-Passe' className='p-3 bg-main_color xl: mt-2' style={{ border: "1px solid #847D7D", outline: "none" }} {...register("confPassword")} required />
                                    <p>{errors.confPassword ? <div className='w-full '><p className=' block w-full text-red-500 mt-2'>* Apenas 8 caracteres neste Campo</p></div> : ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center p-5'> <button className='bg-second_color p-2 mt-2 w-2/3 xl:w-1/3'>Cadastrar</button></div>
                    <div className='w-full flex justify-center text-second_color'><Link to={'/'}>Ja tem uma Conta? Faça o Login</Link></div> 
                </form>
            </div>
        </div>
    )
}
