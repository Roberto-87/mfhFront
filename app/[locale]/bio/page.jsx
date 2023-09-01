'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import LoaderAnimation from "../components/LoaderAnimation/LoaderAnimation";
import Image from 'next/image';
import { Item } from './itemStyle';
import { BIO } from '../../utils/consts';


const Bio = () => {
   const [bio, setBio] = useState();
   const[loading, setLoading]= useState(false)

    useEffect(() => {

      const fetchData = async () => {
        const bioData = await getData(`${BIO}/active`);
        setBio(bioData)
      };      
      fetchData();  
 
    }, []);

    return (< main>    
      <Box sx={{ flexGrow: 1, marginTop:'2%'}}>

  {bio && bio?.map(({title, image, subtitle, text, id})=> 
  <>
 
 <Grid item xs={12} sm={6} md={4} lg={3} gap={2} sx={{border: 'none', color: 'black'}}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {image && <img src={image} alt={title}/>}
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </Grid>
  <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center', border: 'none'}}>
    <Grid item xs={12} sm={12} md={8} lg={8} gap={2} sx={{border: 'none', color: 'black'}}>
      <Item style={{backgroundColor: 'white'}}>
        <p>{text}</p>
      </Item>
    </Grid>
  </Grid>
</>
    

     )
   }
 </Box>
</main>
        )
}
export default Bio
