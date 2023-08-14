'use client'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "../../components/Loader/Loader";
import { Box, Grid } from "@mui/material";
import { Item } from "../[works]/styleMui";
import AdminActiveWorks from "../../components/AdminActiveWorks/AdminActiveWorks";


const Cover = () => {
  const{status} = useSession()
  const router= useRouter()

  if (status === 'unauthenticated') {
    router.push('/'); 
   } 

 if (status === 'loading') {
 return <Loader></Loader>;
}

return(
    <Box>
    {status === 'authenticated' &&
        <Grid>
         <Item>
         <AdminActiveWorks title={'Cover'} fetchingData={'cover'}/>
       </Item>

        </Grid>
       }  
       </Box>
)

  };
  
export default Cover
  