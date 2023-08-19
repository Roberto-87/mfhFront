'use client'
import { useEffect } from "react";
import getData from "../../hooks/getData";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { TEXT } from "../../../utils/consts";

const style = {
    display: 'flex',
    justifyContent: 'center',
    height:'60%',
    transition: 'transform 0.6s ease', 
    transform: 'scale(1)',
/*       ':hover': {
      transform: 'scale(1.5)', 
    }, */
  };
 

const Text=({params})=>{
    const{id}= params
    const[paper, setPaper]= useState({title:'',image:'', date:'', author:'', type:'',format:''})
    const router= useRouter()

    useEffect(()=>{
              const fetchData = async () => {
              const papersData = await getData(TEXT);
              const text= papersData.find((text)=> text.id===id)
              if(!text){
                router.push(`/${TEXT}`)
                return null
              }
              const {title, image, date, author, type}= text
              setPaper( { ...paper, title, image, date, author, type,['format']:image.split('.').at(-1) })
              console.log(paper)
            };      
            fetchData();  
          },[])
   
return(
    <>
    
     

              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
         <h1 style={{color:'white'}}>{paper.title}</h1>
            <p style={{color:'white'}}>Autore: {paper.author}- {paper.date}</p>
            </Box>
            
            <Box sx={style}>
              {paper.format === 'pdf' ?
                <embed src={paper.image} style={{width:'35%'}} alt={paper.title}></embed>
              :
              <img src={paper.image} style={{width:'35%'}} alt={paper.title} />
              }
              
               </Box>

      

    </>
)
}
 
export default Text;