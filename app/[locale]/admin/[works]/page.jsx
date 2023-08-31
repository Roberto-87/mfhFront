'use client'
import Box from "@mui/material/Box";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoaderAnimation from '../../components/LoaderAnimation/LoaderAnimation';
import {  Item } from "./styleMui";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";
import FormUploadWork from "../../components/FormUploadWork/FormUploadWork";
import { WORKS } from "../../../utils/consts";

const Works = () => {  
    const router = useRouter();
    const { status } = useSession()
        
    if (status === 'unauthenticated') {
         router.push('/works'); 
      } 
    if (status === 'loading') {
        return <LoaderAnimation></LoaderAnimation>;
      }
    if(status==='authenticated'){
  return (
<Box>
  <Item>
    <AdminActiveWorks title={'Obras'} fetchingData={WORKS}/>
  </Item>
  <Item sx={{width:'100%'}}>
  <FormUploadWork/>
  </Item>
</Box>
);}
}
export default Works;