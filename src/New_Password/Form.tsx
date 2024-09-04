import React from 'react'
import { CircleDollarSign } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
export default function Form() {
    type Input = {
        new_password: string
        conf_new_password: string

    }
    const schema = yup.object().shape({
        new_password: yup.string().required("Campo Vazio").length(8),
        conf_new_password: yup.string().required("Campo Vazio").length(8)
    }).required()
    const { register, handleSubmit, formState: { errors } } = useForm<Input>({
        resolver: yupResolver(schema)
    })
    function Onsumbit(data: Input) {

      data.new_password === data.conf_new_password?  console.log(data) : alert("Palavra-passe não são igauis!")
    }
    return (
        <div className='bg-main_color p-10 text-white w-11/12  p-3 xl:w-1/3 lg:w-1/2 md:1/2'>


            <div className='flex flex-col items-center justify-center'>
                <CircleDollarSign size={70} />
                <h1 className='text-2xl font-bold mt-3'>Nova Senha</h1>
                <div className='w-full'>
                    <form className='w-full flex flex-col justify-center items-center mt-4' onSubmit={handleSubmit(Onsumbit)}>
                        <div className='w-11/12'>Degite a nova Senha</div>
                        <input type="text"
                            className='w-11/12 p-3 bg-main_color  outline-none mt-2 ' style={{ border: "1px solid #847D7D" }} placeholder='Nova Senha ' {...register("new_password")} required />
   <p className='w-11/12'>{ errors.new_password ? <div className='w-full '><p className='text-red-600 block w-full '>* O compo deve conter até 8 caracteres</p></div>: ""}</p>
                        <div className='w-11/12'>Confirme a nova senha</div>
                        <input type="text"
                            className='w-11/12 p-3 bg-main_color  outline-none mt-2 ' style={{ border: "1px solid #847D7D" }} placeholder='Confirme aNova Senha'  {...register("conf_new_password")} required />
 <p className='w-11/12'>{ errors.conf_new_password ? <div className='w-full '><p className='text-red-600 block w-full '>* O compo deve conter até 8 caracteres</p></div>: ""}</p>
                        <div className='w-3/5  flex justify-center p-5'><button className='bg-second_color w-full p-3 mt-2'>Confirmar</button></div>

                    </form>
                </div>
            </div>
        </div>
    )
}
