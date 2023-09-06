'use client'
import Box from '@mui/material/Box';
import { useState } from 'react';
import LoaderAnimation from '../../components/LoaderAnimation/LoaderAnimation'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import {  BIO } from '../../../utils/consts';
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
  return(
    <Box>
    <Item sx={{width:'100%'}}>
      <FormUploadWork folder="bio" title='Bio'/>
      </Item>
    </Box> 

    /*     <Box>
          <Item>
            <AdminActiveWorks title={'Bio'} fetchingData={BIO}/>
          </Item>
          </Box> 
          <Item sx={{width:'100%'}}>
      <FormUploadWork folder="bio" title='Bio'/>
      </Item>
      */
    )

}
  
export default Bio