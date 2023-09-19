'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Item } from './itemStyle';
import { BIO } from '../../utils/consts';
import {comfortaa} from '../fonts/fonts'
import LoadingBar from 'react-top-loading-bar'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'
import LoaderAnimation from '../components/LoaderAnimation/LoaderAnimation'


const Bio = () => {
  const [progress, setProgress] = useState(0)
   const [bio, setBio] = useState();
   const[loading, setLoading]= useState(false)
   const[imageLoaded,setImageLoaded]= useState(false)

useEffect(() => {
  setProgress( 100)
  try {
  const fetchData = async () => {
    const bioData = await getData(`${BIO}/active`);
    if(!bioData.length>0)throw new Error('error al obtener los datos de la bio.')
    setBio(bioData)
  };      
  fetchData();  
} catch (error) {
  return {error:error.message}
}
 
 
    }, []);
    const onHandleLoad=()=>{
      setImageLoaded(true)
    }

    return (< main>    
      <Box sx={{ flexGrow: 1, marginTop:'2%'}}>
      <LoadingBar  color='black'progress={progress}  />
      {!imageLoaded && <div style={{top:'5%',left:'50%' , height:'30vh', position:'fixed',   alignItems: 'center',display:'flex', justifyContent:'center'
}}>   <LoaderAnimation   />
      </div>
   }
  {bio && bio?.map(({title, image, subtitle, text, id})=> 
  <>
 
 <Grid item xs={12} sm={6} md={4} lg={3} gap={2} sx={{border: 'none', color: 'black'}}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h2 className={comfortaa.className}>{title}</h2>
      <p className={comfortaa.className}>{subtitle}</p>
    </div>
  </Grid>
  <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center', border: 'none'}}>
    <Grid item xs={12} sm={12} md={8} lg={8} gap={2} sx={{border: 'none', color: 'black'}}>
      <Item style={{backgroundColor: 'white'}}>
      {image && <LazyLoadImage loading='lazy' onLoad={onHandleLoad} effect='opacity' style={{width:'30%'}} src={image} alt={title}/>}

        <p className={comfortaa.className}>{text}</p>
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
