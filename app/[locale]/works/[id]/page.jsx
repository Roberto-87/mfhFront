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
import { Grid } from "@mui/material";

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
    setImageLoaded(false);
};

const handleGoBack = () => {
    router.push("/works");
};
 
return(
      <Box>   
       <LoadingBar  color='black'progress={progress}  />
        <Box   aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleCarrouselWorks}    >
  {work.title &&
  <div className={styles.closeButtonContainer} style={{display:'flex', justifyContent:'flex-end',alignItems:'flex-end', width:'90vw' , position:'fixed', top:'8vh', zIndex:'2'  }}>
     <CloseButton className={styles.closeButton} handleGoBack={handleGoBack}  />
    </div> 
  }    <div  style={{display:'flex', flexDirection:'row-reverse',  position:'relative', top:'50%',width:'100%',display:'flex', justifyContent:'center'}} >
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:'100%', height:'100%', }}>
            <SwiperSlide  className={styles.swiper} style={{ display:'flex', justifyContent:'center',height:'95vh', width:'100vw', alignItems:'center', padding:'4px'}}>
            {work.title &&      <button className={styles.buttonBefore}  style={{cursor:'pointer', bottom:'0%', backgroundColor:'transparent', position:'relative',right:'0%',top:'5%',border:'none',height:'100%'}} onClick={onPrevious}>
                <GrPrevious style={{fontSize:'20px'}}/>
                </button>  }
        <div className={styles.containerImgModal} style={{display:'flex', alignItems:'center', justifyContent:'center',width:'32%' }}>
      <TransformWrapper  options={{ limitToBounds: false }}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment >
        <TransformComponent >
        {!work.title && <LoaderAnimation style={{fontSize:'10px'}}/>}
       <div>
          <img style={{width: '100%', cursor: 'grab', touchAction: 'none', }} src={work.image} key={work.id} onLoad={handleImageLoad} 
          cursor='grab' className={styles.imgModal} alt={work.title} />        
      </div>   
      </TransformComponent>
       </React.Fragment>
      )}
      </TransformWrapper> 
             </div>
     {work.title &&      <button className={styles.buttonAfter} onClick={onNext} style={{cursor:'pointer', bottom:'0%' , backgroundColor:'transparent', position:'relative',right:'0%',top:'5%', border:'none',height:'100%' }}>
        <GrNext style={{fontSize:'20px'}}/>
         </button> }
           </SwiperSlide>
            </Swiper>
         </div>
    <div id="modal-modal-description" style={{ marginTop:'8px', color:'gray',display:'inline', justifyContent:'flex-start', alignItems:'center',height:'10%',marginTop:'15px', width:'100%'}} className={`${styles.modalDescription} ${comfortaa.className}`}>
        {work.title &&  
        <div className={styles.brand} style={{fontSize:'15px', width:'65%',cursor:'pointer',position:'fixed',left:'5vw',top:'2.8vw'}} >
           <Brand className={styles.brand_brand} />
        </div>   
     }
  {work.title &&         <Grid container spacing={12}  >
     <Grid className={styles.containerContainerTitleAndShare}  item xs={12}sx={{display:'flex', justifyContent:'center', width:'100%', marginLeft:'5vw'}} >
       <div className={styles.containerTitleAndShare} style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <p  className={styles.titleWork}> {`${work.title }, ${work.year}. ${work.material} ${work.size}.`} </p> 
         <div>
          <ShareButton style={{height:'10px'}}  url={pathname} description= {`${work.title }, ${work.year}. ${work.material} ${work.size}.`} />
         </div>
    </div>
  </Grid>
  </Grid>}
      </div>
          </Box>
          </Box>         
            </Box>
    )
}
export default Work