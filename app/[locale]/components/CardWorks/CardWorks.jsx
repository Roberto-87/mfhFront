'use client'
import styles from './CardWorks.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation'
import {  useState } from 'react';
import { Button, Modal  } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import  Loader  from "../Loader/Loader";
import {styleCarrouselWorks, Item} from './styleMui'
import ModalCarrousel from '../ModalCarrousel/ModalCarrousel';
import {comfortaa} from '../../fonts/fonts'
import arrowNext from '../../assets/nextButton.png'
import {
  TransformWrapper,
  TransformComponent,
  useControls
} from "react-zoom-pan-pinch";
import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { MapInteractionCSS } from "react-map-interaction";
import { GrNext, GrPrevious } from 'react-icons/gr';



const CardWorks = ({works}) => {
  const[loading, setLoading]= useState(false)
  const [carrousel, setCarrousel] = useState(false);
  let [imageActive, setImageActive] = useState();
  let[imageActiveIndex, setImageActiveIndex]= useState(1)
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const handleOpen = () => setOpen(true);
  const[images, setImages]= useState([])
  const[activeImageData, setActiveImageData]= useState()


  useEffect(()=>{
    const allImages= works.map((work)=>work.image)
    setImages(allImages)
    setLoading(true)     
  if(images){
    setTimeout(()=>{
      setLoading(false);
   },50)
  } 
 },[activeImageData])

  const handlerClick = (event) => {
    setCarrousel(!carrousel);
    setImageActive(event.target.currentSrc);
    let indexImageActive= works.findIndex((url)=> url.image===imageActive)
    let imageActiveData= works.find((url)=> url.image===event.target.currentSrc)
    console.log(imageActiveData)
    setActiveImageData(imageActiveData)
    setImageActiveIndex(indexImageActive) 
  };

  const handleClose=()=>{
    setOpen(false)
  }

  const handleZoom=()=>{
    setZoom(true)
  }

  const onPrevious=()=>{    
    let indexImageActive= works.findIndex((url)=> url.image===imageActive)
    setImageActive('')
    
    if(indexImageActive-1 < 0){
     setImageActiveIndex(works.length-1)
     setImageActive(works.at(-1).image)
     let imageActiveData= works.find((url)=> url.image===imageActive)
     setActiveImageData(imageActiveData)
    }else{
      setImageActiveIndex((indexImageActive-1))
      setImageActive(works[indexImageActive-1].image)
      let imageActiveData= works.find((url)=> url.image===imageActive)
      setActiveImageData(imageActiveData)
    }
  }
  const onNext=()=>{
    setImageActiveIndex((imageActiveIndex + 1) % works.length);
    setImageActive(works[(imageActiveIndex + 1) % works.length].image);
    let imageActiveData= works.find((url)=> url.image===imageActive)
    setActiveImageData(imageActiveData)   
  }

  return (
    <Box sx={{ flexGrow: 1 }} className={comfortaa.className}>
      {loading && <Loader/>}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 9 }} direction="row" justifyContent="center" alignItems="center">
        {works &&
          works.map((work) => (
            <Grid item xs={2} sm={4} md={3} lg={2} xl={3} key={work.id}>
              <Button onClick={handleOpen} >
                <img className={styles.cardImage} src={work.image} onClick={handlerClick} alt={work.title} priority/>
              </Button>
            <div>
       <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleCarrouselWorks}   >
       {open && <Button  onClick={handleClose} style={{color:'gray', backgroundColor:'black',  padding:'10%',position:'absolute', right:'100%', top:'0%', fontSize:'1em' }}></Button>}
      <div style={{display:'flex', flexDirection:'row-reverse',  position:'relative', top:'50%',width:'100%',display:'flex', justifyContent:'center'}} >
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:'100%', height:'100%', }}>
            <SwiperSlide  className={styles.swiper} style={{ display:'flex', justifyContent:'center',height:'80vh', width:'100vw', alignItems:'center', padding:'4px'}}>
              <button className={styles.buttonBefore}  style={{cursor:'pointer', bottom:'0%', backgroundColor:'transparent', position:'relative',right:'0%',border:'none'}} onClick={onPrevious}>
                <GrPrevious/>
                </button>  
                <div className={styles.containerImg} style={{display:'flex', alignItems:'center', justifyContent:'center',width:'30%' }}>
<TransformWrapper options={{ limitToBounds: false }}>
  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
    <React.Fragment>
      <TransformComponent>
        <img
          src={imageActive}
          cursor='grab'
          style={{ width: '100%', cursor: 'grab', touchAction: 'none' }}
          alt={work.title}
        />
      </TransformComponent>
    </React.Fragment>
  )}
</TransformWrapper> 
          </div>
             <button className={styles.buttonAfter} onClick={onNext} style={{cursor:'pointer', bottom:'0%' , backgroundColor:'transparent', position:'relative',right:'0%', border:'none' }}>
             <GrNext/>
                </button> 
                  </SwiperSlide>
           </Swiper>
     </div>
       { imageActive &&  
        <div id="modal-modal-description" style={{ marginTop:'6px', color:'gray',display:'flex', justifyContent:'center', alignItems:'center',height:'100%', width:'100%'}} className={comfortaa.className}>
           { works && `${activeImageData.title }, ${activeImageData.year}. ${activeImageData.material} ${activeImageData.size}.`} 
        </div>}
          </Box>
      </Modal>       
          </div>
            {images &&
     <Box sx={{ marginLeft: '8px' }}>
     <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
         <h2 className={`${styles.cardItem} ${styles.title}`}>{work.title}, {work.year}</h2>
     </div>
     <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
         <p className={`${styles.cardItem} ${styles.material}`}>{work.material}- </p>
         <p className={`${styles.cardItem} ${styles.size}`}>{work.size}</p>
     </div>
 </Box>
 }  </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardWorks;
