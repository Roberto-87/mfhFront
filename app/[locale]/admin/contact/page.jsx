'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "../../components/Loader/Loader";
import { Box, Grid } from "@mui/material";
import { Item } from "../[works]/styleMui";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";


const Contact = () => {
const {status}= useSession()
const router= useRouter()

if (status === 'unauthenticated') {
  router.push('/contact'); 
 } 

if (status === 'loading') {
return <Loader></Loader>;
}

if(status==='authenticated'){
  return(
    <Box>
    {status === 'authenticated' &&
        <Grid>
         <Item>
         <AdminActiveWorks title={'Data contacto'} fetchingData={'contact'}/>
       </Item>

        </Grid>
       }  
       </Box>
)
  }

  };
  
export default Contact
  