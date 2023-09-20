"use client";
import ButtonStart from "../ButtonStart/ButtonStart"
import style from './Landing.module.css'
import Link from "next/link"
import { useEffect, useState } from "react"
import getData from "../../hooks/getData";
import { COVER } from "../../../utils/consts";
import {Mplus1} from '../../fonts/fonts'
import LoadingBar from 'react-top-loading-bar'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css'
import AOS from 'aos';


const Landing=()=>{
   const[image, setImage]= useState()
   const [progress, setProgress] = useState(0)
   const[imageLoaded, setImageLoaded]= useState(false)

useEffect(()=>{
(async function getCoverImage(){
   try {
      
      const response= await getData(`${COVER}/active`)
      if(!response) throw new Error('error al subir los datos')
      const imageFetched= setImage(response[0].image)
      console.log(response)
   } catch (error) {
      return {error:error.message}
   }
}
)()
setProgress(100)
    AOS.init({
      duration: 200,
    })

},[])
const onHandleLoad=()=>{
   setImageLoaded(true)
}

return(
  <div className={style.landingContainer}>
      <LoadingBar  color='black'progress={progress}  />
    
     <>
        <LazyLoadImage  loading="lazy" effect="opacity" onLoad={onHandleLoad} className={style.imageLanding} src={image} data-aos={'fade-up'}  alt="imagen de portada"  />
     {imageLoaded &&   
     <div style={{position:'relative', top:'5%'}} >
     <ButtonStart  />
     </div>
     }
      <div className={style.brandContainer}>
      <Link href='/'><h1 className={`${Mplus1.className}${style.brandLanding}`} >MARIA FERRARI HARDOY</h1></Link>
      </div>     
     </>
      <>
       </>
     </div>)
}

export default Landing