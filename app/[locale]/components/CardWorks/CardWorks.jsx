'use client'
import React from "react";
import styles from './CardWorks.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'swiper/css';
import 'swiper/css/navigation'
import {  useState } from 'react';
import { Button, Card, Modal  } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import  LoaderAnimation  from "../LoaderAnimation/LoaderAnimation";
import {styleCarrouselWorks, Item} from './styleMui'
import {comfortaa} from '../../fonts/fonts'
import { TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import { GrNext, GrPrevious } from 'react-icons/gr';
import ModalWorks from "../ModalWorks/ModalWorks";
import CloseIcon from '@mui/icons-material/Close';
import { grey } from "@mui/material/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingBar from 'react-top-loading-bar'
import ShareButton from "../ShareButton/ShareButton";
import Brand from '../Brand/Brand'

const CardWorks = ({works}) => {
  const[imageLoaded, setImageLoaded]= useState(false)
  const [carrousel, setCarrousel] = useState(false);
  let [imageActive, setImageActive] = useState();
  let[imageActiveIndex, setImageActiveIndex]= useState(1)
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const[images, setImages]= useState([])
  const[activeImageData, setActiveImageData]= useState()
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [scrollUp, setScrollUp]= useState(false)
  const [scrollDown, setScrollDown]= useState(false)
  const [previousScroll, setPreviosScroll]= useState(0)
  const [progress, setProgress] = useState(0)
  
  const handleOpen = () => {
    setOpen(true);
    setProgress(progress + 10)
  }
  
  
  useEffect(()=>{
    AOS.init({
      duration: 1200,
    })
    
    if(!works)throw new Error('Works not found ')
    const allImages= works.map((work)=>work.image)
    setImages(allImages)
    setImageLoaded(true)

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        onPrevious(event);
    } else if (event.key === 'ArrowRight') {
      onNext(event);
    }
  };
  const handleScroll=()=>{
    const actualPosition= window.scrollY
    if(actualPosition > previousScroll){
      setScrollDown(true)
    }else {
      setScrollUp(true)
    }
    setPreviosScroll(actualPosition)
  }
  document.addEventListener('scroll', handleScroll);
  document.addEventListener('keydown', handleKeyDown);
  setProgress(100) 
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
},[activeImageData,imageActiveIndex,  imageLoaded])

const handlerClick = (event) => {
   setProgress(progress + 10)
  setCarrousel(!carrousel);
  setImageActive(event.target.currentSrc);
  let indexImageActive= works.findIndex((url)=> url.image===imageActive)
  let imageActiveData= works[indexImageActive]
  setActiveImageData(imageActiveData)
  setImageActiveIndex(indexImageActive) 
};
const onPrevious = (event) => {
  setProgress(progress + 10)
  event.stopPropagation();
  let actualIndex = (imageActiveIndex - 1 + works.length) % works.length;
  setActiveImageByIndex(actualIndex);
};

const onNext = (event) => {
  setProgress(progress + 10)
  event.stopPropagation();
  let actualIndex = (imageActiveIndex + 1) % works.length;
  setActiveImageByIndex(actualIndex);
};
const handleImageLoad = () => {
  setImageLoaded(false);
 
};

  const handleClose=()=>{
    setProgress(progress + 10)
    setOpen(false)
  }
  const onHandleImageClick=(event)=>{
    event.stopPropagation()
    setZoom(true)

  }

  
  const setActiveImageByIndex = (index) => {
    if (index >= 0 && index < works.length) {
      setActiveImageData(works[index]);
      setImageActive(works[index].image);
      setImageActiveIndex(index);
    }
  };  


  return (
    <Box sx={{ flexGrow: 1 }} className={comfortaa.className}>
      {/* cambiar lg a 12 para la opción chiquita */}
      <Grid container spacing={{ xs: 2, md: 3, sm:3,xl:2, lg:1 }} columns={{ xs: 1, sm: 6, md: 9,lg:9}} direction="row" justifyContent="flexEnd" alignItems="center">
    {works &&
          works?.map((work) => (
            <Grid item xs={3}  key={work.id}  >
             <Button onClick={handleOpen}  className={styles.slideBottom} data-aos={scrollUp ? 'fade-up' : 'fade-out'}   >
       <img className={styles.cardImage}  onLoad={handleImageLoad} src={work.image} onClick={handlerClick}  alt={work.title} />
             </Button>
           <div>
        <LoadingBar  color='black'progress={progress}  />
{/*       <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <br /> */}


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
        <Modal open={open} onClose={handleClose}   onClick={handleClose}  aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleCarrouselWorks}    >


        <div  style={{display:'flex', flexDirection:'row-reverse',  position:'relative', top:'50%',width:'100%',display:'flex', justifyContent:'center'}} >
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{width:'100%', height:'100%', }}>
            <SwiperSlide  className={styles.swiper} style={{ display:'flex', justifyContent:'center',height:'95vh', width:'100vw', alignItems:'center', padding:'4px'}}>
                 <button className={styles.buttonBefore}  style={{cursor:'pointer', bottom:'0%', backgroundColor:'transparent', position:'relative',right:'0%',border:'none',height:'100%'}} onClick={onPrevious}>
                <GrPrevious style={{fontSize:'25px'}}/>
                </button>  
                <div className={styles.containerImgModal} style={{display:'flex', alignItems:'center', justifyContent:'center',width:'32%' }}>
<TransformWrapper  options={{ limitToBounds: false }}>
  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
    <React.Fragment >
      <TransformComponent  >

      <div data-aos="zoom-in"  data-aos-duration="20">
        

        <img

            style={{
              width: '100%',
              cursor: 'grab',
              touchAction: 'none',
            }}
            src={imageActive}
            onLoad={handleImageLoad}
            cursor='grab'
            className={styles.imgModal}
            alt={work.title}
          />        
          


     </div>   

  
      </TransformComponent>
    </React.Fragment>
  )}
</TransformWrapper> 
          </div>
             <button className={styles.buttonAfter} onClick={onNext} style={{cursor:'pointer', bottom:'0%' , backgroundColor:'transparent', position:'relative',right:'0%', border:'none',height:'100%' }}>
             <GrNext style={{fontSize:'25px'}}/>
                </button> 


                  </SwiperSlide>
           </Swiper>
     </div>

       { imageActive &&  
       <>

        <div id="modal-modal-description" style={{ marginTop:'8px', color:'gray',display:'flex', justifyContent:'flex-start', alignItems:'center',height:'10%',marginTop:'15px', width:'100%'}} className={`${styles.modalDescription} ${comfortaa.className}`}>

        <div className={styles.brandModal} style={{width:'65%', display:'flex', justifyContent:'flex-end', alignItems:'flex-end',position:'fixed',left:'5vw',top:'2.5vw'}}>
          <Brand style={{fontSize:'4px' }}/>
        </div>
           { works && activeImageData && `${activeImageData.title }, ${activeImageData.year}. ${activeImageData.material} ${activeImageData.size}. ` }
{/*        <ShareButton/> */}
        </div>

       </>
       }
   
          </Box>
      </Modal>    

          </div>
 
  </Grid>
          ))}
      </Grid>
          
    </Box>
    
  );
  
};

export default CardWorks;
