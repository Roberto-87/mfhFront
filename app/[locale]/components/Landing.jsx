"use client";
import ButtonStart from "./ButtonStart"
import style from './Landing.module.css'
import Link from "next/link"
import { useEffect, useState } from "react"
import getData from "../hooks/getData";

const filterImageActive=(images)=>{
  return images.filter((images)=>images.status===true)[0].image
}

const Landing=()=>{
const[image, setImage]= useState()

useEffect(()=>{
(async function getCoverImage(){
   const response= await getData('cover')
   const imageFetched= filterImageActive(response)
   setImage(imageFetched)}
)()},[])

return(
  <div className={style.landingContainer}>
     {image &&    
     <>
     <ButtonStart/>
        <img className={style.imageLanding} src={image}   alt="imagen de portada"  />
      <div className={style.brandContainer}>
         <Link href='/'><h1 className={style.brandLanding} >Maria Ferrari Hardoy</h1></Link>
      </div>     
     </>
     }
     </div>)
}

export default Landing