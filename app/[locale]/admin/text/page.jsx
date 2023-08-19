'use client'
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { Box, Grid } from "@mui/material";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";
import { Item } from "../[works]/styleMui";
import FormUploadWork from '../../components/FormUploadWork/FormUploadWork'

const Text = () => { 
    const {status}= useSession()
    const router= useRouter()

    if (status === 'unauthenticated') {
      router.push('/text'); 
     } 
 
   if (status === 'loading') {
   return <Loader></Loader>;
 }

    return (
<Box>
  <Item>
    <AdminActiveWorks title={'Text'} fetchingData={'text'}/>
  </Item>
  <Item sx={{width:'100%'}}>
  <FormUploadWork folder="text" title='Text'/>
  </Item>
</Box>
    );
  };
  
export default Text