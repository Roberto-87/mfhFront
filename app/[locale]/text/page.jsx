'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardText from "../components/CardText/CardText";

const textOrdered=(texts)=>{
return texts.sort((a,b)=> (parseInt(b.date.split('-')[1]))-parseInt((a.date.split('-')[1]))).sort((a,b)=> (parseInt(b.date.split('-')[1]))-parseInt((a.date.split('-')[1])))
}

const Works = () => {
    const [papers, setPapers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const papersData = await getData('text');
        const orderedPapers= textOrdered(papersData)
        setPapers(orderedPapers);
      };      
      fetchData();  
    }, []);

    return (< > 
        <CardText texts={papers} />
        </>
        )
}
export default Works
