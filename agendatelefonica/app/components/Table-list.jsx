'use client'
import {Contacto} from '@/app/components/contacto';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

export const TableList = (listContac)=>{
    const arrayString = ['flor','casa','nada'];
    return(
        <>
            <table className="w-full text-gray-500">
                <thead className="bg-gray-200 text-gray-700 uppercase">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Adress</th>
                        <th>Phone</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Contacto.map((elemento, index)=>(
                                <tr key={index} className="bg-white border-b hover:bg-gray-100">
                                    <td className='px-6 py-4'>{elemento.firstName}</td>
                                    <td className='px-6 py-4'>{elemento.lastName}</td>
                                    <td className='px-6 py-4'>{elemento.email}</td>
                                    <td className='px-6 py-4'>{elemento.phone}</td>
                                    <td className='px-6 py-4'>
                                        <button className='rounded-md bg-indigo-500 px-3 py-3 mr-1'><PencilIcon className='mr-1 h-5 w-5 text-white'/></button>
                                        <button className='rounded-md bg-red-500 px-3 py-3 mr-1'><TrashIcon className='mr-1 h-5 w-5 text-white'/></button>
                                    </td>
                                </tr>
                        ))
                    }
                </tbody>    
            </table>    
            
        </>);
}