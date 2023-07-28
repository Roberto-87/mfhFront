'use client'
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import getData from "../../hooks/getData";
import { useState } from "react";


const Text=({params})=>{
    const{id}= params
    const[paper, setPaper]= useState({title:'',text:''})

    useEffect(()=>{
              const fetchData = async () => {
              const papersData = await getData('text');
              const orderedPapers= papersData.sort((a,b)=> parseInt(a.date)-parseInt(b.date))
              const title=   orderedPapers[id.at(-1)].title
              const text= orderedPapers[id.at(-1)].image
              setPaper( ({ ...paper, title, text }))
               };      
            fetchData();  
    },[])


return(
    <>
                <Navigation/>   
            <h1>{paper.title}</h1>
                <iframe style={{height:'90%', width:'100%'}} src={paper.text}/>

    </>
)
}
 
export default Text;