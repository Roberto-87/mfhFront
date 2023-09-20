'use client'
import React from "react";
import styles from './CardWorks.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation'
import {  useState } from 'react';
import { Button} from '@mui/material';
import { useEffect } from 'react';
import  LoaderAnimation  from "../LoaderAnimation/LoaderAnimation";
import {comfortaa} from '../../fonts/fonts'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingBar from 'react-top-loading-bar'
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";


const CardWorks = ({works}) => {
  const[imageLoaded, setImageLoaded]= useState(false)
  let[imageActiveIndex, setImageActiveIndex]= useState(1)
  const[activeImageData, setActiveImageData]= useState()
  const [scrollUp, setScrollUp]= useState(false)
  const [progress, setProgress] = useState(0)
   
   useEffect(()=>{
     AOS.init({duration: 1200})
     if(!works)throw new Error('Works not found ')
     setProgress(100) 
},[activeImageData,imageActiveIndex,  imageLoaded])


 const handleImageLoad = () => {
    setImageLoaded(true);     
}; 
  return (
    <Box sx={{ flexGrow: 1, paddingBottom:'25px' }} className={comfortaa.className}>
      <Grid container spacing={{ xs: 2, md: 3, sm:3,xl:2, lg:1 }} columns={{ xs: 1, sm: 6, md: 9,lg:9}} direction="row" justifyContent="flexEnd" alignItems="center">
        {!imageLoaded && <div style={{top:'5%',left:'50%' , height:'30vh', position:'fixed',   alignItems: 'center',display:'flex', justifyContent:'center'
}}>   <LoaderAnimation   />
      </div>
   }
    {works &&
          works?.map((work) => (
            <Grid  item xs={3}  key={work.id} >
         <Link  href={`/works/${(work?.id)}`} >
             <Button   className={styles.slideBottom} data-aos={scrollUp ? 'fade-up' : 'fade-out'}   >
   <LazyLoadImage    className={styles.cardImage}  src={work.image} onLoad={handleImageLoad}  alt={work.title} loading="lazy" effect="opacity" />
 
             </Button>
             </Link>
           <div>
      
        <LoadingBar  color='black'progress={progress}  />
    {imageLoaded  &&  
     <Box sx={{ marginLeft: '8px' }}>
      <div className={styles.containerData}>
     <h2 className={`${styles.cardItem} ${styles.title}`}>{work.title}, {work.year}</h2>
     </div>
     <div  className={styles.containerMaterialSize}>
         <p className={`${styles.cardItem} ${styles.material}`}>{work.material} </p>
     </div>
     <div className={styles.containerMaterialSize}>
          <p className={`${styles.cardItem} ${styles.size}`}>{work.size}</p>
     </div>

    </Box>
     }

          </div> 
  </Grid>
          ))}
      </Grid>        
     {imageLoaded && 
      <Box sx={{ flexGrow: 1, paddingTop:'20px',marginLeft:'10px', width:'80%' }} className={comfortaa.className}>
      <Grid className={styles.footerContainer} sx={{display:'flex', justifyContent:'start'}} >
        <Footer style={{color:'transparent' }}/>
      </Grid>
     </Box>
          }

    </Box>    
  );
  
};

export default CardWorks;
