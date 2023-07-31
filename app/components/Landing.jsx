"use client";
import ButtonStart from "./ButtonStart"
import style from './Landing.module.css'
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"


const Landing=()=>{

  const[image, setImage]= useState()

useEffect(()=>{
(async function getCoverImage(){
   const response= await axios('http://localhost:3001/cover')
   const imageFetched= response.data[0].image
setImage(imageFetched)
}
)()   },[])
   
    return(
    <div className={style.landingContainer}>
        <ButtonStart/>
        <img className={style.imageLanding} src={image} alt="" />

      {image &&  
     <div className={style.brandContainer}>
        <Link href='/'><h1 className={style.brandLanding} >Maria Ferrari Hardoy</h1></Link>


     </div>
   }
     </div>)
}

export default Landing