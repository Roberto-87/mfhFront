'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Loader from "../components/Loader/Loader";
import Image from 'next/image';
import { Item } from './itemStyle';
import { BIO } from '../../utils/consts';


const Bio = () => {
   const [bio, setBio] = useState({text:'', image:''});
   const[loading, setLoading]= useState(false)

    useEffect(() => {
      setLoading(true)     
      const fetchData = async () => {
        const bioData = await getData(BIO);
        setBio({text:bioData[0].text, image:bioData[0].image})
      };      
      fetchData();  
      if(bio){
        setTimeout(()=>{
          setLoading(false);
       },50)
      }
    }, []);

    return (< main>    
      <Box sx={{ flexGrow: 1, marginTop:'2%' }}>
      {loading && <Loader/>}
          <Item>
        <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
     <Item>
        <Image src={bio.image} width={400} height={250} style={{width:'45%'}} priority alt='imagen de María'  />
     </Item>
   </Grid>
   <Grid item xs={12} md={8}>
    {bio.image &&       
    <Item >
    <p style={{color:'white'}}>{bio.text}</p> 
    </Item>
    }
     </Grid>
   </Grid>
  </Item>
 </Box>
</main>
        )
}
export default Bio



