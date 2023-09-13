"use client";
import ButtonStart from "../ButtonStart/ButtonStart"
import style from './Landing.module.css'
import Link from "next/link"
import { useEffect, useState } from "react"
import getData from "../../hooks/getData";
import { COVER } from "../../../utils/consts";
import {Mplus1} from '../../fonts/fonts'
import LoadingBar from 'react-top-loading-bar'

const Landing=()=>{
   const[image, setImage]= useState()
   const [progress, setProgress] = useState(0)
     
useEffect(()=>   setProgress(100),[])

  useEffect(()=>{

(async function getCoverImage(){
   try {
      
      const response= await getData(`${COVER}/active`)
      if(!response) throw new Error('error al subir los datos')
      const imageFetched= setImage(response[0].image)
   } catch (error) {
      return {error:error.message}
   }
}
)()},[])

return(
  <div className={style.landingContainer}>
      <LoadingBar  color='black'progress={progress}  />

     {
!image &&      <>
<ButtonStart/>
 <div className={style.brandContainer}>
  <Link href='/'><h1 className={`${Mplus1.className}${style.brandLandingWhithoutImg}`}  >MARIA FERRARI HARDOY</h1></Link>
 </div>     
</>
     }
     
     {image ?    
     <>
     <ButtonStart/>
        <img className={style.imageLanding} src={image}   alt="imagen de portada"  />
      <div className={style.brandContainer}>
      <Link href='/'><h1 className={`${Mplus1.className}${style.brandLanding}`} >MARIA FERRARI HARDOY</h1></Link>
      </div>     
     </>:
      <>
        <div className={style.brandContainer}>
        <Link href='/'><h1 style={{color:'black'}} className={`${Mplus1.className}${style.brandLanding}`} >MARIA FERRARI HARDOY</h1></Link>
        </div>     
       </>
     }
     </div>)
}

export default Landing