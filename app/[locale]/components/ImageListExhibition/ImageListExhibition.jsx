'use client'
import { ImageList, ImageListItem } from "@mui/material"
import ModalCarrousel from "../ModalCarrousel/ModalCarrousel";
import {  useState } from "react";
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'
import { useEffect } from "react";
import {LiaAngleUpSolid} from 'react-icons/lia'
import BackToStart from "../BackToStart/BackToStart";

const ImageListExhibition=({exhibition})=>{
   const [activeImage, setActiveImage] = useState();
   const[open, setOpen]= useState(false)
   const[imageLoaded, setImageLoaded]= useState(false)
   const handleClose = () => setOpen(false);
   const [scrolling, setScrolling] = useState(false);
   const [prevScrollY, setPrevScrollY] = useState(0);
   const [actScrollY, setActScrollY] = useState(0);
   
   const handleScroll = () => {
     const currentScrollY = window.scrollY;
     setActScrollY(currentScrollY)
      if(currentScrollY > 400){
        setScrolling(true);
        setPrevScrollY(actScrollY)
       } else if(currentScrollY ===0 ) {
         setScrolling(false);
      }
  } 
   useEffect(() => {
    console.log(window.scrollY)
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     }
   }, [scrolling]);

   const onHandleClick=(image)=>{
    setActiveImage(image)
    setOpen(true)
   }

   const onHandleLoad=()=>{
    setImageLoaded(true)
   }
   const onHandleBack=()=>{
    console.log('clicked')
    window.scrollTo({ top: 0, behavior: "smooth" });
   }
    return(
      <>
       <ImageList cols={1} style={{position:'absolute'}}>
      
     { 
     
        exhibition?.images?.map((image, index) => (
          <ImageListItem  key={index}  style={{gap:'2px'}}>        
          <LazyLoadImage
                src={`${image.replace('http','https')}`}
                srcSet={`${image.replace('http','https')}`}
                alt={'imagen de exhibición'}
                loading="lazy"
                effect="opacity"
                onClick={()=>onHandleClick(image)}
                style={{cursor:'pointer'}}
                onLoad={onHandleLoad}
                width={'100%'}
              /> 

         </ImageListItem>
        ))
        
}  
        {scrolling && 
         <BackToStart handleClick={onHandleBack} />
              }
     
     {
      open && <ModalCarrousel activeImage={activeImage} allImages={exhibition.images} open={open} onClose={handleClose} />
      }

    </ImageList>
  
      </>
    )
}
     
export default ImageListExhibition