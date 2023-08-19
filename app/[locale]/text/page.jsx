'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardText from "../components/CardText/CardText";
import {TEXT} from '../../utils/consts'

const textOrdered=(texts)=>{
  return texts.sort((a,b)=> b.date.split(' ')[1]- a.date.split(' ')[1])
}

const Works = () => {
    const [papers, setPapers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const papersData = await getData(TEXT);
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
