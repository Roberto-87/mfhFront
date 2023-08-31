'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoaderAnimation from "../../components/LoaderAnimation/LoaderAnimation";
import { Box, Grid } from "@mui/material";
import { Item } from "../[works]/styleMui";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";
import FormUploadWork from "../../components/FormUploadWork/FormUploadWork"
import { CONTACT } from "../../../utils/consts";

const Contact = () => {
const {status}= useSession()
const router= useRouter()

if (status === 'unauthenticated') {
  router.push('/contact'); 
 } 

if (status === 'loading') {
return <LoaderAnimation></LoaderAnimation>;
}

if(status==='authenticated'){
  return (
<Box>
  <Item>
    <AdminActiveWorks title={'vías de contacto'} fetchingData={CONTACT}/>
  </Item>
  <Item sx={{width:'100%'}}>
  <FormUploadWork folder = {'Contact'} title='vía de contacto'/>
  </Item>
</Box>
);

  }

  };
  
export default Contact
  