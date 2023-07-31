'use client'
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import getData from "../../hooks/getData";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { useRouter } from "next/navigation";

const style = {
    display: 'flex',
    justifyContent: 'center',
    transition: 'transform 0.5s ease', 
    transform: 'scale(1)',
      ':hover': {
      transform: 'scale(1.2)', 
    },
  };
 

const Text=({params})=>{
    const{id}= params
    const[paper, setPaper]= useState({title:'',image:'', date:''})
    const router= useRouter()

    useEffect(()=>{
              const fetchData = async () => {
              const papersData = await getData('text');
              const text= papersData.find((text)=> text.id===id)
              if(!text){
                router.push('/text')
                return null
              }
              const {title, image, date}= text
      
             setPaper( { ...paper, title, image, date })
            };      
            fetchData();  
          },[])
   
return(
    <>
                <Navigation/>   
                <Box sx={{display:'flex', justifyContent:'center', }}>
            <h1 style={{color:'white'}}>{paper.title} </h1>
       {/*      <div><p>Fecha {paper.date}</p></div> */}
            
            </Box>
            <Box sx={style}>
              <img src={paper.image} style={{width:'45%'}} alt={paper.title} />
              
               </Box>

      

    </>
)
}
 
export default Text;