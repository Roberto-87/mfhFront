'use client'
import Navigation from "../components/Navigation"
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'


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
      
        <Card works={works} />
      
      </>
        )
}
export default Works



