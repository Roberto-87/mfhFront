'use client'
import Navigation from "../components/Navigation"
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'


 const Works = () => {
    const [papers, setPapers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const papersData = await getData('text');
        const orderedPapers= papersData.sort((a,b)=> parseInt(a.date)-parseInt(b.date))
         setPapers(orderedPapers);
      };      
      fetchData();  
    }, []);


    return (< > 
        <Navigation/>
      
        <Card texts={papers} />
      
      </>
        )
}
export default Works



