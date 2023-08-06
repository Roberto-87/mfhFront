'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardText from "../components/CardText";
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

 const Works = () => {
    const [papers, setPapers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const papersData = await getData('text');
        const orderedPapers= papersData.sort((a,b)=> (parseInt(b.date.split('-')[1]))-parseInt((a.date.split('-')[1])))
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



