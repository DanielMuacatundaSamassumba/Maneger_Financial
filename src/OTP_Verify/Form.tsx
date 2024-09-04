import React from 'react'
import { CircleDollarSign } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
export default function Form() {
     type Input = {
          otp_Number: number
     }
     const schema = yup.object().shape({
          otp_Number: yup.number().required("Preencha este Campo")
     }).required()
     const { register, handleSubmit, formState: { errors } } = useForm<Input>({
          resolver: yupResolver(schema)
     })
     function Onsumbit(data: Input) {
  const size_otp = data.otp_Number.toString()

      if(size_otp.length === 6){
            console.log(data)
      }else{
        alert("error")
      }
     }
     return (
          <div className='bg-main_color p-10 text-white w-11/12  p-3 xl:w-1/3 lg:w-1/2 md:1/2'>


               <div className='flex flex-col items-center justify-center'>
                    <CircleDollarSign size={70} />
                    <h1 className='text-2xl font-bold mt-3'>Codigo OTP</h1>
                    <div className='w-full'>
                         <form className='w-full flex flex-col justify-center items-center mt-4' onSubmit={handleSubmit(Onsumbit)}>
                              <div className='w-11/12'>Digite OTP Code</div>
                              <input type="number"
                              className='w-11/12 p-3 bg-main_color  outline-none mt-2 ' style={{ border: "1px solid #847D7D" }} placeholder='00-00-00' {...register("otp_Number")}
                               required maxLength={6} />
                              <p className='w-11/12 mt-2'>{errors.otp_Number?.message ? <div className=' text-red-500'><p className='w-full'>* Apenas Número</p></div> : ""}</p>
                              <div className='w-4/5  flex justify-center p-3'><button className='bg-second_color w-full p-3 mt-2'>Confirmar</button></div>
                              <div className='text-second_color p-5'>Ja tem uma Conta? Faça o Login</div>
                         </form>
                    </div>
               </div>
          </div>
     )
}
