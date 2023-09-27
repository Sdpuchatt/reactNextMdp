'use client'
import {FormRegister} from '@/app/components/Form-register';
import {TableList} from '@/app/components/Table-list';
import {Contacto} from '@/app/components/contacto';
import {useState} from 'react';
export default function Home() {
  const [contac, setContac] = useState([]);
  
  
  const [editContac, setEditContac] = useState(null);
  const handelEdit = () =>{

  }

  return (
    <main className="p-24">
      <div className="grid grid-cols-2 gap-4">
        <div>1. formulario
          <FormRegister listContac = {contac} updateList = {setContac}/>
        </div>
        <div>2. listado
          <TableList listContac = {contac}/>
        </div>
      </div>
    </main>
  )
}
// npm install -g create-react-app
// npx create-next-app my aplication
// npm install -g create-next-app
//npm install @heroicons/react
/**
 * npm i --save @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons 

*/