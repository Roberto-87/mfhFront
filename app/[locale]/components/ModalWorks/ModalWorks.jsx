import React from "react"
import { Box, Modal } from "@mui/material"
import { GrNext, GrPrevious } from "react-icons/gr"
import { TransformComponent } from "react-zoom-pan-pinch"
import { Swiper, SwiperSlide } from 'swiper/react';
import { TransformWrapper } from "react-zoom-pan-pinch"
import { useState, useEffect } from "react"
import { styleCarrouselWorks } from "../CardWorks/styleMui"
import { comfortaa } from "../../fonts/fonts";
import styles from '../CardWorks/CardWorks.module.css';

const ModalWorks=({works,activeImageData,open,onClose,onPrevious,onNext})=>{
   return(
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleCarrouselWorks}    >
        <div  style={{display:'flex', flexDirection:'row-reverse',  position:'relative', top:'50%',width:'100%',display:'flex', justifyContent:'center'}} >
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:'100%', height:'100%', }}>
            <SwiperSlide  className={styles.swiper} style={{ display:'flex', justifyContent:'center',height:'95vh', width:'100vw', alignItems:'center', padding:'4px'}}>
                 <button className={styles.buttonBefore}  style={{cursor:'pointer', bottom:'0%', backgroundColor:'transparent', position:'relative',right:'0%',border:'none',height:'100%'}} onClick={onPrevious}>
                <GrPrevious/>
                </button>  
                <div className={styles.containerImgModal} style={{display:'flex', alignItems:'center', justifyContent:'center',width:'32%' }}>
<TransformWrapper  options={{ limitToBounds: false }}>
  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
    <React.Fragment >
      <TransformComponent >
 <div  onClick={onHandleImageClick}>
       <img
          style={{
            width: '100%',
            cursor: 'grab',
            touchAction: 'none',
          }}
          src={imageActive}
          cursor='grab'
       
          alt={work.title}
        />
     </div>   
      
      </TransformComponent>
    </React.Fragment>
  )}
</TransformWrapper> 
          </div>
        <button className={styles.buttonAfter} onClick={onNext} style={{cursor:'pointer', bottom:'0%' , backgroundColor:'transparent', position:'relative',right:'0%', border:'none',height:'100%' }}>
        <GrNext/>
       </button> 
      </SwiperSlide>
      </Swiper>
    </div>
     
        <div id="modal-modal-description" style={{ marginTop:'6px', color:'gray',display:'flex', justifyContent:'center', alignItems:'center',height:'100%', width:'100%'}} className={`${styles.modalDescription} ${comfortaa.className}`}>
{/*            { works && `${activeImageData.title }, ${activeImageData.year}. ${activeImageData.material} ${activeImageData.size}.`}  */}
        </div>
          </Box>
      </Modal> 
    )
}
   
export default ModalWorks