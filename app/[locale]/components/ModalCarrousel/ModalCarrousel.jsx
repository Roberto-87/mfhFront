'use client'
import React, { useEffect } from 'react';
import styles from '../CardWorks/CardWorks.module.css';
import stylesCarrousel from './ModalCarrousel.module.css'
import Box from '@mui/material/Box';
import style from './ModalCarrousel.module.css'
import 'swiper/css';
import 'swiper/css/navigation'
import {  useState } from 'react';
import { Button, Modal  } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {styleCarrouselExhibitions} from '../CardWorks/styleMui'
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { GrNext, GrPrevious } from 'react-icons/gr';
import LoadingBar from 'react-top-loading-bar'


const ModalCarrousel = ({ allImages, activeImage, open,onClose}) => {
  let[imageActiveIndex, setImageActiveIndex]= useState(0)
  const[imageActive, setImageActive]=useState(activeImage)
  const [progress, setProgress] = useState(false);
  
  const onPrevious=(event)=>{   
    event.stopPropagation(); 
    let indexImageActive= allImages.findIndex((url)=> url===imageActive)
    setImageActive('')
    setProgress(progress + 10)
    
    if(indexImageActive-1 < 0){
     setImageActiveIndex(allImages.length-1)
     setImageActive(allImages.at(-1))
 
    }else{
      setImageActiveIndex((indexImageActive-1))
      setImageActive(allImages[indexImageActive-1])
       }
  }
  const onNext=(event)=>{

    event.stopPropagation();
    setImageActiveIndex((imageActiveIndex + 1) % allImages.length);
    setImageActive(allImages[(imageActiveIndex + 1) % allImages.length]);
setProgress(progress + 10)
  }
  useEffect(() => {
    setProgress(100)
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        onPrevious(event);
      } else if (event.key === 'ArrowRight') {
        onNext(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageActiveIndex]);

  return (
    <Modal open={open} onClose={onClose} onClick={onClose}  aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={styleCarrouselExhibitions}    >
      <LoadingBar  color='black'progress={progress}  />
    <div  style={{display:'flex', flexDirection:'row-reverse',  position:'relative', top:'50%',width:'100%',display:'flex', justifyContent:'center'}} >
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:'100%', height:'100%', }}>
        <SwiperSlide  className={styles.swiper} style={{ display:'flex', justifyContent:'center',height:'95vh', width:'100vw', alignItems:'center', padding:'4px'}}>
            <div className={styles.containerImgModal} style={{display:'flex', alignItems:'center', justifyContent:'center',width:'32%' }}>
              <button className={styles.buttonBefore}  style={{cursor:'pointer', bottom:'0%', backgroundColor:'transparent', position:'relative',right:'0%',border:'none',height:'100%'}} onClick={onPrevious}>
            <GrPrevious/>
            </button>  
<TransformWrapper  options={{ limitToBounds: false }}>
{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
<React.Fragment >
  <TransformComponent >
<div  >
     <img 
      style={{
        maxWidth:'100%',
        maxHeight:'auto',
        width: '850px', 
        cursor: 'grab',
        touchAction: 'none',
      }}
      className={stylesCarrousel.imgCarrousel}
      src={imageActive}
      cursor='grab'
   
      alt='imagen de exhibición'
    />  
 </div>   
  
  </TransformComponent>
</React.Fragment>
)}
</TransformWrapper> 
<button className={styles.buttonAfter} onClick={onNext} style={{cursor:'pointer', bottom:'0%' , backgroundColor:'transparent', position:'relative',right:'0%', border:'none',height:'100%' }}>
         <GrNext/>
            </button> 
      </div>
              </SwiperSlide>
       </Swiper>
 </div>
      </Box>
  </Modal>                 
  )  
}
export default ModalCarrousel;