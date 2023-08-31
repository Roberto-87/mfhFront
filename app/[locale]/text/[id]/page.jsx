'use client'
import { useEffect } from "react";
import getData from "../../hooks/getData";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TEXT } from "../../../utils/consts";
import TextDetailCard from "../../components/TextDetailCard/TextDetailCard";
import { papersFinder } from "../../../utils/functions"; 

const Text=({params})=>{
    const{id}= params
    const[paper, setPaper]= useState({})
    const router= useRouter()

    useEffect(()=>{
              const fetchData = async () => {
              const papersData = await getData(TEXT);
              const text= papersFinder(papersData, id)
              if(!text){
                router.push(`/${TEXT}`)
                return null
              }
              const {title, image, date, author, type}= text
              setPaper( { ...paper, title, image, date, author, type,['format']:image.split('.').at(-1) })
             };      
            fetchData();  
          },[])
   
return<TextDetailCard paper={paper}/>   
} 
export default Text;