'use client'
import Box from "@mui/material/Box";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '../../components/Loader/Loader';
import {  Item } from "./styleMui";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";
import FormUploadWork from "../../components/FormUploadWork/FormUploadWork";

const Works = () => {  
    const router = useRouter();
    const { status } = useSession()
        
    if (status === 'unauthenticated') {
         router.push('/works'); 
      } 
      
      if (status === 'loading') {
        return <Loader></Loader>;
      }
if(status==='authenticated'){
  return (
<Box>
  <Item>
    <AdminActiveWorks title={'Obras'} fetchingData={'works'}/>
  </Item>
  <Item sx={{width:'100%'}}>
  <FormUploadWork/>
  </Item>
</Box>
);

  }


  
};

export default Works;
