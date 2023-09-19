'use client'
import { ImageList, ImageListItem } from "@mui/material"
import ModalCarrousel from "../ModalCarrousel/ModalCarrousel";
import {  useState } from "react";
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'


const ImageListExhibition=({exhibition})=>{
   const [activeImage, setActiveImage] = useState();
   const[open, setOpen]= useState(false)
   const[imageLoaded, setImageLoaded]= useState(false)
   const handleClose = () => setOpen(false);

   const onHandleClick=(image)=>{
    setActiveImage(image)
    setOpen(true)
   }

   const onHandleLoad=()=>{
    setImageLoaded(true)
   }
    return(
      <ImageList cols={1} >
        
{/*   {!imageLoaded && 
  <div style={{display:'flex', justifyContent:'center'}}>
     <LoaderAnimation/>   
  </div>
} */}
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
     {
      open && <ModalCarrousel activeImage={activeImage} allImages={exhibition.images} open={open} onClose={handleClose} />
      }
    </ImageList>
    )
}
     
export default ImageListExhibition