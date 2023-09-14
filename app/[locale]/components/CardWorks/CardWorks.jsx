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

const CardWorks = ({works}) => {
  const[imageLoaded, setImageLoaded]= useState(false)
  let [imageActive, setImageActive] = useState();
  let[imageActiveIndex, setImageActiveIndex]= useState(1)
  const [open, setOpen] = useState(false);
  const[images, setImages]= useState([])
  const[activeImageData, setActiveImageData]= useState()
  const [scrollUp, setScrollUp]= useState(false)
  const [scrollDown, setScrollDown]= useState(false)
  const [previousScroll, setPreviosScroll]= useState(0)
  const [progress, setProgress] = useState(0)
   
   useEffect(()=>{
    AOS.init({duration: 1200})
    if(!works)throw new Error('Works not found ')
    const allImages= works.map((work)=>work.image)
    setImages(allImages)
    setImageLoaded(true)
    setProgress(100) 
},[activeImageData,imageActiveIndex,  imageLoaded])


const handleImageLoad = () => {
  setImageLoaded(false); 
};
  return (
    <Box sx={{ flexGrow: 1 }} className={comfortaa.className}>
      {/* cambiar lg a 12 para la opción chiquita */}
      <Grid container spacing={{ xs: 2, md: 3, sm:3,xl:2, lg:1 }} columns={{ xs: 1, sm: 6, md: 9,lg:9}} direction="row" justifyContent="flexEnd" alignItems="center">
    {works &&
          works?.map((work) => (
            <Grid item xs={3}  key={work.id}  >
              <Link  href={`/works/${(work?.id)}`}>
             <Button   className={styles.slideBottom} data-aos={scrollUp ? 'fade-up' : 'fade-out'}   >
       <img className={styles.cardImage}  onLoad={handleImageLoad} src={work.image}  alt={work.title} />
             </Button>
             </Link>
           <div>
        <LoadingBar  color='black'progress={progress}  />
     <Box sx={{ marginLeft: '8px' }}>
     <div className={styles.containerData}>
     <h2 className={`${styles.cardItem} ${styles.title}`}>{work.title.toUpperCase()}, {work.year}</h2>
     </div>
     <div  className={styles.containerMaterialSize}>
         <p className={`${styles.cardItem} ${styles.material}`}>{work.material} </p>
     </div>
     <div className={styles.containerMaterialSize}>
          <p className={`${styles.cardItem} ${styles.size}`}>{work.size}</p>
     </div>
    </Box>
          </div> 
  </Grid>
          ))}
      </Grid>          
    </Box>    
  );
  
};

export default CardWorks;
