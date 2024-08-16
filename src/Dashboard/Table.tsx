import React from 'react'
import { Trash } from 'lucide-react'
export default function Table() {
  return (
    <div className='w-full flex mt-5 justify-center '>
        <table className='w-11/12 text-center bg-main_color table-auto p-4'>
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
