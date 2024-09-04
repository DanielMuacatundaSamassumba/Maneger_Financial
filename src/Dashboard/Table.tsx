import React from 'react'
import { Trash } from 'lucide-react'
export default function Table() {
  return (
    <div className='w-full flex flex-col mt-5 justify-center items-center  '>
       <div className='w-11/12 flex justify-end'>  <input type="text" className='p-1 bg-main_color text-white border outline-none' placeholder='pesquisar' /></div>
        <table className='w-11/12 text-center bg-main_color table-auto p-4 mt-1'>
            <thead className='h-1/2 '  style={{borderBottom:" 1px solid #2E2E2E"}}>
                <th className='p-3'>Descrição</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Acção</th>
            </thead>
            <tbody className=''>
                <tr className='p-3'>
                    <td className='p-2'>Descrição</td>
                    <td className='p-2'>Valor</td>
                    <td className='p-2'>Tipo</td>
                    <td className=' flex justify-center items-center p-2'><Trash/></td>
                </tr>
                <tr className='p-3'>
                    <td className='p-2'>Descrição</td>
                    <td className='p-2'>Valor</td>
                    <td className='p-2'>Tipo</td>
                    <td className=' flex justify-center items-center p-2'><Trash/></td>
                </tr>
                <tr className='p-3'>
                    <td className='p-2'>Descrição</td>
                    <td className='p-2'>Valor</td>
                    <td className='p-2'>Tipo</td>
                    <td className=' flex justify-center items-center p-2'><Trash/></td>
                </tr>
                <tr className='p-3'>
                    <td className='p-2'>Descrição</td>
                    <td className='p-2'>Valor</td>
                    <td className='p-2'>Tipo</td>
                    <td className=' flex justify-center items-center p-2'><Trash/></td>
                </tr>
                
              
            </tbody>
        </table>
    </div>
  )
}
