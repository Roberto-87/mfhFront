'use client'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoaderAnimation from "../../components/LoaderAnimation/LoaderAnimation";
import { Box, Grid } from "@mui/material";
import { Item } from "../[works]/styleMui";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";
import FormUploadWork from '../../components/FormUploadWork/FormUploadWork'

const Cover = () => {
  const{status} = useSession()
  const router= useRouter()

  if (status === 'unauthenticated') {
    router.push('/'); 
   } 

 if (status === 'loading') {
 return <LoaderAnimation></LoaderAnimation>;
}

return(
<Box>
  <Item>
    <AdminActiveWorks title={'Cover'} fetchingData={'cover'}/>
  </Item>
  <Item sx={{width:'100%'}}>
  <FormUploadWork folder="cover" title='Cover'/>
  </Item>
</Box>
)

  };
  
export default Cover
  