'use client'
import { useEffect } from "react";
import getData from "../../hooks/getData";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TEXT } from "../../../utils/consts";
import TextDetailCard from "../../components/TextDetailCard/TextDetailCard";
import { papersFinder } from "../../../utils/functions"; 
import LoadingBar from 'react-top-loading-bar'

const Text=({params})=>{
  const{id}= params
  const[paper, setPaper]= useState({})
  const router= useRouter()
  const [progress, setProgress] = useState(0)


    useEffect(()=>{
      setProgress(100)
              const fetchData = async () => {
              const papersData = await getData(TEXT);
              console.log(papersData)
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
   
return(
  <>
     <LoadingBar  color='black'progress={progress}  />
     <TextDetailCard paper={paper}/>
  </>
   )
} 
export default Text;