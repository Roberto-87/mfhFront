'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import { Box, Paper } from "@mui/material";
import Grid from '@mui/material/Grid';
import { BIO } from '../../utils/consts';
import {comfortaa} from '../fonts/fonts'
import LoadingBar from 'react-top-loading-bar'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'
import LoaderAnimation from '../components/LoaderAnimation/LoaderAnimation'
import Footer from '../components/Footer/Footer';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  boxShadow:'none',
  color: theme.palette.text.secondary,
}));

const Bio = () => {
  const [progress, setProgress] = useState(0)
   const [bio, setBio] = useState();
   const[loading, setLoading]= useState(false)
   const[imageLoaded,setImageLoaded]= useState(false)
   const yearRegex = /^\d{4}/;

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

    return (
      <Box sx={{ flexGrow: 1 }}>

 <LoadingBar  color='black'progress={progress}  />
    {!bio && 
     <div style={{top:'5%',left:'50%' , height:'30vh', position:'fixed',   alignItems: 'center',display:'flex', justifyContent:'center'}}>
        <LoaderAnimation/>
    </div>
    }    
     
    <Grid container spacing={2}   sx={{marginTop:'1%'}} >
      <Grid xs={2}></Grid>
         <Grid xs={9} rowSpacing={1} >
    {bio && bio?.map(({title, image, subtitle, text, id})=> 
            <Item key={id}>
              <div style={{display:'flex', justifyContent:'center'}}>
             <h2 className={comfortaa.className}>{title}</h2>
              </div>
             <p className={comfortaa.className}>{subtitle}</p>
   {image && <LazyLoadImage loading='lazy' onLoad={onHandleLoad} effect='opacity' style={{width:'30%'}} src={image} alt={title}/>}
            <p className={comfortaa.className}>{text.split('\n').map((line, index) => (
          <div key={index} style={{display:'flex', justifyContent:'flex-start' , marginLeft:'0', paddingLeft:'4%'}}>
          {line.match(yearRegex)  ? <p style={{marginTop:'0', marginBottom:'0', paddingTop:'1px'}}>{line}</p>:  
            <p style={{  marginTop:'0', marginBottom:'0', paddingTop:'1px' }}>{line}</p>
          }
          <br />
          </div>
          ))}</p>  
            </Item>
  )}        
          </Grid><Grid xs={1}>
          </Grid>
        </Grid> 
          {bio && <Box  sx={{width:'100%', display:'flex',justifyContent:'flex-start', alignItems:'center', position:'fixed', bottom:'4%', marginLeft:'5px' }}>
<Footer   />
</Box> }
      </Box>
    );

}
export default Bio