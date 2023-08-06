'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardWorks from "../components/CardWorks";

 const Works = ({locale}) => {
console.log(locale)
  const [works, setWorks] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const worksData = await getData('works');

  setWorks(worksData);
      };      
      fetchData();  
    }, []);
    return (< > 
        <CardWorks works={works} />
      </>
        )
}
export default Works



