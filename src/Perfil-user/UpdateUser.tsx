import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
export default function UpdateUser({ isopen }) {
    type FormData = {
      
    }
  const schema = yup.object({
    fullName: yup.string(),
    email:  yup.string().email(),
    password: yup.string(),
    passwordConf: yup.string()
  }).required()
    const { register, handleSubmit,  } = useForm<FormData>({
        resolver: yupResolver(schema)
    })
     const elements = "hjdgjyud"
     elements.length
    const onSubmit = (data) =>{ 
         if( data.password.length != 0 &&  data.passwordConf.length != 0  ){
            if( data.password == data.passwordConf){
                console.log(data)
             }else{
               alert(" Senhas diferentesdiferente!")
             }
         }else{
              data.password =""
            console.log(data)
         }
     
        
    }
    if (isopen) {
        return (
            <div className='w-11/12  bg-main_color p-4 rounded-sm lg:w-1/2'>
                <form onSubmit={(handleSubmit(onSubmit))}>
                    <div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="email"  id="" className='p-3 mt-2 outline-none bg-black' placeholder='Email'  {...register("email")}/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Nome Completo</label>
                            <input type="text"  id="" className='p-3 mt-2 outline-none bg-black' placeholder='Nome Completo' {...register("fullName")}/>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col mt-2'>
                            <label htmlFor="">Palavra-passe</label>
                            <input type="text"  id="" className='p-3 mt-2 outline-none bg-black' placeholder='Palavra-passe' {...register("password")} />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <label htmlFor="">Confirmar a sua Palavra-pase</label>
                            <input type="text"  id="" className='p-3 mt-2 outline-none bg-black' placeholder='Confirmar a sua Palavra-pase' {...register("passwordConf")} />
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <button className='w-1/2  p-2 bg-second_color mt-2 lg: w-1/3'>Actualizar</button>
                    </div>
                </form>
            </div>
        )
    }
}
