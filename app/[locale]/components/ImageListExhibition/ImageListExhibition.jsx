'use client'
import { ImageList, ImageListItem } from "@mui/material"
import ModalCarrousel from "../ModalCarrousel/ModalCarrousel";
import {  useState } from "react";

const ImageListExhibition=({exhibition})=>{
   const [activeImage, setActiveImage] = useState();
   const[open, setOpen]= useState(false)
   const handleClose = () => setOpen(false);

   const onHandleClick=(image)=>{
    setActiveImage(image)
    setOpen(true)
   }
    return(
      <ImageList cols={1} /* columns={{ xs: 1, sm: 1, md: 1, xl:3 }} */ >
     { 
        exhibition?.images?.map((image, index) => (
          <ImageListItem  key={index}  style={{gap:'2px', display:'flex', justifyContent:'center'}}>        
          <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image}?w=164&h=200&fit=crop&auto=format&dpr=2 2x`}
                alt={'imagen de exhibición'}
                loading="lazy"
                onClick={()=>onHandleClick(image)}
                style={{cursor:'pointer'}}
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