'use client'
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState } from 'react';
import FormUploadBioImage from '../../components/FormUploadBioImage/FormUploadBioImage';
import LoaderAnimation from '../../components/LoaderAnimation/LoaderAnimation'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { BASE_URL, BIO } from '../../../utils/consts';
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";
import FormUploadWork from '../../components/FormUploadWork/FormUploadWork'
import { Item } from '../[works]/styleMui';

const Bio = () => {
  const{status}= useSession()
  const router= useRouter()
  const[form, setForm]= useState({text:''})
  const[send, setSend]=useState(false)
  
  if (status === 'unauthenticated') {
    router.push('/bio'); 
   } 

 if (status === 'loading') {
 return <LoaderAnimation></LoaderAnimation>;
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
      const response = await axios.post(`${BASE_URL}${BIO}`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Datos guardados exitosamente:', response.data);
      setSend(true)
      setForm({text:''})
    } catch (error) {
         console.error('Error al guardar los datos:', error.message);
      throw new Error(error.message)
    }
  }

if(status==='authenticated'){
  return(
    <Box>
      <Item>
        <AdminActiveWorks title={'Bio'} fetchingData={BIO}/>
      </Item>
      <Item sx={{width:'100%'}}>
      <FormUploadWork folder="bio" title='Bio'/>
      </Item>
    </Box>
    )
}
}
  
export default Bio