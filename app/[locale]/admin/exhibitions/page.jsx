'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import  Loader  from '../../components/Loader/Loader';
import { Box, Grid } from '@mui/material';
import { Item } from '../[works]/styleMui';
import AdminActiveWorks from '../../components/AdminActiveWorks/AdminActiveWorks';
import FormUploadExhibition from '../../components/FormUploadExhibition/FormUploadExhibition';


const Exhibitions = () => {
  const router = useRouter();
  const { status } = useSession()

  if (status === 'unauthenticated') {
    router.push('/exhibitions'); 
   } 

 if (status === 'loading') {
 return <Loader></Loader>;
}

    return (
      <Box sx={{display:'flex', justifyContent:'center'}}>
        {status === 'authenticated' &&
       <Grid>
        <Item>
         <AdminActiveWorks title={'Exhibiciones'} fetchingData={'exhibitions'}/> 
      </Item>
      <Item>
        <FormUploadExhibition title={'exhibition'}/>
      </Item>
        </Grid>
      }  
      </Box>
    );
  };
  
export default Exhibitions
  