'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardWorks from "../components/CardWorks/CardWorks";

 const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
   const fetchData = async () => {
     const worksData = await getData('works');
     const activeWorks= worksData?.filter((works)=> works.status===true)
     setWorks(activeWorks);

    };      
    fetchData();  
  }, []);
    
    return (< > 
        <CardWorks works={works} />
      </>
        )
}
export default Works



