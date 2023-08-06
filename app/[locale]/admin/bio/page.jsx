'use client'
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState, useEffect } from 'react';
import FormUploadBioImage from '../../components/FormUploadBioImage';
import Loader from '../../components/Loader'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Bio = () => {
  const{status}= useSession()
  const router= useRouter()
  const[form, setForm]= useState({text:''})
  const[send, setSend]=useState(false)
  
  if (status === 'unauthenticated') {
    router.push('/bio'); 
   } 

 if (status === 'loading') {
 return <Loader></Loader>;
}
  const handlerChange=(event)=>{
    if(event.target.value){
      setForm({[event.target.name]: event.target.value, 
      })

    }
  }

  const handlerSubmit=async(event)=>{
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/bio', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Datos guardados exitosamente:', response.data);
      setSend(true)
      setForm({text:''})
    } catch (error) {
      // Capturar y manejar el error en caso de que ocurra
      
      console.error('Error al guardar los datos:', error.message);
      throw new Error(error.message)
    }
  }

if(status==='authenticated'){
  return (
<Box>
<FormUploadBioImage/>
  <form onSubmit={handlerSubmit}>
    <input type='text' name='text' value={form.text} placeholder='ingresa el texto de la Bio' onChange={handlerChange} style={{height:'50ch', width:'50ch'}}></input>
    <button >Send</button>
  </form>
  {send &&  <p> Se envió el texto: {form.text}</p>}
</Box >
);
}
}
  
export default Bio