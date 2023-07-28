'use client'
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState } from 'react';
import FormUploadWork from '../../components/FormUploadWork'


const Biography = () => {
  const[form, setForm]= useState({text:''})
  const[send, setSend]=useState(false)
  

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

      return (
        <Box>
           <form onSubmit={handlerSubmit}>
            <input type='text' name='text' value={form.text} placeholder='ingresa el texto de la Bio' onChange={handlerChange} style={{height:'50ch', width:'50ch'}}></input>
            <button >Send</button>
          </form>
          {send && 
          <p> Se envió el texto: {form.text}</p>
        
        }
        </Box >
      );
    }

  
export default Biography