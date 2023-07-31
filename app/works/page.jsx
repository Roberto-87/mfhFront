'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardWorks from "../components/CardWorks";


 const Works = () => {
    const [works, setWorks] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const worksData = await getData('works');

  setWorks(worksData);
      };      
      fetchData();  
    }, []);
    return (< > 
        <Navigation/>
      
        <CardWorks works={works} />
      
      </>
        )
}
export default Works



