'use client'
import React from "react";
import styles from '../../components/CardWorks/CardWorks.module.css';
import Box from '@mui/material/Box';
import 'swiper/css';
import 'swiper/css/navigation'
import {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import  LoaderAnimation  from "../../components/LoaderAnimation/LoaderAnimation";
import {styleCarrouselWorks, Item} from '../../components/CardWorks/styleMui'
import {comfortaa} from '../../fonts/fonts'
import { TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import { GrNext, GrPrevious } from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingBar from 'react-top-loading-bar'
import ShareButton from "../../components/ShareButton/ShareButton";
import Brand from '../../components/Brand/Brand'
import { WORKS } from "../../../utils/consts";
import getData from '../../hooks/getData'
import { useRouter } from "next/navigation";
import CloseButton from "../../components/CloseButton/CloseButton";
import { Grid, Paper } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'

const Work=({params})=>{
     const[imageLoaded, setImageLoaded]= useState(false)
    const [progress, setProgress] = useState(0)
    const [workIndex, setWorkIndex] = useState(0)
    const [works, setWorks] = useState(0)
    const [work, setWork] = useState(0)
    const [pathname, setPathname] = useState(0)
    const {id}= params
    const router= useRouter()
    const path=  window.location.href;

useEffect(()=>{
  AOS.init()
    const fetchDataWork = async () => {
      const allWorks = await getData(`${WORKS}/active`);
      const allIds= allWorks.map((work)=>work.id)
      const workIdActual= allIds.findIndex((work)=> work===id)
      if(workIdActual ===allWorks.length)setWorkIndex(0)
      if(workIdActual === -1)setWorkIndex(allWorks.length)
      const actualWork = await getData(`${WORKS}/${id}`);  
      setWorks(allWorks)   
      setWorkIndex(workIdActual)  
      setWork(actualWork)   
      setPathname(path)
    };   
    fetchDataWork();  
    setProgress(100)
   
    const handleKeyDown = (event) => {
        if (event.code === 'ArrowLeft') {
          onPrevious();
      } else if (event.code === 'ArrowRight') {
        onNext();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
},[])   

const onPrevious = () => {
  if (work.title) {
    let previousWorkIndex = workIndex - 1;
    if (previousWorkIndex < 0) {
      previousWorkIndex = works.length - 1;
    }
    const previousWork = works[previousWorkIndex];
    router.push(`${previousWork.id}`);
    setProgress(progress + 10);
  }
};
const onNext = () => {
  if (work.title) {
    let nextWorkIndex = workIndex + 1;
    if (nextWorkIndex >= works.length) {
      nextWorkIndex = 0;
    }
    const nextWork = works[nextWorkIndex];
    router.push(`${nextWork.id}`);
    setProgress(progress+10  );
  }
};
const handleImageLoad = () => {
    setImageLoaded(true);
};

const handleGoBack = () => {
    router.push("/works");
};
 
return(
  <Box sx={{ flexGrow: 1 , display:'flex', justifyContent:'center'}}>
      <LoadingBar  color='black'progress={progress}  />
  <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3,lg:2 }}>
    <Grid xs={9} sx={{marginLeft:'1.5%'}} >
     <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
       <Brand/> 
       {imageLoaded &&  <CloseButton className={styles.closeButton} handleGoBack={handleGoBack}  />}
    </Box>
    </Grid>
    <Grid xs={8}>
    </Grid>
    <Grid xs={12}>
     <Item > 
        {!imageLoaded && <LoaderAnimation style={{fontSize:'20px'}}/>}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:'100%', height:'100%', }}>
          <SwiperSlide  className={styles.swiper} style={{ display:'flex', justifyContent:'center',height:'76vh', width:'100vw', alignItems:'flex-start', padding:'4px'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'100%', marginBottom:'2%'}}>
         {imageLoaded &&  
          <button  style={{cursor:'pointer',position:'fixed', bottom:'5%', backgroundColor:'transparent', border:'none',height:'100%'}} onClick={onPrevious}>
             <GrPrevious style={{fontSize:'20px'}}/>
          </button>  }
      </Box>
      <TransformWrapper   options={{ limitToBounds: false }}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment >
        <TransformComponent >
       <LazyLoadImage loading="lazy" className={styles.img} effect="opacity" style={{width: '80%', cursor: 'pointer', touchAction: 'none'}} src={work.image} key={work.id} onLoad={handleImageLoad} />
       </TransformComponent>
       </React.Fragment>
      )}
      </TransformWrapper> 
       <Box sx={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'100%', marginTop:'-1.5%'}}>
         {imageLoaded &&    
          <button  style={{cursor:'pointer',position:'fixed', bottom:'5%',right:'0', backgroundColor:'transparent', border:'none',height:'100%'}} onClick={onPrevious}>
             <GrNext style={{fontSize:'20px'}}/>
          </button>  
                }
      </Box>   
          </SwiperSlide>
           </Swiper>
     
      {imageLoaded &&   
      <Box sx={{display:'flex', justifyContent:'center', marginTop:'.6%' }}>
        <>
        <p  className={`${styles.titleWork}${comfortaa.className}`}> {`${work.title }, ${work.year}. ${work.material} ${work.size}.`} </p> 
        <ShareButton url={pathname} image={work.image} id={work.id } description= {`${work.title }, ${work.year}. ${work.material} ${work.size}.`} />
        </>
      </Box>
         }
     </Item>
    </Grid>
  </Grid>
</Box>
    )
}
export default Work