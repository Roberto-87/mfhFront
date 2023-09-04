'use client'
import React from "react";
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
import  LoaderAnimation  from "../LoaderAnimation/LoaderAnimation";
import {styleCarrouselWorks, Item} from './styleMui'
import {comfortaa} from '../../fonts/fonts'
import { TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import { GrNext, GrPrevious } from 'react-icons/gr';
import ModalWorks from "../ModalWorks/ModalWorks";

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
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(()=>{
   if(!works)throw new Error('Works not found ')
    const allImages= works.map((work)=>work.image)
    setImages(allImages)
    setLoading(true)      
  if(images){
    setTimeout(()=>{
      setLoading(false);
   },100)
  } 
 },[activeImageData])


 useEffect(() => {
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


  const handlerClick = (event) => {
    setCarrousel(!carrousel);
    setImageActive(event.target.currentSrc);
    
    let indexImageActive= works.findIndex((url)=> url.image===imageActive)
    let imageActiveData= works.find((url)=> url.image===event.target.currentSrc)

    setActiveImageData(imageActiveData)
    setImageActiveIndex(indexImageActive) 
  };

  const handleClose=()=>{
    setOpen(false)
  }
  const onHandleImageClick=(event)=>{
    event.stopPropagation()
    setZoom(true)

  }


  const onPrevious=(event)=>{   
    event.stopPropagation(); 
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
  const onNext=(event)=>{
    event.stopPropagation();
    setImageActiveIndex((imageActiveIndex + 1) % works.length);
    setImageActive(works[(imageActiveIndex + 1) % works.length].image);
    let imageActiveData= works.find((url)=> url.image===imageActive)
    setActiveImageData(imageActiveData)   
  }

  return (
    <Box sx={{ flexGrow: 1 }} className={comfortaa.className}>
      {loading && <LoaderAnimation/>}
      <Grid container spacing={{ xs: 2, md: 3, sm:3 }} columns={{ xs: 1, sm: 1, md: 9 }} direction="row" justifyContent="center" alignItems="center">
    {works &&
          works?.map((work) => (
            <Grid item xs={2} sm={1} md={3} lg={2} xl={3} key={work.id}>
              <Button onClick={handleOpen} >
                <img className={styles.cardImage} src={work.image} onPrevious={onPrevious} onNext={onNext} onClick={handlerClick} alt={work.title} />
              </Button>
            <div>
    {work.image &&
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
   
{/*      {open && <ModalWorks works={works} activeImageData={activeImageData}/>} */}
          
        <Modal open={open} onClose={handleClose} onClick={handleClose}  aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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
       { imageActive &&  
        <div id="modal-modal-description" style={{ marginTop:'6px', color:'gray',display:'flex', justifyContent:'center', alignItems:'center',height:'100%', width:'100%'}} className={`${styles.modalDescription} ${comfortaa.className}`}>
           { works && activeImageData && `${activeImageData.title }, ${activeImageData.year}. ${activeImageData.material} ${activeImageData.size}.`} 
        </div>}
          </Box>
      </Modal>    
   {/*   ---------------------     */} 
          </div>
 
  </Grid>
          ))}
      </Grid>
          
    </Box>
    
  );
  
};

export default CardWorks;
