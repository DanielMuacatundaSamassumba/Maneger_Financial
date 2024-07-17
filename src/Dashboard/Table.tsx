import React from 'react'
import { Trash } from 'lucide-react'
export default function Table() {
  return (
    <div className='w-full flex mt-5 justify-center '>
        <table className='w-11/12 text-center bg-main_color table-auto'>
            <thead className='p-3'  style={{borderBottom:" 1px solid "}}>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Acção</th>
            </thead>
            <tbody>
                <tr>
                    <td>Descrição</td>
                    <td>Valor</td>
                    <td>Tipo</td>
                    <td><Trash/></td>
                </tr>
                <tr>
                    <td>Descrição</td>
                    <td>Valor</td>
                    <td>Tipo</td>
                    <td><Trash/></td>
                </tr>
                <tr>
                    <td>Descrição</td>
                    <td>Valor</td>
                    <td>Tipo</td>
                    <td><Trash/></td>
                </tr>
                <tr>
                    <td>Descrição</td>
                    <td>Valor</td>
                    <td>Tipo</td>
                    <td><Trash/></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
