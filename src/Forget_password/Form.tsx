import React from 'react';
import { CircleDollarSign } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

export default function Form() {
  type Input = {
    email: string;
  };

  const schema = yup.object().shape({
    email: yup.string().email().required('Preencha este Campo'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: Input) {
    console.log(data);
  }

  return (
    <div className='bg-main_color p-10 text-white w-11/12 xl:w-1/3 lg:w-1/2 md:w-1/2'>
      <div className='flex flex-col items-center justify-center'>
        <CircleDollarSign size={70} />
        <h1 className='text-2xl font-bold mt-3'>Recuperar Palavra-passe</h1>
        <div className='w-full'>
          <form
            className='w-full flex flex-col justify-center items-center mt-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='w-11/12'>Email</div>
            <input
              type='email'
              className='w-11/12 p-3 bg-main_color outline-none mt-2'
              style={{ border: '1px solid #847D7D' }}
              placeholder='Email'
              {...register('email')}
              required
            />
            <p className='w-11/12 mt-2'>
              {errors.email?.message && (
                <div className='text-red-500'>
                  <p className='w-full'>* {errors.email.message}</p>
                </div>
              )}
            </p>
            <div className='w-4/5 flex justify-center p-3'>
             
              <Link to={'/OTP'} className='w-full'> <button className='bg-second_color w-full p-3 mt-2'>
                Recuperar Senha
              </button> </Link>
            </div>
            <div className='text-second_color p-5'>
              <Link to={'/'}>Já tem uma Conta? Faça o Login </Link>
            </div>
          </form>
        </div>
      </div>

    
    </div>
  );
}
