'use client'
import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import Swiper from "swiper"
import { SwiperSlide } from "swiper/react"
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import  Loader  from "../Loader/Loader";
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


const ModalCarrousel=({work})=>{
    const [open, setOpen] = useState(false);
    let [imageActive, setImageActive] = useState();
    let[imageActiveIndex, setImageActiveIndex]= useState(1)


    const handleClose=()=>{
      setOpen(false)
    }

    const onPrevious=()=>{    
        let indexImageActive= works.findIndex((url)=> url.image===imageActive)
        setImageActive('')
        
        if(indexImageActive-1 < 0){
         setImageActiveIndex(works.length-1)
         setImageActive(works.at(-1).image)
        }else{
         setImageActiveIndex((indexImageActive-1))
         setImageActive(works[indexImageActive-1].image)
       }
      }

        const onNext=()=>{
        setImageActiveIndex((imageActiveIndex + 1) % works.length);
        setImageActive(works[(imageActiveIndex + 1) % works.length].image);
       
     }

    return(
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
    )
}

export default ModalCarrousel